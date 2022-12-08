
import {useNavigate} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from "react";
import './index.css';
import Welcome from './react-web/Comp/welcome';
import reportWebVitals from './reportWebVitals';
import Editor from './react-web/Editor';
import Login from './login/Login';
import Home from './nav/Home';
import Header from './nav/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { codes } from './codes';
import { objects } from './getData';
import { getWorlds } from './react-web/axios';

import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

// import "firebase/app";
// import "firebase/analytics";
// import "firebase/auth";
// import "email-validator";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import firebaseConfig from './firebase';
import {getAuth} from 'firebase/auth'
import {ProtectedRoutes, useAuth} from './protectedRoutes';
import {auth} from './index';

const axios = require('axios').default;

function App() {
  // const navigate = useNavigate();
  const [worlds, setWorlds] = useState(null)
  const [isLoading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('login'))
  const [user, setUser] = useState('{}')


  // function fetchData() {
  //   const item = localStorage.getItem('login')
  //   if (item) {
  //     setUser(item);
  //   };
  // }

  useEffect(() => {
    // console.log(useAuth())
    console.log("We're in the set world use effect, user:")
    console.log(user)
    if (user) {
      axios.post ('http://localhost:3001/getWorlds', localStorage.getItem('uid'))
      .then (Response => {
          console.log(Response.data)
          console.log("I GOT INTO THE STATEMENT")
          setWorlds(Response.data.worlds)
          setLoading(false);
      })
    }
  }, [user]);
  
    // if (isLoading) {
    //   console.log("IS LOADING")
    //   return <div className="App">Loading...</div>;
    // }
  // }

  return (
    <div className="container-fluid">
      {/* <Outlet context={[navigate]} /> */}
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Login />} />
              <Route element={<ProtectedRoutes />}>
                  {/* <Route path='editor' element={<Editor />} /> */}
                <Route path='welcome' element={<Welcome />} />
                  {
                      objects?.map((world) => (
                          world.notes.map((note, key) => (
                              <React.Fragment key={key}>
                                  {console.log("Data from INDEX:", note.data)}
                                  <Route path={note.code} key={key} element={<Editor noteData={note} />} />
                              </React.Fragment>
                          ))
                      ))
                  }
                <Route path='/home' element={<Home worlds={worlds} setWorlds={setWorlds} />} />
                <Route path="*" element={
                    <main style={{padding: "1rem"}}>
                    <p>404 NOT FOUND</p>
                    </main>
                } />
              </Route>
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
