import { useState, useEffect } from "react";
import Header from "./components/Header";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import EditMovieModal from "./components/EditMovieModal";
import DeleteMovieModal from "./components/DeleteMovieModal";
import type { Movie } from "./types/movie";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [editingMovie, setEditingMovie] = useState<Movie | null>(null);
  const [deletingMovie, setDeletingMovie] = useState<Movie | null>(null);

  // Load từ localStorage
  useEffect(() => {
    const stored = localStorage.getItem("movies");
    if (stored) {
      setMovies(JSON.parse(stored));
    }
  }, []);

  // Lưu vào localStorage
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const addMovie = (title: string) => {
    const newMovie: Movie = {
      id: Date.now().toString(),
      title,
      createdAt: new Date().toLocaleString(),
    };
    setMovies([...movies, newMovie]);
  };

  const updateMovie = (id: string, title: string) => {
    setMovies(movies.map(m => m.id === id ? { ...m, title } : m));
    setEditingMovie(null);
  };

  const deleteMovie = (id: string) => {
    setMovies(movies.filter(m => m.id !== id));
    setDeletingMovie(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6">
      <div className="max-w-2xl mx-auto bg-white/10 rounded-2xl shadow-lg p-6">
        <Header />
        <MovieForm onAdd={addMovie} />
        <MovieList 
          movies={movies} 
          onEdit={setEditingMovie} 
          onDelete={setDeletingMovie} 
        />

        {editingMovie && (
          <EditMovieModal 
            movie={editingMovie} 
            onClose={() => setEditingMovie(null)} 
            onSave={updateMovie} 
          />
        )}

        {deletingMovie && (
          <DeleteMovieModal 
            movie={deletingMovie} 
            onClose={() => setDeletingMovie(null)} 
            onConfirm={() => deleteMovie(deletingMovie.id)} 
          />
        )}
      </div>
    </div>
  );
}

export default App;
