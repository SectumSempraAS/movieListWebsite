import './App.css';
import Navbar from './components/navbar';
import {getMovieDetail} from './client/index'

function App() {
  getMovieDetail()
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
