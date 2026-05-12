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
        <div className="main">
            <h1>Movie Search</h1>
            <form onSubmit={searchMovies}>
                <input
                    type="text"
                    placeholder="Search for movies..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="movies">
                    {movies.map((movie) => (
                        <div key={movie.imdbID} className="movie" onClick={() => getMovieDetails(movie.imdbID)}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <img src={movie.Poster} alt={movie.Title} />
                            <h2>{movie.Title}</h2>
                            <p>Year: {movie.Year}</p>
                            <p>Type: {movie.Type}</p>
                        </div>
                    ))}
                </div>
            )}
            {(sellect && (
                <div className="movie-details" style={{zIndex:"9999"}}>
                    <h2>{sellect.Title}</h2>
                    <img src={sellect.Poster} alt={sellect.Title} />
                    <p>Year: {sellect.Year}</p>
                    <p>Genre: {sellect.Genre}</p>
                    <p>Director: {sellect.Director}</p>
                    <p>Plot: {sellect.Plot}</p>
                </div>
            ))}
        </div>
    )

}
export default MovieSearch;