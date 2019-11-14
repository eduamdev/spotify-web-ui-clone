import React from 'react';
import Sidebar from './components/sidebar';

function App() {
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='fixed left-0 h-full w-full sm:w-1/3 lg:w-1/6 bg-gray-900 text-gray-200'>
          <Sidebar></Sidebar>
        </div>
        <div className='fixed right-0 h-full w-full sm:w-2/3 lg:w-5/6 bg-gray-800 text-gray-200'>
          main content
        </div>
      </div>
      <div className='fixed bottom-0 w-full bg-gray-700 pb-4 pt-4 text-white'>
        music player
      </div>
    </>
  );
}

export default App;
