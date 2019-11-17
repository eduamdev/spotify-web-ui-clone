import React from 'react';
import Nav from './main-nav';
import List from './list';

function Sidebar() {
  return (
    <>
      <div className='flex flex-col side-upper'>
        <svg
          className='h-8 w-8 mt-2 ml-4 fill-current text-white'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
        >
          <path d='M255.8 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM102 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM410 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z' />
        </svg>
        <Nav></Nav>
        <div className='side-lists max-h-full overflow-y-auto pl-6'>
          <List
            title='Your Library'
            links={[
              'Made For You',
              'Recently Played',
              'Liked Songs',
              'Albums',
              'Artists',
              'Podcasts'
            ]}
          ></List>
          <List
            title='Playlists'
            links={[
              'Walk Like A Badass',
              'Rock Legends 🎸',
              'Focus',
              'Road Trip 🚗',
              'Chrono Cross OST',
              'Exercise 🔥',
              'Dancing',
              'Liked from Radio',
              'This is José José',
              'Corona Capital'
            ]}
          ></List>
        </div>
      </div>
      <div className='flex flex-wrap items-center align-middle side-bottom pl-6 pr-6 border-t-2 border-gray-800 fill-current text-gray-400 hover:text-white'>
        <svg
          className='h-8 w-8 mr-2'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
        >
          <path d='M346.5 240H272v-74.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-74.5c-8.8 0-16 6-16 16s7.5 16 16 16H240v74.5c0 9.5 7 16 16 16s16-7.2 16-16V272h74.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z' />
          <path d='M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z' />
        </svg>
        <p className='text-sm tracking-wide font-medium'>New Playlist</p>
      </div>
    </>
  );
}

export default Sidebar;
