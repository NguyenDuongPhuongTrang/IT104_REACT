class Book{
    private title: string;
    private author: string;

    constructor(title: string, author: string){
        this.title = title;
        this.author = author;
    }
    public getInfo(): string{
        return `Title: ${this.title}, Author: ${this.author}`;
    }
}
class Library {
  private books: Book[] = [];
  public addBook(book: Book): void {
    this.books.push(book);
  }
  public showBooks(): void {
    console.log(" Danh sách sách trong thư viện:");
    this.books.forEach((book, index) => {
      console.log(`${index + 1}. ${book.getInfo()}`);
    });
  }
}
const book1 = new Book("Tư duy ngược", "Sơn Bùi");
const book2 = new Book("Tuổi thơ dữ dội", "Phùng Quán");
const book3 = new Book("Harry Potter", "J.K. Rowling");

const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

myLibrary.showBooks();