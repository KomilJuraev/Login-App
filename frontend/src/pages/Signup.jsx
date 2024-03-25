import React, { useState, useEffect, useContext } from "react";
import InputForm from '../components/InputForm';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { singUpUser } from "../services/api";

const Signup = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { userData, setJustSignedUp }= useContext(UserContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        console.log('This user data from signup page' + userData);
        if (userData !== null) {
            navigate('/loggedin')
        } 
    }, [userData, navigate]) 

     async function handleSubmit(e) {
        e.preventDefault();
        const data = await singUpUser(name, lastName, email, password);
        if(data.error) {
            setError(data.error);
        } else {
            setError('');
            setJustSignedUp(true);
            navigate('/login');
        }
    };

    return (
        <div className="signup-page-div main-container">
            {userData === null ? (
            <>
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
                 />
                {error && <div className="error-msg">{'*' + error}</div>}
            </>
            ) : (
                navigate('/loggedin')
            )}
           
        </div>
    );
};

export default Signup;
