import React from 'react';
import './SignIn.css';

const SignIn = ({onRoutChange}) => {
    return (
        <main className="center flex justify-center items-center min-vh-100">
            <section className="sign-in center br2 ba dark-gray b--black-10 mv4 pa4 bg-white shadow-3">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="password" name="password" id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input
                            onClick={() => onRoutChange('home')}
                            className="b ph3 pv2 input-reset ba b--black grow pointer f6 dib"
                            type="button" value="Sign in" />
                    </div>
                    <div className="lh-copy mt3">
                        <a href="#0" className="f6 link dim black db">Register</a>
                    </div>
                </form>
            </section>
        </main>
    );
}

export default SignIn;