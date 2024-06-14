import React, { useState } from "react";
import './calculator.css'

export default function XCalculator() {
    const [inputValue, setInputValue] = useState('');
    const [res, setRes] = useState(0);

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                const result = eval(inputValue);
                setRes(result.toString());
            } catch(err) {
                setInputValue('err');
            }
        }
        else if(value === 'C'){
            setInputValue('');
            setRes(null)
        }
        else{
        setInputValue(inputValue + value)
    }
}



return (
    <div className="container">
        <header className="head">React Calculator</header>
        <input type="text" value={inputValue} className="userInput" />
        <div className="result">{res}</div>
        <div className="buttons">
            <table>
                <tbody>
                    <tr>
                        <td><button onClick={() => handleButtonClick('9')}>9</button></td>
                        <td><button onClick={() => handleButtonClick('8')}>8</button></td>
                        <td><button onClick={() => handleButtonClick('7')}>7</button></td>
                        <td><button onClick={() => handleButtonClick('+')}>+</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => handleButtonClick('6')}>6</button></td>
                        <td><button onClick={() => handleButtonClick('5')}>5</button></td>
                        <td><button onClick={() => handleButtonClick('4')}>4</button></td>
                        <td><button onClick={() => handleButtonClick('-')}>-</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => handleButtonClick('3')}>3</button></td>
                        <td><button onClick={() => handleButtonClick('2')}>2</button></td>
                        <td><button onClick={() => handleButtonClick('1')}>1</button></td>
                        <td><button onClick={() => handleButtonClick('*')}>*</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => handleButtonClick('C')}>C</button></td>
                        <td><button onClick={() => handleButtonClick('0')}>0</button></td>
                        <td><button onClick={() => handleButtonClick('=')}>=</button></td>
                        <td><button onClick={() => handleButtonClick('/')}>/</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)
}