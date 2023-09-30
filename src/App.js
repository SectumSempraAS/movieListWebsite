import { Routes, Route } from "react-router-dom";

import './App.css';
import MovieListPage from './components/movie-list';

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
      </Routes>
    </>
  );
}

export default App;
