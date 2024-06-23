import React,{useEffect, useState} from "react";
import axios from 'axios'

export default function XCountries(){
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
          .then((response) => {
            setData(response.data);
            setLoading(false);
            console.log(data) 
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
          });
      }, []);

      if(loading){
        <div>Loading...</div>
      }

      if(error){
        <div>Error: {error}</div>
      }

    return(
        <div>
            <h1>XCountries</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {data.map((country) => (
                    <div key={country.cca3} style={{ margin: '10px', textAlign: 'center' }}>
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