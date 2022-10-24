import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './react-web/Comp/test';
import reportWebVitals from './reportWebVitals';
import Editor from './react-web/Editor';
import Home from './react-web/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
  
// Create a client
const queryClient = new QueryClient()


const rootElement = document.getElementById("root");

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    {/* <Route path='/' element={<Main />}> */}
                    <Route index element={<Home />} />
                    <Route path='editor' element={<Editor />} />
                    <Route path='test' element={<Test />} />
                    <Route path="*" element={
                        <main style={{padding: "1rem"}}>
                        <p>404 NOT FOUND</p>
                        </main>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
  </QueryClientProvider>,
  rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
