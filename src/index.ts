import { ServiceFactory } from './factories/ServiceFactory.js';

const bookService = ServiceFactory.createBookService();
bookService.addBook({ id: '1', title: '1984', author: 'George Orwell', isAvailable: true });
bookService.borrowBook("2")
bookService.listBooks();
