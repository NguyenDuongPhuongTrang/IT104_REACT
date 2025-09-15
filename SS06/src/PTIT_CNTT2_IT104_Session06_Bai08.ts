class Book {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public stock: number,
        public status: string 
    ) {}
}

class Member {
    constructor(
        public id: number,
        public name: string,
        public contact: string,
        public lendedBooks: LendedBook[] = [],
        public status: string 
    ) {}
}

class LendedBook {
    constructor(
        public memberId: number,
        public bookId: number,
        public dueDate: Date
    ) {}
}

class Library {
    public books: Book[] = [];
    public members: Member[] = [];

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Đã thêm sách: ${book.title}`);
    }

    showBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(b => {
            console.log(
                `ID: ${b.id}, Tiêu đề: ${b.title}, Tác giả: ${b.author}, Số lượng: ${b.stock}, Trạng thái: ${b.status}`
            );
        });
    }
}

const myLibrary = new Library();
const book1 = new Book(1, "Lập trình TypeScript", "Nguyễn Văn A", 3, "available");
const book2 = new Book(2, "Học Node.js", "Trần Thị B", 5, "available");

myLibrary.addBook(book1);
myLibrary.addBook(book2);

myLibrary.showBooks();
