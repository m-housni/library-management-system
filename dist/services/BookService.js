export class BookService {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Book "${book.title}" added successfully.`);
    }
    listBooks() {
        return this.books;
    }
    borrowBook(bookId) {
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
