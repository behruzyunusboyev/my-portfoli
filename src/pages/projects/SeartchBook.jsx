import { useState, useEffect } from "react";
import axios from "axios";
function SearchBook(){
    const [quote, setQuote]= useState('')
    const [word, setWord]= useState([])
    const [loading , setLoading]= useState(false)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState('')
    const [book, setBook] = useState('')
    const fetchedBooks = async (e) =>{
        e.preventDefault();
        try{
            setLoading(true)
            const res= await axios.get(`https://openlibrary.org/search.json?q=${book}`)
            setWord(res.data)
        }catch(error){
            <p>book not found , (error)</p>
        }finally{
            setLoading(false)
        }
    }
    return(
        <div className="Book_main">
            <form onSubmit={fetchedBooks}>
                <input type="text"
                placeholder="search for books"
                onChange={(e) => setBook(e.target.value)}
                />
                <button type="submit">search</button>
            </form>
            {setWord &&(
                <div>
                    <h1>auther : {word.author_name}</h1>
                    <p>published in : {word.first_publish_year}</p>
                    <p>language : {word.language}</p>
                </div>
            )}
        </div>
    )
}
export default SearchBook;