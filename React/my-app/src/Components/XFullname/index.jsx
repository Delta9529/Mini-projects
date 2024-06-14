import React, { useState } from "react";
import './fullname.css'

export default function XFullname() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [fullname, setFullname] = useState(null);

    const handleSubmit = (e) => {
       e.preventDefault();
       setFullname(firstName + " " + lastName)
    }


    return (
        <>
            <h1>Fullnamee</h1>
            <div className="Container">
                <form onSubmit={handleSubmit}>
                    <div className="first">
                    <label>First Name:
                        <input
                            type="text"
                            onChange={(e) => setFirstName(e.target.value)} />
                    </label>
                    </div>
                    <div className="last">
                    <label>Last Name:
                        <input
                            type="text"
                            onChange={(e) => setLastName(e.target.value)} />
                    </label>
                    </div>
                    <input type="submit" />
                </form>
                <div className="displayName">
                    <p>FullName : {fullname}</p>
                </div>
            </div>  
        </>

    )
}