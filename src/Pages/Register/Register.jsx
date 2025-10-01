import React, { use } from 'react';
import Lottie from 'lottie-react'
import register from '../../assets/lotties/Register.json'
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router';
import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

const Register = () => {

    const { createUser, createUser2 } = use(AuthContext)
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        createUser(email, password)
            .then(() => {
                alert("account created successfully")
                navigate("/")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleGoogleSignUp = () => {
        createUser2(provider)
            .then(() => {
                alert("account created successfully")
                navigate("/")
            })
            .catch(error=>{
                console.log(error)
            })
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie style={{ width: '250px' }} animationData={register} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className='text-5xl font-bold'>Register Now</h1>
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input" placeholder="Name" />
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                                <p className='text-center font-semibold text-sm'> OR</p>
                                <button onClick={handleGoogleSignUp} className="btn btn-neutral">Sign Up With Google</button>
                                <p>Already have an account? <Link className='text-blue-600 font-medium' to="/signin">Sign In</Link></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;