import React, { useState } from "react";
import './index.css'

const Form = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [dob, setDob] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation checks
        if (username === '' || email === '' || phoneno === '' || dob === '') {
            setAlertMessage('Please fill out all details');
            setShowAlert(true);
            return;
        }

        if (!email.includes('@')) {
            setAlertMessage("Invalid email. Please check your email address.");
            setShowAlert(true);
            return;
        }

        if (phoneno.length !== 10) {
            setAlertMessage("Enter a 10-digit phone number");
            setShowAlert(true);
            return;
        }

        const currentDate = new Date();
        const selectedDate = new Date(dob);
        if (selectedDate >= currentDate) {
            setAlertMessage("Invalid date of birth. Please select a date from the past.");
            setShowAlert(true);
            return;
        }

        // If all validations pass
        setAlertMessage('Form submitted successfully!');
        setShowAlert(true);

        // Reset form fields after submission
        setUsername('');
        setEmail('');
        setPhoneno('');
        setDob('');

        // Hide alert after 3 seconds
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    }

    return (
        <div className="container" onClick={(e) => { if (e.target.className === 'container') setShowAlert(false) }}>
            <h2>User Details Modal</h2>
            <button className="btn_openform" onClick={() => setShowAlert(true)}>Open Form</button>
            {showAlert && (
                <div className="form-container">
                    {showAlert && <div className="alert">{alertMessage}</div>}
                    <h3>Fill Details</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label><br></br>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label><br></br>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneno">Phone Number</label><br></br>
                            <input
                                type="tel"
                                id="phoneno"
                                value={phoneno}
                                onChange={(e) => setPhoneno(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob">Date</label><br></br>
                            <input
                                type="date"
                                id="dob"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Form;
