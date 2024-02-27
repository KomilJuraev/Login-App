import React from "react";

const InputForm = (props) => {
    
    return (
        <form className="login-from" onSubmit={props.handleSubmit}>
            <h3>{`Please ${props.pageName.toLowerCase()} using your email and password`}</h3>
            { props.pageName === "Signup" && (
                <>
                    <div>
                        <label>Name:</label>
                        <input type="text" onChange={(e) => props.setName(e.target.value)} value={props.name} />
                    </div>
                    <div>
                        <label>Last Name:</label> 
                        <input type="text" onChange={(e) => props.setLastName(e.target.value)} value={props.lastName}/>              
                    </div>
                </>
            )}
            <div>
                <label>Email:</label>
                <input type="text" onChange={(e) => props.setEmail(e.target.value)} value={props.email} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" onChange={(e) => props.setPassword(e.target.value)} value={props.password} />
            </div>
            <div>
                <button type="submit">{props.pageName}</button>
            </div>
        </form>
    )
}

export default InputForm;