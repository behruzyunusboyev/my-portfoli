import React, {useState, useEffect, use} from "react";
import axios from "axios";

function CurrencyConvertor() {
    const [rates, setRates] = useState([]);
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("UZS");
    const [result, setResult] = useState(0);

    useEffect(() => {
        const featchRates = async () =>{
            try{
                const response = await axios.get("https://cbu.uz/uz/arkhiv-kursov-valyut/json/");
                const uzs ={Ccy:'UZS', Rate:'1', CcyNm_UZ:"O'zbekiston so'mi"};
                setRates([uzs, ...response.data]);
            }catch(error){
                console.error("Error fetching exchange rates:", error);
            }
        };
        featchRates();
    }, []);

    useEffect(() => {
        if (rates.length > 0) {
            const fromRate = rates.find(rate => rate.Ccy === fromCurrency)?.Rate || 1;
            const toRate = rates.find(rate => rate.Ccy === toCurrency)?.Rate || 1;
            
            const calc = (amount * fromRate) / toRate;
            setResult(calc.toFixed(2));
        }
    }, [rates, fromCurrency, toCurrency, amount]);
    
    return(
        <div>
            <h2>Currency Convertor</h2>
            <div>
                <label htmlFor="amount">Amount:</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                />
            </div>
            <div>
                <label htmlFor="fromCurrency">Dan:</label>
                <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                    {rates.map(r => (
                        <option key={r.Ccy} value={r.Ccy}>
                           {r.Ccy} - {r.CcyNm_UZ} 
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="toCurrency">Ga:</label>
                <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                    {rates.map(r => (
                        <option key={r.Ccy} value={r.Ccy}>
                           {r.Ccy} - {r.CcyNm_UZ} 
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <h3>natija</h3>
                <p>{amount} {fromCurrency} = {result} {toCurrency}</p>
            </div>
        </div>
    )
}
export default CurrencyConvertor;