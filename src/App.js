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
          path="/movies"
          element={
            <MovieListPage />
          }
        />
        <Route
          path="movies/detail/:id"
          element={
            <MovieDetailPage />
          }
        />
        <Route
          path="movies/liked"
          element={
            <LikedMovieList />
          }
        />
      </Routes>
    </>
  );
}

export default App;
