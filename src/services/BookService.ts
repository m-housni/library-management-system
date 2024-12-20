import { Book } from '../models/Book';

export class BookService {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
    console.log(`Book "${book.title}" added successfully.`);
  }

  listBooks(): Book[] {
    return this.books;
  }

  borrowBook(bookId: string): boolean {
    const book = this.books.find(b => b.id === bookId && b.isAvailable);
    if (book) {
      book.isAvailable = false;
      console.log(`Book "${book.title}" borrowed.`);
      return true;
    }
    console.log(`Book with ID "${bookId}" is not available.`);
    return false;
  }
}
