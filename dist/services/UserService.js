export class UserService {
    constructor(bookService) {
        this.users = [];
        this.bookService = bookService;
    }
    addUser(user) {
        this.users.push(user);
        console.log(`User "${user.name}" added successfully.`);
    }
    borrowBook(userId, bookId) {
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
