import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes';

export const NotesAppBar = () => {

  const { active } = useSelector( state => state.notes );
  const dispatch = useDispatch();

  const handleUpdateNote = () => {
    dispatch( startSaveNote( active ) )
  }

  return (
    <div className='notes__app-bar'>
        <span> 28 Noviembre 2022</span>
        <div>
            <button className='btn'>
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
