import type { Movie } from "../types/movie";

interface Props {
  movie: Movie;
  onClose: () => void;
  onConfirm: () => void;
}

function DeleteMovieModal({ movie, onClose, onConfirm }: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg w-96 text-center">
        <h2 className="text-lg font-bold mb-3 text-black">🗑️ Xác nhận xoá phim</h2>
        <p className="text-black">Bạn có chắc chắn muốn xoá phim <b>"{movie.title}"</b> không?</p>
        <p className="text-sm text-gray-500 mb-4">Hành động này không thể hoàn tác.</p>
        <div className="flex justify-center gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-300">
            Hủy bỏ
          </button>
          <button 
            onClick={onConfirm} 
            className="px-4 py-2 rounded bg-red-500 text-white"
          >
            Xoá phim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteMovieModal;
