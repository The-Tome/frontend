import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from 'react';
import emailValidator from 'email-validator'
import './Login.css'
import { useNavigate } from "react-router-dom";
import {getUser, createUser} from "../react-web/axios"
import {auth} from "../index"

function Login() {
  useEffect(() => {
    if (localStorage.getItem('login') === 'yes') {
      nav('/home')
    }
  })

  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [email2, setEmail2] = useState('')
  const [password2, setPassword2] = useState('')
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [user, setUser] = useState('{}')

  useEffect(() => {
    console.log("User was updated:")
    console.log(user) 
  }, [user])

  const nav = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const isPasswordValid = (password) => {
    return password.length >= 8
  }

  const isEmailValid = (email) => {
    return emailValidator.validate(email)
  }

  // const monitorAuthState = async () => {
  //   onAuthStateChanged(auth, user => {
  //     if (user) {
  //       // console.log(user)
  //       nav('/test')
  //     }
  //   })
  // }

  const setStorage = (result) => {
    localStorage.setItem('email', result.user.email)
    localStorage.setItem('uid', result.user.uid)
    localStorage.setItem('displayName', result.user.displayName)
    localStorage.setItem('login', 'yes')
    console.log("Logged in, set storage, here's the results")
    console.log(localStorage.getItem('email'))
    console.log(localStorage.getItem('uid'))
    console.log(localStorage.getItem('displayName'))
    setUser({'email': localStorage.getItem('email'), 'uid': localStorage.getItem('uid'), 'displayName': localStorage.getItem('displayName')})
    console.log("SetStorage user after setUser:")
    console.log(user)
  }

  const createAccount = async (email, password) => {
    if (isPasswordValid(password) && isEmailValid(email)) {
      // const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
      .then((result)  => {
        console.log(result)
        setStorage(result)
        // createUser(JSON.parse('{"fName: "' + result.user. + '"id": "' + result.user.uid + '"}'))
        let data = JSON.parse('{"id":"'+result.user.uid+'","fName":"'+fName+'","lName":"'+lName+'","email":"'+email+'"}')
        createUser(data)
      })
      
    }
  }

  const signIn = async (email, password) => {
    if (isPasswordValid(password) && isEmailValid(email)) {
      // const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
      .then((result)  => {
        console.log(result)
        setStorage(result)
        getUser(JSON.parse('{"id": "' + result.user.uid + '"}'))
      })
    }
  }

  const googleLogin = async () => {
    signInWithPopup(auth, googleProvider)
    .then ((result) => {
      console.log("Google Login: calling set storage")
      setStorage(result)
      getUser(JSON.parse('{"id": "' + result.user.uid + '"}'))
    })
  }

  if (localStorage.getItem('login') === null) {
    setUser('')
    localStorage.setItem('login', 'no')
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
            <div className="input">
                <label>
                    First Name:<input type="text" id="fName" placeholder="John" onChange={(event) => setFName(event.target.value)} value={fName} />
                </label>
            </div>
            <div className="input">
                <label>
                    Last Name:<input type="text" id="lName" placeholder="Doe" onChange={(event) => setLName(event.target.value)} value={lName} />
                </label>
            </div>
            <div className="buttons">
                <button onClick={() => createAccount(email, password) }>Create Account</button>
            </div>
        </div>
        <div className="loginBox">
            <div className="input">
                <label>
                    Email:<input type="text" id="email2" placeholder="example@mail.com" onChange={(event) => setEmail2(event.target.value)} value={email2} />
                </label>
            </div>
            <div className="input">
                <label>
                    Password:<input type="password" id="password2" placeholder="at least 8 characters" onChange={(event) => setPassword2(event.target.value)} value={password2} />
                </label>
            </div>
            <div className="buttons">
                <button onClick={() => signIn(email2, password2) }>Sign In</button>
                <button onClick={() => googleLogin() }>Sign In With Google</button>
            </div>
        </div>
    </div>
  );
}

export default Login