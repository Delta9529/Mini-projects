import React, { useEffect, useState } from "react";
import axios from "axios";
import './states.css'

export default function XStates(){
    const [country,setCountry] = useState([]);
    const [state,setState] = useState([]);
    const [selectCountry, setSelectCountry] = useState('');
    const [selectState, setSelectState] = useState('');
    const [city, setCity] = useState([]);
    const [statement, setStatement] = useState('');

    useEffect(() => {
        axios.get('https://crio-location-selector.onrender.com/countries')
        .then((response) => {
            setCountry(response.data);
        })
        .catch((err) => {
            alert(err);
        })  
    },[])

    const handleCountryChange = (e) => {
        setSelectCountry(e.target.value)
        console.log(selectCountry)
    };

    useEffect(() => {
        if(selectCountry){
            axios.get(`https://crio-location-selector.onrender.com/country=${selectCountry}/states`)
            .then((response) => {
                setState(response.data);
            })
            .catch((err) => {
                alert(err);
            })  
        }
    },[selectCountry])

    const handleStateChange = (e) => {
        setSelectState(e.target.value);
        console.log(selectState)

    }

    useEffect(() => {
        if(selectCountry && selectState){
            axios.get(`https://crio-location-selector.onrender.com/country=${selectCountry}/state=${selectState}/cities`)
            .then((response) => {
                setCity(response.data);
                console.log(city)
            })
            .catch((err) => {
                alert(err);
            })  
        }
    },[selectState])

    const handleCityChange = (e) => {
        setStatement(e.target.value + ", " + selectState + ", " + selectCountry);
    }


    
    return(
            <div className="container">
                <h1>XStates</h1>
                <header>Select Location</header>
                <div className="selections">
                    <select name="" id="country-dropdown" onChange={handleCountryChange}>
                    <option value="first">Select Country</option>
                        {country.map((country,index) => (
                            <option key={index} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                    {selectCountry && (
                        <select name="" id="state-dropdown" onChange={handleStateChange}>
                            <option value="first">Select State</option>
                                {state.map((state,index) => (
                                    <option key={index} value={state}>
                                        {state}
                                    </option>
                                ))}
                        </select>               
                    )}
                    {selectState && (
                        <select name="" id="city-dropdown" onChange={handleCityChange}>
                            <option value="first">Select City</option>
                                {city.map((city,index) => (
                                    <option key={index} value={city}>
                                        {city}
                                    </option>
                                ))}
                        </select>               
                    )}
                    {setStatement && (
                    <div className="statement">
                        <p>You've selected {statement}</p>
                    </div>
                    )}
                </div>
            </div>
    )
}