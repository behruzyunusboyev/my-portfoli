import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/searchbook.css"
function SearchBook(){
    const [book, setBook] = useState('')
    const [baza, setBaza] = useState([])
    const [leading, setLeading] = useState(false)
    const [error, setError] = useState(null)
    const [sellect, setSellect] = useState(null)
    const findBook= async (e) =>{
        e.preventDefault();
        if(!book)return;
        setLeading(true)
        setError(null)
        try{
            const res = await axios.get(`https://openlibrary.org/search.json`, {params : {
                q: book
            }
             
        });
        const sorted = res.data.docs.sort((a, b) => {
        if(a.cover_i && !b.cover_i) return -1;
        if(!a.cover_i && b.cover_i) return 1;
            return 0;
        })
    //    https://openlibrary.org/search.json?q=asl
           if(res.data && res.data.docs){
            setBaza(sorted)
           } 
        }catch(error){
            setError("hatolik yuz berdi" , error)
        }finally{
            setLeading(false)
        }
    }

     const getbook_details = async (key) => {
        console.log(key, ' - item bosildi')
        try{
            const res = await axios.get(`https://openlibrary.org${key}.json`)
            setSellect(res.data)
            console.log(sellect)
            // https://openlibrary.org/works/OL15832973W.json
            // /works/OL15832973W
        }catch(error){
            setError('malumot olishda hatolik')
        }
    }

    return(
        <div className="bokk_main">
            <form onSubmit={findBook} className="book_form">
                <input type="text"
                    value={book}
                    onChange={(e) => setBook(e.target.value)}
                    placeholder="Kitob izlash..."
                    className="book_int"
                />
                <button type="submit" className="book_btn">Izlash</button>
                {leading && <p>Qidirilmoqda...</p>}
                {error && <p style={{color:'#ef4444'}}>{error}</p>}
            </form>
            
            <div className="items">
                {
                    baza.map((item , index) => (
                        <div className="item" onClick={() => getbook_details(item.key)}>
                            <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`} alt={item.title} />
                            <h1 className="book_h1">{item.title}</h1>
                            <h3 className="book_author">{item.author_name}</h3>
                            <p className="book_p">{item.first_publish_year}</p>
                            <p className="book_p">{item.language}</p>
                        </div>
                    ))
                }
                {sellect && (
                    <div className="modal_overlay" onClick={() => setSellect(null)}>
                        <div className="modal_card" onClick={(e) => e.stopPropagation()}>
                            <button className="modal_close" onClick={() => setSellect(null)}>✕</button>
                            <div className="modal_body">
                                <img
                                    className="modal_img"
                                    src={`https://covers.openlibrary.org/b/id/${sellect.covers?.[0]}-L.jpg`}
                                    alt={sellect.title}
                                />
                                <div className="modal_info">
                                    <h1 className="modal_title">{sellect.title}</h1>
                                    <p className="modal_desc">{sellect.description?.value || sellect.description || "Tavsif mavjud emas"}</p>
                                    <div className="modal_subjects">
                                        {sellect.subjects?.slice(0, 6).map((s, i) => (
                                            <span className="modal_tag" key={i}>{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
    export default SearchBook;