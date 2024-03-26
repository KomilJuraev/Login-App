import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = (props) => {
    const navigate = useNavigate();

    function navigateToLogin() {
        navigate('/login');
    }

    function navigateToHome() {
        navigate('/');
    }

    function navigateToSignup() {
        navigate('/signup');
    }

    return (
        <div className="navigation-div">
            <div className="home-link" onClick={navigateToHome}>Home</div>
            {props.page === "login" ? (
                <div className="signup-link" onClick={navigateToSignup}>Signup</div>
            ) : props.page === "signup" ? (
                <div className="login-link" onClick={navigateToLogin}>Login</div>
            ) : null}
        </div>
    )
}

export default Navigation;