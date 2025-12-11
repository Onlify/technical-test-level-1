import { logBooks, searchForBook } from './services/LibraryService';
import { borrowBookByUser, logBorrowHistory, userReturnedBook } from './services/BorrowService';
import { logDataOverview } from './services/StatisticsService';
import { saveData } from './services/DataService';

interface BorrowRequest{
  userId: number,
  bookId: number
}

const main = () : void =>{
  console.log('=== LIBRARY MANAGEMENT SYSTEM ===\n');

  // Log all available books
  console.log('📚 AVAILABLE BOOKS:');
  const returnAllAvailableBooks: boolean = true;
  logBooks(returnAllAvailableBooks);

  // Borrow 2 Books
  console.log('📋 BORROW SIMULATION:');
  const borrowRequests: BorrowRequest[] = [
    {
      userId: 1,
      bookId: 1,
    },
    {
      userId: 2,
      bookId: 5,
    },
  ];

  borrowRequests.forEach((request)=>{
    const { userId, bookId } = request;
    borrowBookByUser(userId, bookId);
  });
  console.log();

  // Check current borrow history
  console.log('📋 CURRENT BORROWS:');
  logBorrowHistory();

  // Simulate user returned book
  console.log('\n📤 RETURN SIMULATION:');
  const borrowId = 1;
  userReturnedBook(borrowId);

  // Get overview of the system
  console.log('\n📊 STATISTICS:');
  logDataOverview();

  // Search For Book -> (This applies to book title, author and category)
  console.log('🔍 BOOK SEARCH:');
  const searchTerm = 'Harry';
  console.log(`Search term: ${searchTerm}`);
  searchForBook(searchTerm);

  // Optional -> update user email
  // updateUserEmail(1, "test@gmail.com");

  // Save Data
  console.log('💾 DATA SAVE:');
  saveData();
  console.log();
  console.log('=== END OF PROGRAM ===');
};

if (require.main === module) {
  main();
}
