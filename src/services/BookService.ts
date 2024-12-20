import { Book } from '../models/Book';

export class BookService {
  private books: Book[] = [];
  private log: (message: string) => void;

  constructor(log: (message: string) => void = () => console.log("//////")) {
    this.log = log;
  }

  addBook(book: Book): void {
    this.books.push(book);
    this.log(`Book "${book.title}" added successfully.`);
  }

  listBooks(): Book[] {
    return this.books;
  }

  borrowBook(bookId: string): boolean {
    const book = this.books.find(b => b.id === bookId && b.isAvailable);
    if (book) {
      book.isAvailable = false;
      this.log(`Book "${book.title}" borrowed.`);
      return true;
    }
    this.log(`Book with ID "${bookId}" is not available.`);
    return false;
  }
}
