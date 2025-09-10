import { useState } from "react";

interface Props {
  onAdd: (title: string) => void;
}

function MovieForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) return;
    onAdd(title.trim());
    setTitle("");
  };

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Nhập tên phim chuẩn bị chiếu..."
        className="flex-1 px-4 py-2 rounded-lg text-black"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        disabled={!title.trim()}
        className="px-4 py-2 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 disabled:bg-gray-400"
      >
        + Thêm phim
      </button>
    </div>
  );
}

export default MovieForm;
