import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext(undefined);

const UserContextProvider = (props) => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [justSignedUp, setJustSignedUp] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setUserData(JSON.parse(user));
        }
    }, []);

    return (
        <UserContext.Provider value={{ userData, setUserData, error, setError, justSignedUp, setJustSignedUp }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
