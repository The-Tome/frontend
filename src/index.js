import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from "react";
import './index.css';
import App from './App';
// import Test from './react-web/Comp/test';
import reportWebVitals from './reportWebVitals';
import Editor from './react-web/Editor';
// import Home from './nav/Home';
import Login from './login/Login';
import Home from './nav/Home';
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

const fireApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(fireApp)
logEvent(analytics, 'notification_received');

let auth = getAuth()

// Create a client
const queryClient = new QueryClient()

const rootElement = document.getElementById("root");

let indexObjects = [];

// if (useAuth) {
//     indexObjects = getWorlds(localStorage.getItem('uid'));
//     console.log(indexObjects)
// }

console.log(indexObjects)

// const objects = getWorlds()

//make an axios call here. Get data, or whatever. Set it to a variable "objects" maybe, do exactly what code is already doing
// const worlds data and make the axios call, 12/2/2022

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </QueryClientProvider>,
  rootElement);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export {auth} 