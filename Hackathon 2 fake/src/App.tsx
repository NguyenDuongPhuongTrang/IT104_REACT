import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddBookModal from "./components/AddBookModal";
import EditBookModal from "./components/EditBookModal";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";
import BookTable from "./components/BookTable";
import StatsCard from "./components/StatsCard";
import type { Book } from "./types";

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [deleteBookId, setDeleteBookId] = useState<number | null>(null);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  // Load localStorage
  useEffect(() => {
    const saved = localStorage.getItem("books");
    if (saved) setBooks(JSON.parse(saved));
  }, []);

  // Save localStorage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const handleAdd = (book: Book) => {
    setBooks((prev) => [...prev, { ...book, id: Date.now() }]);
  };

  const handleUpdate = (updatedBook: Book) => {
    setBooks((prev) =>
      prev.map((b) => (b.id === updatedBook.id ? updatedBook : b))
    );
  };

  const handleDelete = () => {
    if (deleteBookId != null) {
      setBooks((prev) => prev.filter((b) => b.id !== deleteBookId));
      setDeleteBookId(null);
    }
  };

  // Filter + Search
  const filteredBooks = books.filter((b) => {
    const matchSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      filterCategory === "all" || b.category === filterCategory;

    return matchSearch && matchCategory;
  });

  const categories = Array.from(new Set(books.map((b) => b.category)));

  // Stats
  const totalBooks = books.length;
  const availableBooks = books.filter((b) => b.available).length;
  const borrowedBooks = totalBooks - availableBooks;

  return (
    <div className="p-6 max-w-screen mx-auto bg-[#6968c9] min-h-screen">
      <Header />
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-center">
        <StatsCard title="Tổng số sách" value={totalBooks} color="bg-white text-[#6968c9]" />
        <StatsCard title="Sách có sẵn" value={availableBooks} color="bg-white text-[#6968c9]" />
        <StatsCard title="Sách đang mượn" value={borrowedBooks} color="bg-white text-[#6968c9]" />
      </div>

      {/* Search + Filter + Add */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Tìm theo tên sách hoặc tác giả..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded p-2 flex-1"
        />
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="border rounded p-2"
        >
          <option value="all">Tất cả thể loại</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <button
          onClick={() => setIsAddOpen(true)}
          className="px-3 py-2 bg-gradient-to-r from-[#6973DA] to-[#7451AB] text-white rounded"
        >
          + Thêm sách mới
        </button>
      </div>

      {/* Table */}
      <BookTable
        books={filteredBooks}
        onEdit={(book) => setEditingBook(book)}
        onDelete={(id) => setDeleteBookId(id)}
      />

      {/* Modals */}
      {isAddOpen && (
        <AddBookModal onAdd={handleAdd} onClose={() => setIsAddOpen(false)} />
      )}

      {editingBook && (
        <EditBookModal
          book={editingBook}
          onUpdate={handleUpdate}
          onClose={() => setEditingBook(null)}
        />
      )}

      {deleteBookId !== null && (
        <ConfirmDeleteModal
          onConfirm={handleDelete}
          onCancel={() => setDeleteBookId(null)}
        />
      )}
    </div>
  );
}

export default App;
