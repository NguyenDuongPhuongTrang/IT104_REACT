"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    updateInfo(newTitle, newAuthor) {
        this.title = newTitle;
        this.author = newAuthor;
    }
    getInfo() {
        return `ID: ${this.id}, Title: ${this.title}, Author: ${this.author}`;
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    updateBookById(id, newTitle, newAuthor) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.updateInfo(newTitle, newAuthor);
            console.log(`Đã cập nhật sách có ID ${id}`);
        }
        else {
            console.log(`Không tìm thấy sách với ID ${id}`);
        }
    }
    showBooks() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }
}
const library = new Library();
library.addBook(new Book(1, "Tư duy ngược", "Sơn Bùi"));
library.addBook(new Book(2, "Tuổi thơ dữ dội", "Phùng Quán"));
library.addBook(new Book(3, "Harry Potter", "J.K. Rowling"));
library.updateBookById(2, "Tuổi thơ dữ dội ", "Phùng Quán ");
library.showBooks();
