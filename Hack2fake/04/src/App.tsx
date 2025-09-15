import { useEffect, useState } from "react";
import AddWordForm from "./components/AddWordForm";
import WordTable from "./components/WordTable";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";
import EditWordModal from "./components/EditWordModal";
import Pagination from "./components/Pagination";

export interface Word {
  id: number;
  english: string;
  vietnamese: string;
}

function App() {
  const [words, setWords] = useState<Word[]>([]);
  const [deleteWord, setDeleteWord] = useState<Word | null>(null);
  const [editWord, setEditWord] = useState<Word | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  // Lấy dữ liệu từ LocalStorage khi load trang
  useEffect(() => {
    const saved = localStorage.getItem("words");
    if (saved) setWords(JSON.parse(saved));
  }, []);

  // Lưu dữ liệu vào LocalStorage mỗi khi words thay đổi
  useEffect(() => {
    localStorage.setItem("words", JSON.stringify(words));
  }, [words]);

  const addWord = (english: string, vietnamese: string) => {
    if (!english || !vietnamese) {
      alert("Không được để trống!");
      return;
    }
    if (words.some(w => w.english.toLowerCase() === english.toLowerCase())) {
      alert("Từ này đã tồn tại!");
      return;
    }
    setWords([...words, { id: Date.now(), english, vietnamese }]);
  };

  const updateWord = (id: number, english: string, vietnamese: string) => {
    setWords(words.map(w => (w.id === id ? { ...w, english, vietnamese } : w)));
    setEditWord(null);
  };

  const confirmDelete = (word: Word) => setDeleteWord(word);

  const deleteWordConfirmed = () => {
    if (deleteWord) {
      setWords(words.filter(w => w.id !== deleteWord.id));
      setDeleteWord(null);
    }
  };

  // --- Phân trang ---
  const totalPages = Math.ceil(words.length / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const currentWords = words.slice(startIndex, startIndex + pageSize);

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-success text-white text-center">
          <h4>📖 Quản Lý Từ Vựng</h4>
        </div>
        <div className="card-body">
          <AddWordForm onAdd={addWord} />
          <WordTable words={currentWords} onEdit={setEditWord} onDelete={confirmDelete} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

      {/* Modal Xóa */}
      {deleteWord && (
        <ConfirmDeleteModal
          word={deleteWord}
          onCancel={() => setDeleteWord(null)}
          onConfirm={deleteWordConfirmed}
        />
      )}

      {/* Modal Sửa */}
      {editWord && (
        <EditWordModal
          word={editWord}
          onCancel={() => setEditWord(null)}
          onSave={updateWord}
        />
      )}
    </div>
  );
}

export default App;
