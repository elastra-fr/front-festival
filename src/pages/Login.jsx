
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import React, {useState} from 'react';
import { authenticateUser } from '../services/authService';


const Login = () => {
    // Add your component logic here

document.title = 'Login | NATION SOUND';


const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');

const handleSubmit = async (e) => { 

e.preventDefault();

try {
    await authenticateUser(email, password);
    window.location = '/home';
}

catch (error) {

    setError("Adresse e-mail ou mot de passe incorrect");
    console.error(error.message);

}





};


    return (
        <>
   
        <Header />

<main>




    <section className="login">


      

        <form id="loginForm" onSubmit={handleSubmit}>

            <h2>Se connecter</h2>

            {error && <p className="error">{error}</p>}

            <div className="form-group">
            <label htmlFor="email">Adresse e-mail</label>
            <input type="email" id="email" name="email" required value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" name="password" required value={password} placeholder='Mot de passe' onChange={(e)=>setPassword(e.target.value)}/>
            </div>

            <div className="form-group">
            <button type="submit">Se connecter</button>
            </div>
        </form>

        <p>Vous n'avez pas de compte ? <a href="/register">Inscrivez-vous</a></p>

    </section>





</main>
<Footer />

        </>
    );
};

export default Login;