import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {

    const {signInUser} = use(AuthContext)
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password)

        signInUser(email,password)
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })

    }
    return (
        <div className="hero mt-6">

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h3 className='text-2xl font-bold text-center pt-4' >Login</h3>

                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
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