import React, { useState } from 'react';
import './SignIn.css';

const SignIn = ({onRoutChange}) => {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async (email, password) => {
        try {
            const body = {
                email: email,
                password: password
            }
            const response = await fetch('http://localhost:3005/signin', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                },
            });

            if (response.status === 400) {
                throw new Error('Invalid credentials');
            }

            const data = await response.json();
            if (data) {
                onRoutChange('home');
            }
        } catch(error) {
            setError(error.message);
        }
        // () => onRoutChange('home')
    };

    return (
        <main className="center flex justify-center items-center min-vh-100">
            <section className="sign-in center br2 ba dark-gray b--black-10 mv4 pa4 bg-white shadow-3">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input
                                onChange={(event) => setUsername(event.target.value)}
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input
                                onChange={(event) => setPassword(event.target.value)}
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="password" name="password" id="password" />
                        </div>
                    </fieldset>
                    <div className="flex justify-around">
                        <input
                            onClick={() => handleSignIn(email, password)}
                            className="b ph3 pv2 input-reset ba b--black grow pointer f6 dib bg-black white"
                            type="button" value="Sign in" />

                        <input
                            className="b ph3 pv2 input-reset ba b--black grow pointer f6 dib"
                            type="button" value="Register" />
                    </div>
                </form>
                <div className="mt3 tc">
                    { error.length > 0 && <span className="f5 red">{error}</span>}
                </div>
            </section>
        </main>
    );
}

export default SignIn;