import React from 'react';

export const SignInUpHeader: React.FC<{ signIn?: boolean }> = ({ signIn = true }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: 'none' }}>
            <h1 style={{ margin: 'auto', marginBottom: '50px' }}>Book of Names</h1>
            <h2>{signIn ? 'Sign Up' : 'Log In'}</h2>
        </div>
    );
};
