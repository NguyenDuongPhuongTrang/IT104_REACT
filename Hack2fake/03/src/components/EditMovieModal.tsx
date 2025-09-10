import { useState } from "react";
import type { Movie } from "../types/movie";

interface Props {
  movie: Movie;
  onClose: () => void;
  onSave: (id: string, title: string) => void;
}

function EditMovieModal({ movie, onClose, onSave }: Props) {
  const [title, setTitle] = useState(movie.title);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-lg font-bold mb-3 text-black">✏️ Chỉnh sửa phim</h2>
        <input
          className="w-full px-3 py-2 border rounded mb-4 text-black"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-300">
            Hủy
          </button>
          <button 
            onClick={() => onSave(movie.id, title)} 
            className="px-4 py-2 rounded bg-green-500 text-white"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditMovieModal;
