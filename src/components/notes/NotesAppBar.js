import moment from 'moment';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startFileUpload, startSaveNote } from '../../actions/notes';

export const NotesAppBar = () => {

  const { active } = useSelector( state => state.notes );
  const noteDate = moment( active.date );
  const dispatch = useDispatch();


  const handleUpdateNote = () => {
    dispatch( startSaveNote( active ) )
  }

  const handlePicUpload = () => {
    document.querySelector('#fileSelector').click();
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if( file ) {
      dispatch( startFileUpload( file ) );
    }
  }

  return (
    <div className='notes__app-bar'>
        <span> { noteDate.format('MMMM, Do') } </span>
        <input 
          id='fileSelector'
          type='file'
          style={{display: 'none'}}
          onChange={ handleFileChange }
        />
        <div>
            <button 
              className='btn'
              onClick={ handlePicUpload }
            >
                Picture
            </button>
            <button 
              className='btn'
              onClick={ handleUpdateNote }
            >
                Save
            </button>
        </div>
    </div>
  )
}
