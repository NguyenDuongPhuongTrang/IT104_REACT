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
class Library {
    books = [];
    members = [];
    addBook(book) {
        this.books.push(book);
        console.log(`Đã thêm sách: ${book.title}`);
    }
    showBooks() {
        console.log("Danh sách sách:");
        this.books.forEach(b => {
            console.log(`ID: ${b.id}, Tiêu đề: ${b.title}, Tác giả: ${b.author}, Số lượng: ${b.stock}, Trạng thái: ${b.status}`);
        });
    }
    registerMember(id, name, contact) {
        const newMember = new Member(id, name, contact, [], "active");
        this.members.push(newMember);
        console.log(`Đã đăng ký thành viên: ${name}`);
    }
    blockMember(id, newStatus) {
        const member = this.members.find(m => m.id === id);
        if (member) {
            member.status = newStatus;
            console.log(`Trạng thái thành viên ${member.name} đã đổi thành: ${newStatus}`);
        }
        else {
            console.log(`Không tìm thấy thành viên với ID ${id}`);
        }
    }
    showMembers() {
        console.log("Danh sách thành viên:");
        this.members.forEach(m => {
            console.log(`ID: ${m.id}, Tên: ${m.name}, Liên hệ: ${m.contact}, Số sách đang mượn: ${m.lendedBooks.length}, Trạng thái: ${m.status}`);
        });
    }
}
const myLibrary = new Library();
myLibrary.addBook(new Book(1, "Lập trình TypeScript", "Nguyễn Văn A", 3, "available"));
myLibrary.addBook(new Book(2, "Học Node.js", "Trần Thị B", 5, "available"));
myLibrary.registerMember(101, "Nguyễn Văn C", "0123456789");
myLibrary.registerMember(102, "Trần Thị D", "0987654321");
myLibrary.blockMember(102, "locked");
myLibrary.showBooks();
myLibrary.showMembers();
