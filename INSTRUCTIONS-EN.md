# Instructions for the candidate

## 🎯 Objective

You must refactor the code in `src/library.ts` to make it more readable, maintainable and testable, without changing its functional behavior.

## 📋 Checklist

### ✅ Before starting

- [ ] Carefully read the existing code
- [ ] Identify the problems
- [ ] Run the original program: `npm start`
- [ ] Verify that tests pass: `npm test`

### 🔄 During refactoring

- [ ] Create appropriate TypeScript interfaces
- [ ] Break down the `doEverything()` function into smaller functions
- [ ] Eliminate code duplication
- [ ] Improve variable and function naming
- [ ] Organize code into logical modules/classes
- [ ] Replace `any` with appropriate types

### ✅ After refactoring

- [ ] Verify that the program still works: `npm start`
- [ ] Compile without errors: `npm run build`
- [ ] Tests pass: `npm test`
- [ ] No linting errors: `npm run lint`

## 💡 Tips

1. **Start small**: Refactor step by step
2. **Keep tests green**: Regularly check that the program works
3. **Types first**: Start by defining interfaces
4. **One responsibility per function**: Each function should have a single purpose
5. **Explicit names**: Names should be clear and descriptive

## 📁 Suggested structure

```
src/
├── types/
│   ├── Book.ts
│   ├── User.ts
│   └── Borrow.ts
├── services/
│   ├── LibraryService.ts
│   └── BorrowService.ts
├── utils/
│   └── helpers.ts
└── library.ts (entry point)
```

## ⏰ Recommended time

- **Analysis**: 30 minutes
- **Refactoring**: 2 hours
- **Testing and validation**: 30 minutes

**Total: 3 hours maximum**

## 📝 Deliverable

Send the refactored code with a brief explanation of your refactoring choices.
