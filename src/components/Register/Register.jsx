// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
// import { auth } from '../../firebase.init';

const Register = () => {
     
const {createUser} = use(AuthContext)
    
        const handleSubmit =(e)=>{
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value


        console.log(name,email,password)

        // createUserWithEmailAndPassword(auth, email, password)
        // .then((result)=>{
        //     console.log(result)
        // })
        // .catch((error)=>{
        //     console.log(error)
        // })

        createUser(email,password)
        .then(result=>{
            console.log(result)
        })
        .catch(error =>{
            console.log(error)
        })


    }
    return (
        <div className="hero">
            
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-6">
            <h1 className="text-2xl font-bold text-center pt-2">Register</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                        <button className="btn btn-neutral mt-4">Register</button>
                    </form>

                    <div>
                        <p>Do you have account? Please <Link to='/login' className='font-semibold text-blue-500 hover:underline'>Login</Link></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;