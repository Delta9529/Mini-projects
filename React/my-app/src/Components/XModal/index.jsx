import React from "react";
import Form from "./FormModal";
import { useState } from "react";
import './index.css'

export default function ModalForm(){
    const [isActive,setIsActive] = useState(false);

    const handleOpenForm = () => {
        setIsActive(true)
    }

    const handleCloseForm = (e) => {
        e.preventDefault();
        if(e.target.className === 'container' ){
            setIsActive(false)
        }
    }
    return (
        <>
            <div className="container" onClick={handleCloseForm}>
                <h2>User Details Modal</h2>
                <button className="btn_openform" onClick={handleOpenForm}>Open Form</button>
                {isActive && (
                    <Form />
                )}
            </div>
        </>
    )
}