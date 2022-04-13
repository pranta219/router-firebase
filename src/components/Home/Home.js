import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)

const Home = () => {
    const [user] = useAuthState(auth)

    return (
        <div>
            <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
                When you looking
                <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                    <span class="relative text-white">Me</span>
                </span>
                all the time, people think that you're busy.
            </blockquote>
            <h5>Current user is: {user ? user.displayName : 'No body hare'}</h5>
        </div>
    );
};

export default Home;