import {types} from '../types/types';

export const startLogin = (email,pass) => {
    return (dispatch) => {
        setTimeout(()=> {
            dispatch( login(123,'raul') );
        }, 3500);
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})