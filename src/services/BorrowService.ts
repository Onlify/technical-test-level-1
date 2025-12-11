import { books, users, borrows } from '../data';
import {
    calculateDays,
    returnFutureDateISO,
    returnCurrentDateAndTime,
} from '../utils/dateUtils';

/*
    Ps. The find method actually returns a reference, so any changes to value returned
    impact the value inside the array too
*/

// Borrow book by user
export const borrowBookByUser = (userId: number, bookId: number): boolean => {
    try {
        // Find selected book to borrow using bookId argument
        const selectedBook = books.find((book) => book.id === bookId);

        if (!selectedBook) {
            throw new Error(
                `Book with Id (${bookId}) does not exist`,
            );
        }

        if (!selectedBook.available) {
            throw new Error(
                `Book with Id (${bookId}) is unavailable...`,
            );
        }

        // Find the user borrowing the book using userId argument
        const selectedUser = users.find(user=>user.id === userId);
        if (!selectedUser) {
            throw new Error(
                `There is no user with id (${userId}) - Couldn't Borrow`,
            );
        }

        // Saving the borrow info in borrow history
        borrows.push({
            id: borrows.length + 1,
            book: selectedBook,
            user: selectedUser,
            borrowDate: returnCurrentDateAndTime(),
            // Argument specifies the number of days
            returnDate: returnFutureDateISO(14),
            returnedOn: null,
            returned: false,
        });

        // Mark book as unavailable
        selectedBook.available = false;
        // Logging on success
        console.log(`✅ ${selectedUser.name} borrowed '${selectedBook.title}'`);
        return true;
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.error(e.message);
        } else {
            console.log('Unknown error occured whilst borrowing book: ', e);
        }
        console.log(`❌ Cannot borrow book ID ${bookId}`);
        return false;
    }
};

// Show all books that are currently borrowed
export const logBorrowHistory = () : void =>{
    if (borrows.length === 0) {
        console.log('There are currently no borrowed books...');
        return;
    }
    // Going through the borrow history logs
    for (const currBorrow of borrows) {
        if (currBorrow.returned)
            {continue;}
        // Getting username and book title from their respective references
        const username = currBorrow.user.name;
        const bookTitle = currBorrow.book.title;

        const returnDate = new Date(currBorrow.returnDate);
        const today = new Date();

        // Calculate difference in days
        const days = calculateDays(today, returnDate);

        if (days < 0) {
            // Book is late
            console.log(`- ${username} : '${bookTitle}' (⚠️ LATE by ${Math.abs(days)} days)`);
        } else {
            // Book still due
            console.log(`- ${username} : '${bookTitle}' (📅 due in ${days} days)`);
        }
    }
};

// User returned a book
export const userReturnedBook = (borrowId: number) : boolean =>{
    try {
        // Find borrow
        const selectedBorrow = borrows.find((borrow)=>borrow.id === borrowId);

        // If borrow doesn't exist, throw an error
        if (!selectedBorrow)
            {throw new Error("Couldn't find borrow...");}


        // If borrow has been returned already
        if (selectedBorrow.returned)
            {throw new Error('Book has already been returned');}


        // Mark as returned
        selectedBorrow.returned = true;
        selectedBorrow.returnedOn = returnCurrentDateAndTime();
        selectedBorrow.book.available = true;

        // Log success
        const username = selectedBorrow.user.name;
        const title = selectedBorrow.book.title;
        console.log(`✅ ${username} returned '${title}'\n`);

        return true;
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.error(e.message);
        } else {
            console.error('Unknown error occured while trying to return book: ', e);
        }
        console.log();
        return false;
    }
};
