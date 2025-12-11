import { books, users } from '../data';
import { Book } from '../types/Book';
import { User } from '../types/User';
import { isValidEmail } from '../utils/validateInput';
// This logs all available or all unavailable books on demand
export const logBooks = (isAvailable: boolean): void => {
  // To track whether a book was found or not - for logging logic below
  let found = false;

  // Loop through and log books that match availableBooks argument
  for (const b of books) {
    if (b.available === isAvailable) {
      console.log(
        `- ${b.title} by ${b.author} (ID: ${b.id}) - Category: ${b.category}`,
      );
      found = true;
    }
  }

  // Notify user if no books were found (Available or Unavailable books)
  if (!found)
    {console.log(
      isAvailable
        ? 'There are currently no available books...'
        : 'All books are currently available...',
    );}
  console.log();
};

export const searchForBook = (searchValue: string): Book[] => {
  // Turn search value to lower case
  searchValue = searchValue.toLowerCase();

  // Loop through the books and find book that matches title, author or category with argument
  const results = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchValue) ||
      book.author.toLowerCase().includes(searchValue) ||
      book.category.toLowerCase().includes(searchValue)
    );
  });

  // If results found log it
  if (results.length > 0) {
    console.log('Results found:');
    results.forEach((book) => {
      const status = book.available ? '✅ Available' : '❌ Borrowed';
      console.log(`- ${book.title} by ${book.author} (${status})`);
    });
  } else {
    // otherwise log no results found
    console.log('No results found...');
  }

  return results;
};


/*
  This is optional here and not required!
*/

export const updateUserEmail = (userId: number, newEmail: string) : boolean => {
  try {
    // Find User
    const selectedUser = users.find(user=>user.id);
    if (!selectedUser) {
      throw new Error("Couldn't find user to update.");
    }

    // Validate Email
    if (!isValidEmail(newEmail)) {
      throw new Error('Email is not valid.');
    }

    // Assign new email
    selectedUser.email = newEmail;

    return true;
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
    } else {
      console.log("Unexpected error happened, couldn't update user email ", e);
    }
    console.log('Update User Email Failed...');
    return false;
  }
};

// Getting user data, output is either user object or null
export const getUserData = (userId: number): (User | null) =>{
  try {
    const selectedUser = users.find(user=> user.id === userId);
    if (!selectedUser)
      {throw new Error(`Couldn't find user with id ${userId}`);}

    return selectedUser;
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
    } else {
      console.log('Unexpected error occured...', e);
    }
    console.log("Couldn't get user data");
    return null;
  }
};
