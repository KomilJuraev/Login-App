
let BASE_URL = "";


if (process.env.NODE_ENV === "development") {
    console.log(process.env);
    BASE_URL = process.env.REACT_APP_DEV_BASE_URL;
  } else if (process.env.NODE_ENV === "production") {
    BASE_URL = process.env.REACT_APP_PROD_BASE_URL;
  }


//Login
export async function loginUser(email, password) {
    const requestBody = {
        email: email,
        password: password
    }
    const response = await fetch(`${BASE_URL}/login`, {
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
    const response = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(requestBody)
    }); 
    const data = await response.json();
    return data; 
}