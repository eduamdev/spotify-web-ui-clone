import React from 'react';

function MusicPlayer() {
  return (
    <div className='flex h-full items-center justify-between'>
      <div className='h-full text-gray-700 px-4 py-4 w-1/3 lg:w-1/4 mr-2'>
        <div className='flex flex-wrap flex-row items-center h-full'>
          <div className='w-10 h-6 xl:w-12 xl:h-8 bg-gray-400 mr-4'></div>
          <h2 className='uppercase text-white self-start text-sm xl:text-base'>
            EL PROGRAMA DE LOS SIMIOS
          </h2>
        </div>
      </div>
      <div className='flex flex-wrap h-full text-center px-4 py-2 w-1/3 lg:w-2/4 mr-2 text-gray-400'>
        <div className='flex flex-wrap items-center justify-center text-center w-full h-auto'>
          <svg
            className='fill-current h-3 w-3 mr-6'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M13.427 3.021h-7.427v-3.021l-6 5.39 6 5.61v-3h7.427c3.071 0 5.561 2.356 5.561 5.427 0 3.071-2.489 5.573-5.561 5.573h-7.427v5h7.427c5.84 0 10.573-4.734 10.573-10.573s-4.733-10.406-10.573-10.406z' />
          </svg>
          <svg
            className='fill-current h-4 w-4 mr-6'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path d='M175 100v137.8L403.9 98.1c5.3-3.1 12.1.7 12.1 6.9v302c0 6.2-6.7 10-12.1 6.9L175 274.2V412c0 2.2-1.8 4-4 4h-71c-2.2 0-4-1.8-4-4V100c0-2.2 1.8-4 4-4h71c2.2 0 4 1.8 4 4z' />
          </svg>
          <svg
            className='fill-current h-8 w-8 mr-6 text-gray-200'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z' />
          </svg>
          <svg
            className='fill-current h-4 w-4 mr-6'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path d='M337 100v137.8L108.1 98.1C102.7 95 96 98.8 96 105v302c0 6.2 6.7 10 12.1 6.9L337 274.2V412c0 2.2 1.8 4 4 4h71c2.2 0 4-1.8 4-4V100c0-2.2-1.8-4-4-4h-71c-2.2 0-4 1.8-4 4z' />
          </svg>
          <svg
            className='fill-current h-3 w-3'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M10.573 3.021h7.427v-3.021l6 5.39-6 5.61v-3h-7.427c-3.071 0-5.561 2.356-5.561 5.427 0 3.071 2.489 5.573 5.561 5.573h7.427v5h-7.427c-5.84 0-10.573-4.734-10.573-10.573s4.733-10.406 10.573-10.406z' />
          </svg>
        </div>
        <div className='flex flex-wrap items-center w-full h-auto'>
          <span className='w-2/12 text-right text-sm lg:text-base pr-2 lg:pr-4'>
            0:00
          </span>
          <div className='h-1 w-8/12 bg-gray-600 rounded-lg'></div>
          <span className='w-2/12 text-left text-sm lg:text-base pl-2 lg:pl-4'>
            110:28
          </span>
        </div>
      </div>
      <div className='h-full text-gray-700 text-center px-6 py-2 w-1/3 lg:w-1/4'>
        <div className='flex justify-end items-center h-full text-gray-200'>
          <p className='text-xs xl:text-sm mr-3 lg:mr-6'>1x</p>
          <svg
            className='fill-current h-5 w-5 lg:h-6 lg:w-6 mr-3 lg:mr-6'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path fill='none' d='M0 0h24v24H0V0z' />
            <path d='M4 10h12v2H4zm0-4h12v2H4zm0 8h8v2H4zm10 0v6l5-3z' />
          </svg>
          <svg
            className='fill-current h-4 w-4 lg:h-5 lg:w-5 mr-3 lg:mr-6'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z' />
          </svg>
          <svg
            className='fill-current h-5 w-5 lg:h-6 lg:w-6 mr-2'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path d='M215.4 145.5c-2.2-1.1-4.6-1.6-6.9-1.6-3.6 0-7.1 1.2-10 3.5L133.3 200H80.5c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h52.8l65.2 52.5c2.9 2.3 6.5 3.5 10 3.5 2.3 0 4.7-.5 6.9-1.6 5.6-2.7 9.1-8.3 9.1-14.4V160c0-6.2-3.5-11.8-9.1-14.5zM447.5 256c0-59.3-23.2-114.8-65.4-156.5-4.7-4.7-12.3-4.6-17 .1-4.7 4.7-4.6 12.3.1 17 37.6 37.1 58.2 86.6 58.2 139.4 0 52.8-20.7 102.3-58.2 139.4-4.7 4.7-4.8 12.3-.1 17 2.3 2.4 5.4 3.6 8.5 3.6 3 0 6.1-1.2 8.4-3.5 42.3-41.6 65.5-97.2 65.5-156.5z' />
            <path d='M384.9 256c0-43.5-16.6-84.3-46.8-114.9-4.7-4.7-12.3-4.8-17-.1-4.7 4.7-4.8 12.3-.1 17 25.7 26.1 39.9 60.9 39.9 98.1 0 37.2-14.2 72-39.9 98.1-4.7 4.7-4.6 12.3.1 17 2.3 2.3 5.4 3.5 8.4 3.5 3.1 0 6.2-1.2 8.5-3.6 30.2-30.8 46.9-71.6 46.9-115.1z' />
            <path d='M287.5 182.5c-4.7-4.7-12.3-4.8-17-.1-4.7 4.7-4.8 12.3-.1 17 14.8 15 23 35.1 23 56.6 0 21.4-8.2 41.5-23 56.6-4.7 4.7-4.6 12.3.1 17 2.3 2.3 5.4 3.5 8.4 3.5 3.1 0 6.2-1.2 8.5-3.6 19.3-19.6 29.9-45.6 29.9-73.4.1-27.9-10.5-54-29.8-73.6z' />
          </svg>
          <div className='h-1 w-20 bg-gray-400 rounded-lg'></div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
