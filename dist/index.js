"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function dynamicBookService() {
    return __awaiter(this, void 0, void 0, function* () {
        const { BookService } = yield import('./services/index.js');
        const { log1 } = yield import('./utils/index.js');
        const log = log1;
        const bookService = new BookService(log);
        bookService.addBook({ id: '1', title: '1984', author: 'George Orwell', isAvailable: true });
        bookService.listBooks();
    });
}
dynamicBookService();
