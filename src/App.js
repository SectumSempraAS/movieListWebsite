import './App.css';
import Navbar from './components/navbar';
import {getMovieDetail} from './client/index'
import MovieListPage from './components/movie-list';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MovieListPage />
    </div>
  );
}

export default App;
