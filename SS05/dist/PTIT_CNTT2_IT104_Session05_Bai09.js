"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    year;
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getId() {
        return this.id;
    }
    updateInfo(newTitle, newAuthor, newYear) {
        this.title = newTitle;
        this.author = newAuthor;
        this.year = newYear;
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
    updateBookById(id, newTitle, newAuthor, newYear) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.updateInfo(newTitle, newAuthor, newYear);
            console.log(`Đã cập nhật sách có ID ${id}`);
        }
    }
    searchBooksByTitle(title) {
        const foundBooks = this.books.filter(book => book.getInfo().toLowerCase().includes(title.toLowerCase()));
        if (foundBooks.length > 0) {
            console.log(` Tìm thấy ${foundBooks.length} quyển sách với từ khóa "${title}":`);
            foundBooks.forEach(book => console.log(book.getInfo()));
        }
        else {
            console.log(` Không tìm thấy sách nào với từ khóa "${title}".`);
        }
    }
    deleteById(id) {
        const index = this.books.findIndex(b => b.getId() === id);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`Đã xóa sách có ID ${id}`);
        }
        else {
            console.log(`Không tìm thấy sách với ID ${id}`);
        }
    }
    showBooks() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(book => console.log(book.getInfo()));
    }
}
const library = new Library();
library.addBook(new Book(1, "Tư duy ngược", "Sơn Bùi", 2021));
library.addBook(new Book(2, "Tuổi thơ dữ dội", "Phùng Quán", 1985));
library.addBook(new Book(3, "Harry Potter", "J.K. Rowling", 1997));
library.updateBookById(2, "Kiên là chó hay mèo", "VanAnhDo", 2025);
library.deleteById(3);
library.showBooks();
