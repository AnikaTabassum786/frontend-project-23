import React from 'react';
import { Link } from 'react-router';

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="hero mt-6">

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h3 className='text-2xl font-bold text-center pt-4' >Login</h3>

                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <div>
                        <p>Don't Account? Please <Link to={'/register'} className='font-semibold text-blue-500 hover:underline'>Register</Link> </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;