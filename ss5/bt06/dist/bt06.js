"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
class Library {
    books;
    constructor() {
        this.books = [];
    }
    addBook(title, author) {
        const book = new Book(title, author);
        this.books.push(book);
    }
    getBookCount() {
        return this.books.length;
    }
}
const library = new Library();
library.addBook("TypeScript Guide", "John Doe");
library.addBook("JavaScript Basics", "Jane Smith");
console.log("Số lượng sách trong thư viện:", library.getBookCount());
