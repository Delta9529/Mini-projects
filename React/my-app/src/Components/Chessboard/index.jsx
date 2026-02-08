import React, { useState } from "react";
import './chessBoard.css'

export default function Chessboard() {
    const [noOfBox, setNoOfBox] = useState(8);

    const board = [];
    for(let row = 0; row < noOfBox;row++) {
        for(let col = 0; col < noOfBox;col++) {
            console.log(board)
            const isWhite = (row+col) % 2 === 0;
            board.push(
                <div key = {`${row}-${col}`}
                className = {`square ${isWhite ? "white" : "black"}`} />
            ) 
        }
    }
    return (
        <>
            <input 
            type="number" 
            min = "1" max = "8" 
            style={{marginBottom: 2 + 'em',width:15 + 'rem',height: 2 + 'rem'}}
            value={noOfBox}
            onChange={
                (e) => {
                    const value = Number(e.target.value);
                    if(value >= 1 && value <=8) setNoOfBox(value);
                    console.log(e.target.value)}}/>
            <div className="board" style={{display: "grid", border:1 + "px solid black", width:`${noOfBox * 60}px`,gridTemplateColumns: `repeat(${noOfBox}, 60px)`,margin:"auto"}}>{board}</div>
        </>
    )
}
