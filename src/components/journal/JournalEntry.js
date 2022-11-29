import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div
            className='journal__entry-picture'
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://www.creativefabrica.com/wp-content/uploads/2021/03/13/beautiful-landscape-in-sunset-Graphics-9546561-1.jpg)'
            }}
        >
        </div>
        <div className='journal__entry-body'>
            <p className='journal__entry-title'>
                Un nuevo día
            </p>
            <p className='journal__entry-content'>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
        </div>
        <div className='journal__entry-date-box'>
            <span>Lunes</span>
            <h4>28</h4>
        </div>
    </div>
  )
}
