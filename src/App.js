import { Routes, Route } from "react-router-dom";

import './App.css';
import MovieListPage from './components/movie-list';
import MovieDetailPage from './components/movie-detail'

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
      </Routes>
    </>
  );
}

export default App;
