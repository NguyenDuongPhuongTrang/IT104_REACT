import type { Movie } from "../types/movie";
import MovieCard from "./MovieCard";

interface Props {
  movies: Movie[];
  onEdit: (movie: Movie) => void;
  onDelete: (movie: Movie) => void;
}

function MovieList({ movies, onEdit, onDelete }: Props) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">
        📽️ Danh sách phim ({movies.length})
      </h2>
      {movies.length === 0 ? (
        <p className="text-center text-gray-300 py-8">
          🎪 Chưa có phim nào <br /> Hãy thêm phim đầu tiên để bắt đầu quản lý!
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {movies.map(movie => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onEdit={() => onEdit(movie)} 
              onDelete={() => onDelete(movie)} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieList;
