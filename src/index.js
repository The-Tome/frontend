import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import firebaseConfig from './firebase';

const fireApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(fireApp)
logEvent(analytics, 'notification_received');

// Create a client
const queryClient = new QueryClient()


const rootElement = document.getElementById("root");

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>,
    rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
