class Book{
    private id: number; 
    private title: string;
    private author: string;
    private year: number;
       
    constructor(id: number, title: string, author: string, year: number ){    
        this.id =id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    public getId(): number {
    return this.id;
  }

  public updateInfo(newTitle: string, newAuthor: string, newYear: number): void {
    this.title = newTitle;
    this.author = newAuthor;
    this.year = newYear;
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

  public updateBookById(id: number, newTitle: string, newAuthor: string, newYear: number): void {
    const book = this.books.find(b => b.getId() === id);
    if (book) {
        book.updateInfo(newTitle, newAuthor, newYear);
        console.log(`Đã cập nhật sách có ID ${id}`);
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

  public deleteById(id: number): void {
    const index = this.books.findIndex(b => b.getId() === id);
    if (index !== -1) {
      this.books.splice(index, 1);
      console.log(`Đã xóa sách có ID ${id}`);
    } else {
      console.log(`Không tìm thấy sách với ID ${id}`);
    }
}

  public showBooks(): void {
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

