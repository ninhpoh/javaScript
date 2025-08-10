class Book {
    private title: string;
    private author: string;
    private id: number;

    constructor(title: string, author: string, id: number) {
        this.title = title;
        this.author = author;
        this.id = id;
    }

    getDetails(): string {
        return `${this.title} by ${this.author} (ID: ${this.id})`;
    }

    getId(): number {
        return this.id;
    }
}

class Library {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    addBook(title: string, author: string, id: number): void {
        const book = new Book(title, author, id);
        this.books.push(book);
    }

    findBookById(id: number): string | undefined {
        const book = this.books.find(book => book.getId() === id);
        return book ? book.getDetails() : undefined;
    }

    getBookList(): string[] {
        return this.books.map(book => book.getDetails());
    }
}

// Khởi tạo đối tượng Library
const library = new Library();

library.addBook("TypeScript Guide", "John Doe", 1);
library.addBook("JavaScript Basics", "Jane Smith", 2);
library.addBook("Advanced TypeScript", "Alice Johnson", 3);
library.addBook("Web Development", "Bob Wilson", 4);
library.addBook("Programming 101", "Carol Taylor", 5);

//tim kiem
const foundBook = library.findBookById(2);
console.log("Thông tin sách tìm được:", foundBook);

console.log("Danh sách tất cả sách trong thư viện:");
library.getBookList().forEach((book, index) => {
    console.log(`${index + 1}. ${book}`);
});