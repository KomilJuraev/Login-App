import React, { useState } from "react";
import InputForm from '../components/InputForm';

const Signup = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {
        const requestBody = {
            "name": name,
            "lastName": lastName,
            "email": email,
            "password": password
        }

        fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(requestBody)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        })    

    }

    return (
        <InputForm 
            pageName={"Signup"}
            name={name}
            setName={setName}
            lastName={lastName}
            setLastName={setLastName}
            email={email} 
            setEmail={setEmail}
            password={password}
            setPassword={setPassword} 
            handleSubmit={handleSubmit}   
        />    )
}

export default Signup;