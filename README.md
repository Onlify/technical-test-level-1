## **Project Structure**

src/  
├── types/  
│   ├── Book.ts       // interface Book { ... }  
│   ├── User.ts       // interface User { ... }  
│   └── Borrow.ts     // interface Borrow { ... }  
├── services/  
│   └── DataService.ts // Saving Data and finale  
│   ├── LibraryService.ts   // Library operations (borrowBook, returnBook, etc...)  
│   └── StatisticsService.ts // Data overview operations  
│   └── DataService.ts // Saving Data and finale  
├── utils/  
│   └── DateUtils.ts    // date formatting, addDays, daysDifference  
│   └── validateInput.ts   // For validating inputs (isValidEmail)   
└── library.ts          // Main file

## **How to set up**

    1. Install dependencies: npm install
    2. Build TypeScript: npm run build
    3. Run the program: npm start
    4. Run in development mode (live TypeScript execution): npm run dev
    5. Run tests: npm test
    6. Lint code: npm run lint


## **My approach** 

- Defined TypeScript interfaces for `Book`, `User`, and `Borrow` to clearly represent the domain.  
- Nested `Book` and `User` inside `Borrow` records to reduce unnecessary loops when generating logs.  
- Broke down the original `doEverything()` function into smaller, single-responsibility functions.  
- Created services (`LibraryService`, `StatisticsService`, `DataService`) to separate concerns and provide reusable operations.  
- Added utility functions in `utils/` for date handling and input validation to eliminate code duplication.  
- Ensured that the refactored code compiles without errors, passes all tests, and adheres to linting rules.

## Notes

- Updated `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin` due to a warning about it being outdated.  
- All changes preserve the original functionality of the program.
