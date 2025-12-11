import { Book } from './Book';
import { User } from './User';
export interface BorrowHistory{
  id: number,
  book: Book,
  user: User,
  borrowDate: string,
  returnDate: string,
  returnedOn: string | null,
  returned: boolean
}
