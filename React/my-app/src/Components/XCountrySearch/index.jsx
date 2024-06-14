import React, { useEffect, useState } from "react";
import axios from "axios";

export default function XCountrySearch(){
    const [data,setData] = useState([]);
    const[error,setError] = useState('');
    const[searchKeyword, setSearchKeyword] = useState('');
    const[filteredCountries, setFilteredCountries] = useState([]);


    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
          .then((response) => {
            setData(response.data);
            console.log(data)
          })
          .catch((error) => {
            setError(error);
          });
      }, []);

    const handleCountrySearch = (e) => {
        setSearchKeyword(e.target.value);

        const searchedCountries = data.filter((country) => 
            country.name.common.toLowerCase().includes(searchKeyword.toLowerCase()));
        setFilteredCountries(searchedCountries)
    }

    return(
        <div className="container">
            <h1>XCountry Search</h1>
            <input type="text" id = 'searchbar' placeholder="Search Country" onChange={handleCountrySearch} style={{margin:"20px"}} />
            <div className="result" style={{display:"flex", textAlign:"center",justifyContent:"space-evenly"}}>
            {filteredCountries.map((country) => (
                    <div key={country.cca3} style={{ margin: '10px', textAlign: 'center'}}>
                        <img
                            src={country.flags.png}
                            alt={`Flag of ${country.name.common}`}
                            style={{ width: '100px', height: 'auto' }}
                        />
                        <p>{country.name.common}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}