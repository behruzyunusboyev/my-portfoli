import { useState, useEffect } from 'react'
import '../styles/AnimeEplorer.css'

function AnimeExplorer() {
  const [animeList, setAnimeList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState('');

    const getAnime = async () => {
  try{
    setLoading(true);
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${searchTerm}&page=${currentPage}`);
    const data = await res.json();
    const sortedData = data.data.sort((a, b) => (b.score ?? 0) - (a.score || 0));
    setAnimeList(sortedData);
    setTotalPages(data.pagination.last_visible_page);

  }catch(error){
    setError(error.message);
    setAnimeList([]);
  }finally{
    setLoading(false);
  }
}
  useEffect(() => {
      getAnime();
      setError(null);
  }, [currentPage, searchTerm] );

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
}
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= Math.min(totalPages, 20); i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={currentPage === i}
        >
          {i}
        </button>
      );
    }
    return pages;
  };
  // if (error) {
  //   return <p>Error: {error}</p>;
  // }
  return (
    <>
      <section id="center">
        {/* <h1 className='h11'>Anime Explorer</h1> */}
        <form onSubmit={handleSearch} className='fromm'>
          <input
            type="text"
            placeholder="Search for anime..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value) }
          />
          <button type="submit">Search</button>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <div className="anime-list">
          {animeList.map((anime) => (
            <div key={anime.mal_id} className="anime-card">
              <img src={anime.images.jpg.image_url} alt={anime.title} />
              <h3>{anime.title}</h3>
              <p>Score: {anime.score ?? 'N/A'}</p>
              <a href={anime.url} target="_blank" rel="noopener noreferrer">More Info</a>
            </div>
          ))}
        </div>
        <div className="pagination">
          {renderPagination()}
        </div>
       </section>
    </>
  )
}

export default AnimeExplorer;
