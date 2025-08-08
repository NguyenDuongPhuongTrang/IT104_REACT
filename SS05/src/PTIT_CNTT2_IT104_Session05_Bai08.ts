class Book{
    private id: number; 
    private title: string;
    private author: string;
       
    constructor(id: number, title: string, author: string ){    
        this.id =id;
        this.title = title;
        this.author = author;
    
    }
    public getId(): number {
    return this.id;
  }

  public updateInfo(newTitle: string, newAuthor: string): void {
    this.title = newTitle;
    this.author = newAuthor;
  }

  public getInfo(): string {
    return `ID: ${this.id}, Title: ${this.title}, Author: ${this.author}`;
  }
}
class Library {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public updateBookById(id: number, newTitle: string, newAuthor: string): void {
    const book = this.books.find(b => b.getId() === id);
    if (book) {
      book.updateInfo(newTitle, newAuthor);
    }
  }

  public searchBooksByTitle(title: string): void {
    const foundBooks = this.books.filter(book =>
      book.getInfo().toLowerCase().includes(title.toLowerCase())
    );

    if (foundBooks.length > 0) {
      console.log(` Tìm thấy ${foundBooks.length} quyển sách với từ khóa "${title}":`);
      foundBooks.forEach(book => console.log(book.getInfo()));
    } else {
      console.log(` Không tìm thấy sách nào với từ khóa "${title}".`);
    }
  }

  public showBooks(): void {
    console.log(" Danh sách sách trong thư viện:");
    this.books.forEach(book => console.log(book.getInfo()));
  }
}
const library = new Library();

library.addBook(new Book(1, "Tư duy ngược", "Sơn Bùi"));
library.addBook(new Book(2, "Tuổi thơ dữ dội", "Phùng Quán"));
library.addBook(new Book(3, "Harry Potter", "J.K. Rowling"));

library.searchBooksByTitle("ngược");
library.searchBooksByTitle("dội");
library.searchBooksByTitle("chó Kiên");