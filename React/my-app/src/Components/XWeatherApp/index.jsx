import React, { useEffect, useState } from "react";
import './weatherapp.css'
import axios from "axios";

export default function XWeatherApp(){
const [data, setData] = useState([]);
const [location, setLocation] = useState('');
const [loading, setLoading] = useState(false);

const fetchData = () => {
    axios.get(`https://api.weatherapi.com/v1/current.json?key=8febb1b84776408c99850418231509&q=${location}`)
        .then((response) => {
            setData(response.data);
            setLoading(false)
        })
        .catch((error) => {
            alert("Failed to fetch data:", error);
            setLoading(false)
        })
}

useEffect(() => {
    if (location) {
        fetchData();
    }
}, []);

const handleInputChange =(e) =>{
    e.preventDefault();
    setLocation(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchData();
}
console.log(data)


    return(
        <div className="container">
            <h2>WeatherApp</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter City Name" onChange={handleInputChange}/>
                <button type="submit">Search</button>
            </form>
            {loading?(<p>Loading</p>)
            :(
                <div>
                    {data.current && (
                            <div className="weather-cards">
                                <div className="weather-card">
                                    <h4>Temperature</h4>
                                    <p>{data.current.temp_c}</p>
                                </div>
                                <div className="weather-card">
                                    <h4>Humidity</h4>
                                    <p>{data.current.humidity}%</p>
                                </div>
                                <div className="weather-card">
                                    <h4>Wind Speed</h4>
                                    <p>{data.current.condition.text}</p>
                                </div>
                                <div className="weather-card">
                                    <h4>Wind Speed</h4>
                                    <p>{data.current.wind_kph} kph</p>
                                </div>
                            </div>
                    )}
                </div>
            )}

        </div>
    )
}