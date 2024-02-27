import { createContext, useState } from "react";

export const UserContext = createContext(undefined);

const UserContextProvider = (props) => {
    const [userInfo, setUserInfo] = useState();
    return (
        <UserContext.Provider value={userInfo}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
