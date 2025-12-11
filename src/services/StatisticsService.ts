import { books, users, borrows } from '../data';

/*
    ps. Using Map is much cleaner than looping as we can insert it in the same
    loop we use to track availableBooks and borrowed books. This saves us from
    looping again for it.

    ps. Using set is cleaner than looping too. It saves unique values
    so we can easily rely on it for user ids
*/
export const logDataOverview = (): void => {
  // Books Data
  const totalBooks = books.length;
  let availableBooks = 0;
  let borrowedBooks = 0;

  const categoriesMap = new Map<String, number>();

  // Calculate total number for both borrowed books and available books
  books.forEach((book) => {
    book.available ? availableBooks++ : borrowedBooks++;

    // Add the book to it's respective category count
    const currCategory = book.category;
    // If category is already there increment, otherwise assign 1
    categoriesMap.set(currCategory, (categoriesMap.get(currCategory) || 0) + 1);
  });

  // user Data
  const totalUsers = users.length;
  const activeBorrowers: Set<number> = new Set();

  // Add each user id. Set avoids adding if it's already listed
  borrows.forEach((currBorrow) => {
    // skip books that have been returned
    if (currBorrow.returned) {return;}
    // Add to set
    activeBorrowers.add(currBorrow.user.id);
  });

  // Log Data
  console.log(
    `Total books: ${totalBooks}\n` +
      `Available books: ${availableBooks}\n` +
      `Borrowed books: ${borrowedBooks}\n` +
      `Total users: ${totalUsers}\n` +
      `Active borrowers: ${activeBorrowers.size}`,
  );

  for (const [category, nmbOfBooks] of categoriesMap) {
    console.log(` - ${category}: ${nmbOfBooks} book(s)`);
  }
  console.log();
};
