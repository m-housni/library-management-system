import { BookService } from './services/BookService.js';
import { UserService } from './services/UserService.js';
import { log } from './utils/Logger.js';
const bookService = new BookService();
const userService = new UserService(bookService);
// Add books
const book1 = { id: '1', title: '1984', author: 'George Orwell', isAvailable: true };
const book2 = { id: '2', title: 'Brave New World', author: 'Aldous Huxley', isAvailable: true };
bookService.addBook(book1);
bookService.addBook(book2);
// Add users
const user1 = { id: '1', name: 'Alice', borrowedBooks: [] };
const user2 = { id: '2', name: 'Bob', borrowedBooks: [] };
userService.addUser(user1);
userService.addUser(user2);
// User borrows a book
userService.borrowBook('1', '1');
// List books to check availability
log('Available books:');
console.log(bookService.listBooks());
