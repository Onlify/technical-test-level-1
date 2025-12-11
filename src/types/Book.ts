
export interface Book{
  id: number,
  title: string,
  author: string,
  isbn: string,
  available: boolean,
  category: 'Fiction' | 'Dystopia' | 'Fantasy' | 'Philosophy' | 'Science-Fiction',
}

export interface CategoryCount{
  category: 'Fiction' | 'Dystopia' | 'Fantasy' | 'Philosophy' | 'Science-Fiction',
  nmbOfBooks: number
}
