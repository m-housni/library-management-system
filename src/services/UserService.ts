import { User } from '../models/User';
import { BookService } from './BookService';

export class UserService {
  private users: User[] = [];
  private bookService: BookService;

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  addUser(user: User): void {
    this.users.push(user);
    console.log(`User "${user.name}" added successfully.`);
  }

  borrowBook(userId: string, bookId: string): void {
    const user = this.users.find(u => u.id === userId);
    if (!user) {
      console.log(`User with ID "${userId}" not found.`);
      return;
    }

    const borrowed = this.bookService.borrowBook(bookId);
    if (borrowed) {
      user.borrowedBooks.push(bookId);
    }
  }
}
