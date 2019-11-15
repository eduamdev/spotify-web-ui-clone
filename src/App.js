import React from 'react';
import Sidebar from './components/sidebar';
import MusicPlayer from './components/music-player';
import Header from './components/header';
import Content from './components/content';

function App() {
  return (
    <>
      <div className='max-w-full w-full h-screen'>
        <div
          className='flex flex-wrap h-full w-full'
          style={{ maxHeight: '88vh', minHeight: '88vh' }}
        >
          <aside className='h-full w-1/3 lg:w-1/6 bg-gray-900 text-gray-200'>
            <Sidebar></Sidebar>
          </aside>
          <main className='flex flex-col h-full w-2/3 lg:w-5/6 bg-gray-800 text-gray-200'>
            <Header></Header>
            <Content></Content>
          </main>
        </div>
        <div
          className='w-full bg-gray-700 text-white'
          style={{ maxHeight: '12vh', minHeight: '12vh' }}
        >
          <MusicPlayer></MusicPlayer>
        </div>
      </div>
    </>
  );
}

export default App;
