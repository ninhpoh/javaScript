class Book {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    // Thêm getter để truy cập title và author
    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }
}

class Library {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    addBook(title: string, author: string): void {
        const book = new Book(title, author);
        this.books.push(book);
    }

    getBookList(): string[] {
        return this.books.map(book => `${book.getTitle()} by ${book.getAuthor()}`);
    }
}

// Khởi tạo đối tượng Library
const library = new Library();

// Thêm 5 quyền sách vào thư viện
library.addBook("ABC", "Thor");
library.addBook("Ngay ay! toi yeu em", "NinhPoh");
library.addBook("GAYYYYYY", "Auther");
library.addBook("Bo", "black coke");
library.addBook("Nuoc Hoa Huong Am Dau", "Meo Binh");

// In toàn bộ sách trong thư viện ra
console.log("Toàn bộ sách trong thư viện:");
library.getBookList().forEach((book, index) => {
    console.log(`${index + 1}. ${book}`);
});