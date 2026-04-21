import { useState } from 'react'
import {useEffect} from 'react'
import QuoteCard from './QuoteCard';
import "../pages/styles/hikmatlar.css"
function Hikmatlar() {

  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showform, setshowform] = useState(false)
    

  const getQuote = async () =>{

    setLoading(true);
    setError(null);
    try{

      const res = await fetch("https://dummyjson.com/quotes/random");
      const data = await res.json();

      setQuote({
        content: data.quote,
        author: data.author
      });

    }catch(err){
      setError("Failed to fetch quote. Please try again.");
      console.error(err);
    }
    setLoading(false);
    setshowform(false)
  }

  useEffect(() => {
    getQuote();
  }, []);

    const [hikmat, setHikmat] = useState("");
    const [author, setAuthor] = useState("");
    let hikmatlar =[]
    let muallif =[]


   const qoshish = () =>{
        hikmatlar.push(hikmat)
        muallif.push(author)
        console.log(hikmatlar);
        console.log(muallif);
    }
    const clear = () =>{
        setHikmat("");
        setAuthor("");
    }
    
  const  createQ = () =>{
        // setQuote({
        //   content: hikmatlar,
        //   author: author
        // })
         setshowform(true)
    }
  
  return (
    <div id='hikmat_main_div'>
      {showform && (
        <div id='yasash'>
            <div className="hik_inp">
            <input type="text" placeholder="Hikmat" value={hikmat} onChange={(e) => setHikmat(e.target.value)} />
            <input type="text" placeholder="Muallif" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div className="hik_btn">
            <button onClick={qoshish}>Qo'shish</button>
            <button onClick={clear}>clear</button>
            </div>
      </div>
    )}

    <div style={{maxWidth:"600px", margin:"50px auto", textAlign:"center"}} id='app' >
        <h1 id='hik_h1'>kun hikmati</h1>
        {loading && <p>Loading...</p>}
        {error && <p style={{color:"red"}}>{error}</p>}
        {!loading && !error && quote && (

            QuoteCard({ quote: quote.content, author: quote.author })  
      )}
    </div >
        <div id="hik_btns">
          <button onClick={getQuote} style={{
          background:"black",
          color:"white",
          width:"120px",
          height:"60px",
          borderRadius:"30px",
          fontSize:"15px",
          fontWeight:"bold"
        }}>Yangi hikmat</button>

        {/* <button 
        onClick={createQ}  
        style={{
          background:"black",
          color:"white",
          width:"120px",
          height:"60px",
          borderRadius:"30px",
          fontSize:"15px",
          fontWeight:"bold"
        }}>Hikmat yaratish</button> */}
        </div>
    </div>
  )
}

export default Hikmatlar


  // useEffect(() => {
  //   if (quote) {
  //   const ranglar = ["#3498DB", "#2ECC71", "#9B59B6", "#E67E22", "#E74C3C", "#F1C40F", "#34495E", "#FD79A8"];
  //   const randomColor = ranglar[Math.floor(Math.random() * ranglar.length)];
  //   document.body.style.backgroundColor = randomColor;
  //   document.body.style.transition = "background-color 1s ease";
  // };
  // },[quote]);