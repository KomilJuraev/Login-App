import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { checkTokenExpiration } from "../utils/tokenUtils";

const LoggedIn = () => {
    const { userData, setUserData } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('This user data from loggedin page' + userData);
        if(userData === null) {
            navigate('/login')
        } 
    }, [userData, navigate])

    useEffect(() => {
        if (!userData) {
            navigate('/login');
        } else {
            const interval = setInterval(() => {
                if (checkTokenExpiration()) {
                    setUserData(null);
                    navigate('/login');
                }
            }, 60000); // Check token expiration every minute
    
            return () => clearInterval(interval); //cleanup function from the useEffect hook that clears the interval when the component unmounts. This is important to prevent memory leaks.
        }
    }, [userData, setUserData, navigate]);

    function handleLogOut() {
        localStorage.removeItem("user");
        setUserData(null);
        navigate('/login');
    }

    return (
        <div className="loggedin-page main-container">
            {userData && (
                <h3 className="success-msg">Conguratulations, {userData.name}! You have successfully logged in</h3>
            )}
            <button className="logout-btn cmn-btn"  onClick={handleLogOut}>Log Out</button>
        </div>
   )
}

export default LoggedIn;