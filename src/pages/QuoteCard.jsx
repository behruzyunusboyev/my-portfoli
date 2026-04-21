
function QuoteCard({ quote, author }) {
  const nusxalash = () =>{
    navigator.clipboard.writeText(`"${quote}" - ${author}`)
    alert("Hikmat nusxalandi!")
  }

  return (
    <div style={{
        borderLeft:"5px solid #61dafb",
        padding:"20px",
        margin:"20px 0",
        background:"#f9f9f9",
        borderRadius:"8px",
        boxShadow:"0 4px 8px rgba(0,0,0,0.1)"
    }}
    id="qdiv">
      <p style={{fontSize:"20px", fontStyle:"italic"}}>{quote}</p>
      <p style={{textAlign:"right", color:"#333"}}>— {author}</p>

      <button style={{ background:"#191818", color:"white", width:"100px", height:"40px", borderRadius:"30px", fontSize:"15px", fontWeight:"bold"}} 
        onClick={nusxalash}>
          nushalash</button>
    </div>
  )
}
export default QuoteCard