import React from 'react';

export const SignInUpLinkButton: React.FC<{ signIn: boolean }> = ({ signIn = true }) => {
    return (
        <div>
            <a
                className="btn btn--style-secondary btn--icon-style-without-border btn--size-medium btn--icon-position-right"
                href={signIn ? '/admin/signup' : '/admin/login'}
            >
                {signIn ? 'Need to Sign Up?' : 'Already have an account?'}
            </a>
        </div>
    );
};
