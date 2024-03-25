//Login
export async function loginUser(email, password) {
    const requestBody = {
        email: email,
        password: password
    }
    const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(requestBody)
    });
    const data = await response.json();
    return data; 
}

//Signup
export async function singUpUser(name, lastName, email, password) {
    const requestBody = {
        name,
        lastName,
        email,
        password
    };

    const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(requestBody)
    }); 
    const data = await response.json();
    return data; 
}