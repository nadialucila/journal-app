import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NotePage = () => {
  return (
    <div className='notes__main-content'>
        <NotesAppBar />
        <div className='notes__content'>
          <input
            type='text'
            className='notes__title-input'
            placeholder='Some awesome title'
          />
            <textarea
              className='notes__text-area'
              placeholder='What happened today?'
            >
            </textarea>
            <div
              className='notes__image'
            >
              <img
                src='https://naturedestinations.ca/wp-content/uploads/2019/07/Old-Man-1-1100-600x403.jpg'
                alt='Landscape'
              />
            </div>
        </div>
    </div>
  )
}
