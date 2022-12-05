import { Navigate, Outlet } from "react-router-dom"
import {auth} from './index'
import { useState } from "react";

const useAuth = () => {
    const [currentUser, setCurrentUser] = useState(auth)

    if (currentUser.currentUser !== null){
        return true
    } else {
        return false
    }
}

const ProtectedRoutes = () => {
    const isAuth = useAuth()
    return isAuth ? <Outlet /> : <Navigate to='/'/>
}

export {ProtectedRoutes, useAuth}