import React from 'react';
import './login.styles.scss';

export const Login = (props)=> {
    const {handleLoginSubmit, handleLogin, email, password} = props;
    return(
        <div className='login-box'>
            <h2>Login</h2>


            <form onSubmit={handleLoginSubmit}>
            <div className="user-box">
            <input
                name="email"
                type="email"
                value={email}
                onChange={handleLogin}
                label = "email"
                required />
            </div>
            <div className="user-box">
            <input
                name="password"
                type="password"
                value={password}
                onChange={handleLogin}
                label = "password"
                required />
            </div>
                
                <div className='buttons'>
                <button type='submit'>Sign In</button>
                </div>
              
            </form>
        </div>
    );
}