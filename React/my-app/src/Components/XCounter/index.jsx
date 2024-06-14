import React from "react";
import { useState } from "react";
import './counter.css'

export default function XCounter(){
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    

   
    return(
        
        <div className="container">
            <h1>Counter App</h1>
            <p>Count : {count}</p>
            <div className="buttons">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    )
}

