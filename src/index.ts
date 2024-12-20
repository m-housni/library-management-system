import { BookService } from './services/index.js';
import { UserService } from './services/index.js';
import { Book } from './models/Book.js';
import { User } from './models/User.js';
import {log1, log3 } from './utils/index.js';

const bookService = new BookService(log1);
const userService = new UserService(bookService);

// Add books
const book1: Book = { id: '1', title: '1984', author: 'George Orwell', isAvailable: true };
const book2: Book = { id: '2', title: 'Brave New World', author: 'Aldous Huxley', isAvailable: true };
bookService.addBook(book1);
bookService.addBook(book2);

// Add users
const user1: User = { id: '1', name: 'Alice', borrowedBooks: [] };
const user2: User = { id: '2', name: 'Bob', borrowedBooks: [] };
userService.addUser(user1);
userService.addUser(user2);

// User borrows a book
userService.borrowBook('1', '1');

// List books to check availability
log3('Available books:');
console.log(bookService.listBooks());
