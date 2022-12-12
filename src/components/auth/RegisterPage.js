import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { removeError, setError } from '../../actions/ui'
import { startRegister } from '../../actions/auth'

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const {msgError} = useSelector( state => state.ui );

    const [values, handleInputChange] = useForm({
        name: '',
        email: '',
        pass: ''
    });

    const {name, email, pass} = values;
    const [pass2, setPass2] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        if(isFormValid()){
            dispatch(startRegister(email, pass, name));
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0){
            dispatch(setError('El nombre no puede estar vacio.'))
            return false;
        } else if (!validator.isEmail(email)){
            dispatch(setError('El email no es válido'));
            return false;
        } else if (pass !== pass2 || pass.length < 4) {
            dispatch(setError('La contraseñas deben tener al menos 5 caracteres, y coincidir.'));
            return false;
        }
        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className='auth__title'> Register </h3>
            <form onSubmit={handleRegister} >
                { msgError &&
                (<div className='auth__alter-error'>
                    {msgError}
                </div>)}
                <input
                    type="text"
                    placeholder='Name'
                    name='name'
                    className='auth__input'
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    placeholder='Email'
                    name='email'
                    className='auth__input'
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder='Password'
                    name='pass'
                    className='auth__input'
                    value={pass}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder='Confirm password'
                    name='pass2'
                    className='auth__input'
                    value={pass2}
                    onChange={(e) => setPass2(e.target.value)}
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
