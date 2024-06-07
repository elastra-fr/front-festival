// src/services/authService.js
const API_URL = 'https://backend.nationsound2024-festival.fr/api/user';

export const authenticateUser = async (email, password) => {
    const response = await fetch(`${API_URL}/login_check`, {
        method: 'POST',
headers: {
    'Content-Type': 'application/json',

},
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Invalid credentials');
    }

    
    const { token } = await response.json();
    sessionStorage.setItem('jwtToken', token);
    console.log(token);
    //return jwtDecode(token);
};

export const logout = () => {
    sessionStorage.removeItem('jwtToken');
};


export const getJwt = () => {
    return localStorage.getItem('jwtToken');
};



export const registerUser = async (firstName, lastName, email, password) => {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to register');
    }

    // Assuming a successful registration response does not include a token
    const data = await response.json();
    console.log(data);
    // Handle successful registration logic here
};