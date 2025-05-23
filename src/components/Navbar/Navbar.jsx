import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {
    
    // const userInfo = use(AuthContext)
    // console.log('From Navbar',userInfo)

    const {user,signOutUser} = use(AuthContext)
    console.log(user)

    const handleSignOut=()=>{
        signOutUser()
        .then(()=>{
            console.log('Sign Out')
        })
        .catch(error =>{
            console.log(error)
        })

    }

    const links = <>

        <li><NavLink to={'/'} className={({ isActive }) =>
            isActive ? "active font-semibold underline" : ""
        }>Home</NavLink></li>

        <li><NavLink to={'/login'} className={({ isActive }) =>
            isActive ? "active font-semibold underline" : ""
        }>Login</NavLink></li>

        <li><NavLink to={'/register'} className={({ isActive }) =>
            isActive ? "active font-semibold underline" : ""
        }>Register</NavLink></li>

        <li><NavLink to={'/dashboard'} className={({ isActive }) =>
            isActive ? "active font-semibold underline" : ""
        }>Dashboard</NavLink></li>

        {
            user &&
             <>
             <li><NavLink to={'/order'} className={({ isActive }) =>
                isActive ? "active font-semibold underline" : ""
            }>Order</NavLink></li>

            <li><NavLink to={'/profile'} className={({ isActive }) =>
                isActive ? "active font-semibold underline" : ""
            }>Profile</NavLink></li>
             </>

            
        }
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                        <ul className="p-2">
                            {links}
                        </ul>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user? 
                 <>
                 <p className='mr-2'>{user.email}</p>
                 <button onClick={handleSignOut} className='btn'>Sign out</button>
                 </>
                :
                <Link to={'/login'}>Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;