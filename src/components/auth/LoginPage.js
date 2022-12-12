import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGoogleLogin, startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginPage = () => {

    const dispatch = useDispatch();
    const {msgError, loading} = useSelector( state => state.ui);

    const [values, handleInputChange] = useForm({
        email: 'nadia.bergara17@gmail.com',
        pass: '12345'
    });
    const {email, pass} = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startLogin(email,pass));
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }

    return (
        <>
            <h3 className='auth__title'> Login </h3>
            <form onSubmit={ handleSubmit }  >
                { msgError &&
                    (<div className='auth__alter-error'>
                        {msgError}
                    </div>)}
                <input
                    type="email"
                    value={ email }
                    placeholder='email'
                    name='email'
                    className='auth__input'
                    onChange={ handleInputChange }
                />
                <input
                    type="password"
                    value={pass}
                    placeholder='password'
                    name='pass'
                    className='auth__input'
                    onChange={ handleInputChange }
                />
                <button
                    type='submit'
                    className='btn btn-primary btn-block'
                    disabled={loading}
                >
                    Login
                </button>
                <div className='auth__google'>
                    <p> Login with google </p>
                    <div
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link
                    to="/auth/register"
                    className='link'
                >
                    Register
                </Link>
            </form>
        </>
    )
}
