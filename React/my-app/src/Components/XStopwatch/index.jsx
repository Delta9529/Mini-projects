import React, { useEffect, useState } from "react";
import "./stopwatch.css"


export default function XStopwatch(){
    const [time,setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let intervalID;
        if(running){
            intervalID = setInterval(() => setTime(time + 1,10));
        }
        return () => clearInterval(intervalID);
    },[running, time])

    const minutes = Math.floor((time % 360000) / 6000);
    const sec = Math.floor((time % 6000)/100)

    const startAndStop = () => {
        setRunning(!running);
    };

    const reset = () =>{
        setTime(0);
    };

    return(
        <>
            <div className="container">
                <h1>XStopwatch</h1>
                <div className="digital">Time:  
                {minutes.toString().padStart(1, "0")}:{sec.toString().padStart(2, "0")}
                </div>
                <div className="stopwatch-buttons">
                    <button className="btn" onClick={startAndStop}>
                        {running ? "Stop" : "Start"}
                    </button>
                    <button className="btn" onClick={reset}>Reset</button>
                </div>
            </div>
        </>
    )
}