import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    let location = useLocation();
    if (loading) {
        return <>
            <div class="h-screen bg-white">
                <div class="flex justify-center items-center h-full">
                    <img class="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt=""/>
                </div>
            </div>
        </>
    }
    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;