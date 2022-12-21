import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NotePage = () => {

  const { active } = useSelector( state => state.notes );
  const dispatch = useDispatch();
  const [ values, handleInputChange, reset ] = useForm( active );
  const { title, body } = values;

  const activeId = useRef( active.id );

  useEffect( () => {
    if( active.id !== activeId.current ) {
      reset( active );
      activeId.current = active.id;
    }
  }, [ active, reset ]);

  useEffect( () => {
    dispatch( activeNote( values.id, {...values}  ) );
  },[ values, dispatch ]);
  

  return (
    <div className='notes__main-content'>
        <NotesAppBar />
        <div className='notes__content'>
          <input
            value={ title }
            onChange={ handleInputChange }
            name='title'
            type='text'
            className='notes__title-input'
            placeholder='Some awesome title'
          />
            <textarea
              className='notes__text-area'
              placeholder='What happened today?'
              name='body'
              value={ body }
              onChange={ handleInputChange }
            >
            </textarea>
            {  
              active.url && 
              <div
                className='notes__image'
              >
                <img
                  src={active.url}
                  alt='Landscape'
                />
              </div> }
        </div>
    </div>
  )
}
