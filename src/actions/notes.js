import Swal from "sweetalert2";
import { db } from "../firebase/firebase_config";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

//NEW NOTE
export const startNewNote = () => {
    return async ( dispatch, getState ) => {
        const uid = getState().auth.uid;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection( `${ uid }/journal/notes` ).add( newNote );
        dispatch( activeNote( doc.id, newNote ));
        dispatch( addNewNote( doc.id, newNote ) );

    }
}

export const addNewNote = ( id, note ) => ({
    type: types.notesAddNew,
    payload: {
        id, 
        ...note
    }
})

//SAVE NOTE
export const startSaveNote = ( note ) => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;

        if( !note.url ){
            delete note.url;
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        await db.doc(`${ uid }/journal/notes/${ note.id }`).update( noteToFirestore );

        dispatch( refreshNote( note.id, noteToFirestore ));
        Swal.fire( 'Saved', note.title, 'success' )
    }
}

//ACTIVE NOTE
export const activeNote = ( id, note ) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

//LOADING NOTES
export const startLoadingNotes = ( uid ) => {
    return async ( dispatch ) => {
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ));
    }
}

export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
});

//UPDATE NOTES
export const refreshNote = ( id, note ) => ({
    type: types.notesUpdate,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
});

//UPLOAD NOTE PIC
export const startFileUpload = ( file ) => {
    return async( dispatch, getState ) => {
        const { active } = getState().notes;

        Swal.fire({
            title: 'Uploading', 
            text: 'please wait...', 
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        const fileURL = await fileUpload( file );
        active.url = await fileURL;
        dispatch( startSaveNote( active ))

        Swal.close();
    }
}

//DELETE NOTE
export const startDelete = ( id ) => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        await db.doc(`/${uid}/journal/notes/${id}`).delete()
        
        dispatch( deleteNote( id ) )
    }
}

export const deleteNote = ( id ) => ({
    type: types.notesDelete,
    payload: id
});

//LOGOUT STATE CLEANING
export const notesLogoutCleaning = () => ({
    type: types.notesLogoutCleaning
})