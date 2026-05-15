import '../styles/projectlar.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HiH1 } from 'react-icons/hi2';

function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [city, setCity] = useState("");
    const [enter, setenter] = useState('')
    const Api_key = 'fcadf245355316866575fa248248725b';
    const fetchWeather = async (e) => {
        e.preventDefault();
        setWeatherData(null)
        setError(null)
        try{
        setLoading(true);
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${Api_key}`);
        const data = response.data;
        setWeatherData(data);
        }catch(err){
            console.error("Xato yuz berdi:", err);
            setError(err);
            // setWeatherData(null)
            // setLoading(false)
        }finally{
            setLoading(false);
        }
    }
    
    return(
        <div className="main_weather">
            <h1 className='weather_h1'>Ob-Havo</h1>
            <form onSubmit={fetchWeather} className='weather_form'>
                <input 
                type="text" 
                placeholder='Shahar nomini kiriting' 
                onChange={ (e) => setCity(e.target.value)} 
                // value={city}
                />
                <button type='submit' >search</button>
            </form>
            {loading && <p>Yuklanmoqda...</p>}
            {error && <p>Xato: {error.message}</p>}
            {weatherData && (
                <div className="weather_card">
                    <h2>{weatherData.name}</h2>
                    <p>Harorat: {weatherData.main.temp}°C</p>
                    <p>Havo: {weatherData.weather[0].description}</p>
                    <p>Namlik: {weatherData.main.humidity}%</p>
                    <p>shamol: {weatherData.wind.speed} m/s</p>
                </div>
            )}
        </div>
    )
}
export default Weather;