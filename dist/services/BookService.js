export class BookService {
    constructor(log = () => console.log("//////")) {
        this.books = [];
        this.log = log;
    }
    addBook(book) {
        this.books.push(book);
        this.log(`Book "${book.title}" added successfully.`);
    }
    listBooks() {
        return this.books;
    }
    borrowBook(bookId) {
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
