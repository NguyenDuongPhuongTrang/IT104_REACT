import type { Movie } from "../types/movie";

interface Props {
  movie: Movie;
  onEdit: () => void;
  onDelete: () => void;
}

function MovieCard({ movie, onEdit, onDelete }: Props) {
  return (
    <div className="bg-white text-black p-4 rounded-xl shadow-md">
      <h3 className="font-bold text-lg">{movie.title}</h3>
      <p className="text-gray-600 text-sm">Thêm lúc: {movie.createdAt}</p>
      <div className="flex gap-2 mt-3">
        <button 
          onClick={onEdit}
          className="px-3 py-1 rounded-lg bg-yellow-400 hover:bg-yellow-500"
        >
          ✏️ Sửa
        </button>
        <button 
          onClick={onDelete}
          className="px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-white"
        >
          ❌ Xoá
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
