import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user,loading} = use(AuthContext)
    const location = useLocation();
    console.log(location)

    if(loading){
        return <div className='flex justify-center'><span className="loading loading-dots loading-xl"></span></div>
    }

    if(!user){
        return (
            <>
            <Navigate to='/login'></Navigate>
            </>
        )
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;