import { useState } from "react";
import axios from "axios";
import "../styles/MovieSearch.css";

function MovieSearch() {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [sellect, setSelect] = useState("");
    const [loading, setLoading] = useState(false);

    const API_key= '25453f18';

    const searchMovies = async (e) => {
        e.preventDefault();
        if (!query) return;
        setLoading(true);
        try{
            const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${API_key}`);
            setMovies(response.data.Search || []);
        }catch(error){
            console.error("Error fetching movies:", error);
        }finally{
            setLoading(false);
        }
    }
    const getMovieDetails = async (imdbID) => {
        try{
            const response = await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_key}`);
            setSelect(response.data);
        }catch(error){
            console.error("Error fetching movie details:", error);
        }
    }
    const MovieDetails = (movie) =>{
        console.log('bosildi');
        try{
        const response = axios.get(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_key}`);
        setSelect(response.data);
        }catch(error){
            console.error("Error fetching movie details:", error);
        }

        // return(
        //     <div className="movie-details">
        //         <h2>{movie.Title}</h2>
        //         <img src={movie.Poster} alt={movie.Title} />
        //         <p>Year: {movie.Year}</p>
        //         <p>Genre: {movie.Genre}</p>
        //         <p>Director: {movie.Director}</p>
        //         <p>Plot: {movie.Plot}</p>
        //     </div>
        // )
    }
    return(
        <div className="main_movie">
            <h1>Movie Search</h1>
            <form onSubmit={searchMovies} className="form_movie">
                <input
                    type="text"
                    placeholder="Film izlash..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Izlash</button>
            </form>
            {loading ? (
                <p>Yuklanmoqda...</p>
            ) : (
                <div className="movies">
                    {movies.map((movie) => (
                        <div key={movie.imdbID} className="movie" onClick={() => getMovieDetails(movie.imdbID)}>
                            <img src={movie.Poster} alt={movie.Title} />
                            <h2>{movie.Title}</h2>
                            <p>Yil: {movie.Year}</p>
                            <p>Tur: {movie.Type}</p>
                        </div>
                    ))}
                </div>
            )}
            {sellect && (
                <div className="movie-details">
                    <div className="img_h2">
                        <h2>{sellect.Title}</h2>
                        <img src={sellect.Poster} alt={sellect.Title} />
                    </div>
                    <div className="movie_texts">
                        <p>Yil: {sellect.Year}</p>
                        <p>Janr: {sellect.Genre}</p>
                        <p>Rejissyor: {sellect.Director}</p>
                        <p>Syujet: {sellect.Plot}</p>
                    </div>
                    <button onClick={() => setSelect(null)} className="close-button">✕</button>
                </div>
            )}
        </div>
    )

}
export default MovieSearch;