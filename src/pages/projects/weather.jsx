// fetch(`https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=1754c5d19f26d00534bbb0204867c2e2&units=metric`)
//   .then(res => res.json())
import React, { use, useEffect, useState } from 'react';

function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [city, setCity] = useState("");
    const Api_key = 'fcadf245355316866575fa248248725b';
    const fetchWeather = async () => {
        try{
        setLoading(true);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${Api_key}&units=metric`);
        const data = await response.json();
        setWeatherData(data);
        }catch(err){
            console.error("Xato yuz berdi:", err);
            setError(err);
        }finally{
            setLoading(false);
        }
    }
    useEffect(() => {
        if (city) {
            fetchWeather();
        }
    }, [city]);
    return(
        <div className="main_weather">
            <input type="text" placeholder='Shahar nomini kiriting' onChange={(e) => setCity(e.target.value)} />
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