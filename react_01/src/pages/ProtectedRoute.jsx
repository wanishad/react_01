import React from 'react'
import { Outlet, useNavigate, Navigate } from 'react-router-dom'

const ProtectedRoute = ({Children, user, redirect="/login"}) => {
    const Navigate = useNavigate()
    if(!user) { Navigate(redirect)}
    else{
        Navigate("/")
    }
    return Children? Children : <Outlet/>
}
export default ProtectedRoute