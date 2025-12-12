import { updateUserEmail } from './../src/services/LibraryService';
import { borrowBookByUser } from '../src/services/BorrowService';
import { books, users, borrows } from '../src/data';

/*
  The reason we isolate the data here is to first make
  the tests more readable and to also have a consistent
  expected data at the start of each test
*/

function resetDataForTesting() {
  books.length = 0;
  books.push({
      id: 1,
      title: 'To Be or Not To Be',
      author: 'William Shakespeare',
      isbn: '978-2-07-040024-1',
      available: true,
      category: 'Fiction',
    },
    {
      id: 2,
      title: 'Meditations',
      author: 'Marcus Aurelius',
      isbn: '978-0-452-28423-2',
      available: true,
      category: 'Philosophy',
    });

  users.length = 0;
  users.push(
    { id: 1, name: 'User 1', email: 'user1@test.com', registrationDate: '2023-01-01' },
    { id: 2, name: 'User 2', email: 'user2@test.com', registrationDate: '2023-02-01' },
  );

  borrows.length = 0;
}

describe('Library System', () => {
  // resetting the data for testing before the start of each test
  beforeEach(()=>{
    resetDataForTesting();
  });

  // Borrowed Books functionality
  test('User borrowing books', () =>{
    const userId1 = 1;
    const bookId1 = 1;
    // This function returns true or false based on whether the book was borrowed or not
    const userborrowedBook1 = borrowBookByUser(userId1, bookId1);
    expect(userborrowedBook1).toBe(true);

    // should return false since the book is unavailable now
    const userBorrowedBook2 = borrowBookByUser(userId1, bookId1);
    expect(userBorrowedBook2).toBe(false);

    // Borrowed history should have 1 item in the array because a borrow action occured
    expect(borrows.length).toBe(1);
  });

  // Borrowed Books functionality with non existent books or users
  test('Non existent Users or books', () =>{
    const userId1 = 5;
    const bookId1 = 1;

    // Book exists but user doesn't
    const userBorrowedBook1 = borrowBookByUser(userId1, bookId1);
    expect(userBorrowedBook1).toBe(false);

    const userId2 = 1;
    const bookId2 = 5;
    // User exists but book doesn't
    const userBorrowedBook2 = borrowBookByUser(userId2, bookId2);

    expect(userBorrowedBook2).toBe(false);
  });

  // User email input validation
  test('Updating user email', () =>{
    const userId1 = 1;
    // This should be rejected
    const isUpdatedOne = updateUserEmail(userId1, 'test @gmail.com');
    expect(isUpdatedOne).toBe(false);

    // This should be rejected too
    const isUpdatedTwo = updateUserEmail(userId1, 'testgmail.com');
    expect(isUpdatedTwo).toBe(false);

    // This should be accepted
    const isUpdatedThree = updateUserEmail(userId1, 'test@gmail.com');
    expect(isUpdatedThree).toBe(true);
  });
});
