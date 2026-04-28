function Product(props){
    const chegirmaBor = props.eskiNarx > props.yangiNarx ;
    return(
        <div style={{border:"1px solid #ddd", width:"200px", padding:"20px", borderRadius:"10px"}}>
            <h3>{props.nomi}</h3>
            {chegirmaBor ? (
                <p style={{color: 'red', textDecoration: 'line-through'}}>{props.eskiNarx} som</p>
            ) : (
                null
            )}
            <p style={{fontWeight:"bold", fontSize:"20px"}}>{props.yangiNarx} som</p>
            <button onClick={() => props.sotibOlish(props.nomi)} style={{cursor:"pointer"}}>
                Sotib olish
            </button>
        </div>
    )
}
export default Product;