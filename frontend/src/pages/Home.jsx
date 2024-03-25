import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    function handleClick(e) {
      navigate('/' + e.target.name)  
    }
    
    return (
        <div className="home-page-div main-container">
            <div className="home-page-txt">
                <h2 className="home-page-title">Welcome to our login App</h2>
                <p className="home-page-p">Please <strong>login</strong> if you are already registered with us or <strong>signup</strong> to test our login App</p>
            </div>
            <div className="home-page-btns">
                <button className="cmn-btn" id="login-btn" name="login" onClick={handleClick}>Login</button>
                <button className="cmn-btn" id="signup-btn" name="signup" onClick={handleClick}>Signup</button>
            </div>
        </div>
    )
}

export default Home;