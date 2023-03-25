import React from 'react';
import { Logo } from './Logo';
import { SignInUpHeader } from './SignInUpHeader';
import { SignInUpLinkButton } from './SignInUpLinkButton';

export const SignUp: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');

    const signUp = async (): Promise<boolean> => {
        console.log(process.env.NODE_ENV);
        if (password === confirmPassword) {
            const resp = await fetch(`http://localhost:3002/api/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password,
                    firstName,
                    lastName,
                }),
            });

            if (resp.status === 200) {
                return true;
            }

            return false;
        }

        return false;
    };

    return (
        <>
            <section className="login template-minimal template-minimal--width-normal">
                <div className="template-minimal__wrap">
                    <div className="login__brand">
                        <Logo></Logo>
                    </div>
                    <SignInUpHeader signIn={false}></SignInUpHeader>
                    <form
                        onSubmit={async (e) => {
                            const success = await signUp();
                            if (!success) {
                                alert('Something went wrong');
                                e.preventDefault();
                            }
                        }}
                    >
                        <div className="field-type email">
                            <label className="field-label" htmlFor="firstName">
                                First Name
                                <span className="required">*</span>
                            </label>
                            <input
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                                value={firstName}
                                id="firstName"
                                type="text"
                            />
                        </div>

                        <div className="field-type email">
                            <label className="field-label" htmlFor="lastName">
                                Last Name
                                <span className="required">*</span>
                            </label>
                            <input
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                value={lastName}
                                id="lastName"
                                type="text"
                            />
                        </div>

                        <div className="field-type email">
                            <label className="field-label" htmlFor="signupEmail">
                                Email
                                <span className="required">*</span>
                            </label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                value={email}
                                id="signupEmail"
                                type="text"
                            />
                        </div>

                        <div className="field-type password">
                            <label className="field-label" htmlFor="password">
                                Password
                                <span className="required">*</span>
                            </label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                value={password}
                                id="password"
                                type="password"
                            />
                        </div>

                        <div className="field-type password">
                            <label className="field-label" htmlFor="confirmPassword">
                                Confirm Password
                                <span className="required">*</span>
                            </label>
                            <input
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                value={confirmPassword}
                                id="confirmPassword"
                                type="password"
                            />
                        </div>
                        <div className="form-submit">
                            <button
                                type="submit"
                                className="btn btn--style-primary btn--icon-style-without-border btn--size-medium btn--icon-position-right"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <SignInUpLinkButton signIn={false} />
                </div>
            </section>
        </>
    );
};
