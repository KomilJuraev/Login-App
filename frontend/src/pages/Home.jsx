import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    function handleClick(e) {
      navigate('/' + e.target.name)  
    }
    
    return (
        <div>
            <h2>Welcome to our login App</h2>
            <p>Please <strong>login</strong> if you are already registered with us or <strong>signup</strong> to test our login App</p>
            <button name='login' onClick={handleClick}>Login</button>
            <button name='signup' onClick={handleClick}>Signup</button>
        </div>
    )
}

export default Home;