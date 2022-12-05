
import {useNavigate} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from "react";
import './index.css';
import Test from './react-web/Comp/test';
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

function App() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <Header />
      {/* <Outlet context={[navigate]} /> */}
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
              <Route element={<ProtectedRoutes />}>
                  {/* <Route path='editor' element={<Editor />} /> */}
                <Route path='test' element={<Test />} />
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
                <Route path='/home' element={<Home />} />
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
}

export default App;
