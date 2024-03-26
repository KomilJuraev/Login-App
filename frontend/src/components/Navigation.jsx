import React from "react";

const Navigation = (props) => {
    
    return (
        <div className="navigation-div">
            <a className="home-link" href="/">Home</a>
            {props.page === "login" ? (
                <a className="signup-link" href="/signup">Signup</a>
            ) : props.page === "signup" ? (
                <a className="login-link" href="/login">Login</a>
            ) : null}
        </div>
    )
}

export default Navigation;