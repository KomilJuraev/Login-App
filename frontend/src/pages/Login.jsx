import React, { useContext, useEffect, useState } from "react";
import InputForm from '../components/InputForm';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { loginUser } from "../services/api";
import Navigation from "../components/Navigation";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { userData, setUserData, error, setError, justSignedUp, setJustSignedUp  } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setUserData(JSON.parse(user));
        }
    }, [setUserData]) 
    
    async function handleSubmit(e) {
        e.preventDefault();
        setJustSignedUp(false);
        const data = await loginUser(email, password);
        if(data.error) {
            setError(data.error);
        } else {
            setError('');
            setUserData(data);
            navigate('/loggedin');
            localStorage.setItem('user', JSON.stringify(data));
        }
    }

    return (
        <div>
        <Navigation page="login"/>
        <div className="login-page-div main-container">
        {
            justSignedUp === true && (
                <h3 className="success-msg">You successfully registered.</h3>
            )
        }
        {userData === null ? (
            <div>
                <InputForm 
                    pageName={"Login"}
                    email={email} 
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword} 
                    handleSubmit={handleSubmit}   
                />
                <div className="error-msg">{error && <div>{'*' + error}</div>}</div>
            </div>
        ) : (
            navigate('/loggedin')
        )}
        </div>

        </div>
    )
}


export default Login;