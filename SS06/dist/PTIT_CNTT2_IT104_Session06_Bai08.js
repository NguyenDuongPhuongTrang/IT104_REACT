"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    stock;
    status;
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    id;
    name;
    contact;
    lendedBooks;
    status;
    constructor(id, name, contact, lendedBooks = [], status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = lendedBooks;
        this.status = status;
    }
}
class LendedBook {
    memberId;
    bookId;
    dueDate;
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    books = [];
    members = [];
    addBook(book) {
        this.books.push(book);
        console.log(`Đã thêm sách: ${book.title}`);
    }
    showBooks() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(b => {
            console.log(`ID: ${b.id}, Tiêu đề: ${b.title}, Tác giả: ${b.author}, Số lượng: ${b.stock}, Trạng thái: ${b.status}`);
        });
    }
}
const myLibrary = new Library();
const book1 = new Book(1, "Lập trình TypeScript", "Nguyễn Văn A", 3, "available");
const book2 = new Book(2, "Học Node.js", "Trần Thị B", 5, "available");
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.showBooks();
