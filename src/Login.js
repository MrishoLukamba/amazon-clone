import React, {useState} from 'react'
import "./Login.css"
import { Link, useHistory } from 'react-router-dom';
import { register } from './serviceWorker';
import {auth} from "./firebase";
 


function Login() {
    const  [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const history = useHistory();

    const login = (e) =>{
        e.preventDefault();

        auth
           .signInWithEmailAndPassword(email, password)
           .then(auth => {
               history.push('/')
           })
           .catch(error => alert(error.message))
    };

    const register = e => {
        e.preventDefault();
        //firebase staffs

        auth
           .createUserWithEmailAndPassword(email,password)
           .then((auth)=>{
               //is succesfully created a new user with email and password
               console.log(auth)
               if (auth){
                   history.push('/')
               }
           })
           .catch(error => alert(error.message))
    };
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            <div className="login__container">
                <h2>Sign In</h2>
                <form>
                    <h3>E-mail</h3>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}></input>

                    <h3>Password</h3>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input><br></br>
                    <button type="submit" onClick={login} className="login__button">Log In</button>
                    <br></br>

                </form>
                <p>log in into my brain <br></br><strong>LUKAQUANTUM</strong></p>
                <br></br>
                <button onClick={register} className="register__button"> Create New Account</button>
            </div>
            
        </div>
    )
}

export default Login
