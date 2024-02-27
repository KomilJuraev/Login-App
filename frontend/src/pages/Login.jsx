import React, { useState } from "react";
import InputForm from '../components/InputForm';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault(); // Add this line
        const requestBody = {
            "email": email,
            "password": password
        }
        fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(requestBody)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.error) {
                setError(data.error);
            } else {
                setError('');
                //Using react router to pass the fetched data to loggedin component
                console.log(data);
                navigate('/loggedin', { state: { userData: data } })
            }
            console.log(data);
        }).catch((err) => {
            setError(err.message);
        })    
    }

    return (
        <div>
            <InputForm 
                pageName={"Login"}
                email={email} 
                setEmail={setEmail}
                password={password}
                setPassword={setPassword} 
                handleSubmit={handleSubmit}   
            />
            <div>{error && <div>{error}</div>}</div>
        </div>
    )
}

export default Login;