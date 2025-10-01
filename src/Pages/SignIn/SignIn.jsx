import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router';
import { GoogleAuthProvider } from 'firebase/auth';
import Lottie from 'lottie-react';
import signin from '../../assets/lotties/Login and Sign up.json'

const provider = new GoogleAuthProvider();
const SignIn = () => {

    const { signInUser, createUser2 } = use(AuthContext)
    const navigate = useNavigate()

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInUser(email, password)
            .then(() => {
                alert("Log into your account successfully")
                navigate("/")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleGoogleSignIn = () => {
        createUser2(provider)
            .then(() => {
                alert("Successful google log in")
                navigate("/")
            })
            .catch(error => {
                alert("Don not have an account")
                console.log(error)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie style={{ width: '250px' }} animationData={signin} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className='text-5xl font-bold'>Sign In Now</h1>
                        <form onSubmit={handleSignIn}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Sign In</button>
                                <p className='text-center font-semibold text-sm'> OR</p>
                                <button onClick={handleGoogleSignIn} className="btn btn-neutral">Sign In With Google</button>
                                <p>Do not have an account? <Link className='text-blue-600 font-medium' to="/register">Sign Up</Link></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;