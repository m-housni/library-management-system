async function dynamicBookService() {
    const { BookService } = await import('./services/index.js');
    const { log1 } = await import('./utils/index.js');
  
    const log: (message: string) => void = log1;
    const bookService = new BookService(log);
  
    bookService.addBook({ id: '1', title: '1984', author: 'George Orwell', isAvailable: true });
    bookService.listBooks();
  }
  
  dynamicBookService();
  