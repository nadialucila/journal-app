import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
    return (
        <>
            <h3 className='auth__title'> Register </h3>
            <form>
                <input
                    type="text"
                    placeholder='Name'
                    name='name'
                    className='auth__input'
                />
                <input
                    type="email"
                    placeholder='Email'
                    name='email'
                    className='auth__input'
                />
                <input
                    type="password"
                    placeholder='Password'
                    name='pass'
                    className='auth__input'
                />
                <input
                    type="password"
                    placeholder='Confirm password'
                    name='pass2'
                    className='auth__input'
                />
                <button
                    type='submit'
                    className='btn btn-primary btn-block mb-5'
                >
                    Register
                </button>
                <Link
                    to="/auth/login"
                    className='link'
                >
                    Already registered?
                </Link>
            </form>
        </>
    )
}
