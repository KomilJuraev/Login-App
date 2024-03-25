import React from "react";

const InputForm = (props) => {
    
    return (
        <form className="login-from" onSubmit={props.handleSubmit}>
            <h3 className="input-header">{`Please ${props.pageName.toLowerCase()} using your email and password`}</h3>
            <div className="input-main-container">
            { props.pageName === "Signup" && (
                <>
                    <div className="inputContainer">
                        <label className="inputLabel">Name:</label>
                        <input className="inputFields" type="text" onChange={(e) => props.setName(e.target.value)} value={props.name} />
                    </div>
                    <div div className="inputContainer">
                        <label className="inputLabel">Last Name:</label> 
                        <input className="inputFields" type="text" onChange={(e) => props.setLastName(e.target.value)} value={props.lastName}/>              
                    </div>
                </>
            )}
            <div div className="inputContainer">
                <label className="inputLabel">Email:</label>
                <input className="inputFields" type="text" onChange={(e) => props.setEmail(e.target.value)} value={props.email} />
            </div>
            <div div className="inputContainer">
                <label className="inputLabel">Password:</label>
                <input className="inputFields" type="password" onChange={(e) => props.setPassword(e.target.value)} value={props.password} autoComplete="current-password" />
            </div>
            <div className="inpt-btn-div">
                <button className="sbmt-btn cmn-btn" type="submit">{props.pageName}</button>
            </div>
            </div>
        </form>
    )
}

export default InputForm;