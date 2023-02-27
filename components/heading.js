import React from 'react';

function Heading({ title, subtitle }) {
  return (
    <div className='flex flex-wrap border-b-2 pb-2 border-gray-700'>
      <div className='flex flex-col h-full w-1/2 justify-start'>
        <h2 className='text-white font-bold text-xl'>{title}</h2>
        <p className='text-gray-400 font-medium text-sm'>{subtitle}</p>
      </div>
      <div className='flex h-full items-center w-1/2 justify-end self-center'>
        <svg
          className='h-6 w-6 fill-current text-gray-500'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
        >
          <path d='M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z' />
        </svg>
        <svg
          className='h-6 w-6 fill-current ml-4'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
        >
          <path d='M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z' />
        </svg>
      </div>
    </div>
  );
}

export default Heading;
