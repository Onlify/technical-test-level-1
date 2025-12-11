import { Book } from './types/Book';
import { User } from './types/User';
import { BorrowHistory } from './types/BorrowHistory';

export const users: User[] = [
  {
      id: 1,
      name: 'Jean Dupont',
      email: 'jean.dupont@email.com',
      registrationDate: '2023-01-15',
    },
    {
      id: 2,
      name: 'Marie Martin',
      email: 'marie.martin@email.com',
      registrationDate: '2023-02-20',
    },
    {
      id: 3,
      name: 'Pierre Durand',
      email: 'pierre.durand@email.com',
      registrationDate: '2023-03-10',
    },
];

export const books : Book[] = [
  {
      id: 1,
      title: 'Le Petit Prince',
      author: 'Antoine de Saint-Exupéry',
      isbn: '978-2-07-040024-4',
      available: true,
      category: 'Fiction',
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      isbn: '978-0-452-28423-4',
      available: true,
      category: 'Dystopia',
    },
    {
      id: 3,
      title: "Harry Potter à l'école des sorciers",
      author: 'J.K. Rowling',
      isbn: '978-2-07-054174-9',
      available: false,
      category: 'Fantasy',
    },
    {
      id: 4,
      title: "L'Étranger",
      author: 'Albert Camus',
      isbn: '978-2-07-036002-1',
      available: true,
      category: 'Philosophy',
    },
    {
      id: 5,
      title: 'Dune',
      author: 'Frank Herbert',
      isbn: '978-2-266-11235-3',
      available: true,
      category: 'Science-Fiction',
    },
];

export const borrows : BorrowHistory[] = [];
