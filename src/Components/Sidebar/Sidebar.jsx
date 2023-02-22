import React from 'react';
import './Sidebar.css';
import logo from '../../Images/logo.png';

//import ListItem from '../ListItems/ListItem';

//import {SidebarData}  from '../../Data/Data';
import ListItem from '../ListItems/ListItem';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="logo">
            <img src={logo} alt="" />
            <span>
                sh<span>o</span>ps
            </span>
        </div>
        {/* menu items */}
        <div className="menu">
          <ul className="menu-items">
             <ListItem/>
          </ul>
        </div>
     </div>
  )
}

export default Sidebar