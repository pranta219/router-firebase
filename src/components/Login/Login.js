import React from 'react';
import './login.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app)

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    return (
        <div>
            <h3 className='text-4xl '>Please Login</h3>
            <div className="login w-80 mx-auto">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded bg-cyan-500 shadow-lg shadow-cyan-500/50" type="button">
                            Sign In
                        </button>
                        <button onClick={() => signInWithGoogle()} className="inline-block bg-indigo-500 shadow-lg shadow-indigo-500/50 align-baseline font-bold text-sm text-white
                        py-2 px-4 rounded hover:bg-indigo-700" type='button'>
                            Google Sing In
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;