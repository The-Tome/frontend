import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth"
import { useState } from 'react';
import emailValidator from 'email-validator'
import './Login.css'
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const nav = useNavigate();

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

  return (
    <div class="container">
        <h2 class="title">The Tome</h2>
        <div class="loginBox">
            <div class="input">
                <label>
                    Email:<input type="text" id="email" placeholder="example@mail.com" onChange={(event) => setEmail(event.target.value)} value={email} />
                </label>
            </div>
            <div class="input">
                <label>
                    Password:<input type="password" id="password" placeholder="at least 8 characters" onChange={(event) => setPassword(event.target.value)} value={password} />
                </label>
            </div>
            <div class="buttons">
                <button onClick={() => createAccount(email, password) }>Create account</button>
                <button onClick={() => signIn(email, password) }>Sign in</button>
            </div>
        </div>
    </div>
  );
}

export default Login;