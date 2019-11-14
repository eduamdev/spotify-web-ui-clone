import React from 'react';
import Nav from './main-nav';
import List from './list';

function Sidebar() {
  return (
    <aside className=''>
      <Nav></Nav>
      <List></List>
      <List></List>
    </aside>
  );
}

export default Sidebar;
