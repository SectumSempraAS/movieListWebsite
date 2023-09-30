import { Routes, Route } from "react-router-dom";

import './App.css';
import MovieListPage from './components/movie-list';
import MovieDetailPage from './components/movie-detail'
import LikedMovieList from './components/liked-movie-list'

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MovieListPage />
          }
        />
        <Route
          path="/movieDetail/:id"
          element={
            <MovieDetailPage />
          }
        />
        <Route
          path="/likedMovies"
          element={
            <LikedMovieList />
          }
        />
      </Routes>
    </>
  );
}

export default App;
