import { firebase, googleAuthProvider } from '../firebase/firebase_config';
import {types} from '../types/types';
import { finishLoading, startLoading } from './ui';
import Swal from 'sweetalert2';

export const startLogin = (email,pass) => {
    return (dispatch) => {

        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword(email, pass)
        .then( ({user}) => {
            dispatch(
                login(user.uid, user.displayName)
            )
            dispatch(finishLoading())
        } )
        .catch( e => {
            Swal.fire('Error', e.message, 'error');
            dispatch(finishLoading())
        })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user}) => {
            dispatch(
                login(user.uid, user.displayName)
            );
        });
    }
}

export const startRegister = (email, pass, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then( async({user}) => {
           await user.updateProfile({displayName: name})
           dispatch(
                login(user.uid, user.displayName)
           )
        } )
        .catch( e => {
            console.log(e);
        })
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
    }
}

export const logout = () => ({
    type: types.logout
})