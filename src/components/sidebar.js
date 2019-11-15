import React from 'react';
import Nav from './main-nav';
import List from './list';

function Sidebar() {
  return (
    <>
      <div className='flex flex-col side-upper'>
        <svg className='h-16 w-16 mt-2 fill-current text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M255.8 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM102 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM410 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z"/>
        </svg>
        <Nav></Nav>
        <div className='side-lists max-h-full overflow-y-auto pl-6'>
          <List></List>
          <List></List>
          <List></List>
          <List></List>
          <List></List>
          <List></List>
          <List></List>
        </div>
      </div>
      <div className='flex flex-wrap content-center side-bottom pl-6 pr-6 border-t-2 border-gray-800'>
        <p className='text-center'>New Playlist</p>
      </div>
    </>
  );
}

export default Sidebar;
