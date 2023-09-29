import axios from "axios";

const apikey = 'df92fdcc';

export const getMovieDetail = () => {
    const movieId = 'tt3896198'; 
    const url = `http://www.omdbapi.com/?i=${movieId}&apikey=${apikey}`

    axios.get(url)
    .then((res) => console.log(res));
}