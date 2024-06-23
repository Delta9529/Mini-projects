import React, { useState } from "react";

const customDictionary = 
[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]


export default function XDictionary(){
    const [word, setWord] = useState('');
    const [definition, setDefinition] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setWord(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const findWord = customDictionary.find((item) => 
            item.word.toLowerCase() === word.toLowerCase()
        )

        if(findWord){
            setDefinition(findWord.meaning)
        } else {
            setDefinition("Definition not found");
        }
    }

    console.log(definition)

    return(
        <div className="container">
            <h2>Dictionary App</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Enter word"
                value={word}
                onChange={handleChange}/>
                <button>Search</button>
            </form>
            <div className="definition">
                <p>Definition:</p>
                <p>{definition}</p>
            </div>
        </div>
    )
}