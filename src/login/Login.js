import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useState } from 'react';
import emailValidator from 'email-validator'
import './Login.css'
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const nav = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const isPasswordValid = (password) => {
    return password.length >= 8
  }

  const isEmailValid = (email) => {
    return emailValidator.validate(email)
  }

  const createAccount = async (email, password) => {
    if (isPasswordValid(password) && isEmailValid(email)) {
      const auth = getAuth();
      try {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        console.log(user)
        nav('/editor')
      } catch(error) {
        console.error(error)
      }
    }
  }

  const signIn = async (email, password) => {
    if (isPasswordValid(password) && isEmailValid(email)) {
      const auth = getAuth();
      try {
        const user = await signInWithEmailAndPassword(auth, email, password)
        console.log(user)
        nav('/editor')
      } catch(error) {
        console.error(error)
      }
    }
  }

  const googleLogin = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      
      console.log(user)
      nav('/editor')
    }).catch((error) => {
      // // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // // The email of the user's account used.
      // const email = error.customData.email;
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // // ...
    });
  }

  return (
    <div className="container">
        <h2 className="title">The Tome</h2>
        <div className="loginBox">
            <div className="input">
                <label>
                    Email:<input type="text" id="email" placeholder="example@mail.com" onChange={(event) => setEmail(event.target.value)} value={email} />
                </label>
            </div>
            <div className="input">
                <label>
                    Password:<input type="password" id="password" placeholder="at least 8 characters" onChange={(event) => setPassword(event.target.value)} value={password} />
                </label>
            </div>
            <div className="buttons">
                <button onClick={() => createAccount(email, password) }>Create Account</button>
                <button onClick={() => signIn(email, password) }>Sign In</button>
            </div>
            <div className="buttonsG">
                <button onClick={() => googleLogin() }>Sign In With Google</button>
            </div>
        </div>
    </div>
  );
}

export default Login;