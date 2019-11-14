import React from 'react';

function List({ title, links }) {
  return (
    <div className='mb-4'>
      <h2>your library</h2>
      <p>Made For You</p>
      <p>Liked Songs</p>
      <p>Albums</p>
      <p>Artists</p>
      <p>Podcast</p>
    </div>
  );
}

export default List;
