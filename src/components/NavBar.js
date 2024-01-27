import React from 'react'
import SearchBar from './SearchBar';
import Calendar from './Calendar';
import Notification from './Notification';
import Profile from './Profile';


export const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-bgColor border-b border-textSecondary flexGrow">
        <p className="font-semibold text-secondary hidden lg:block">Dashboard</p>
        <div className='flex items-center gap-5 lg:gap-7'>
            <SearchBar/>
            <Calendar className="hidden lg:flex"/>
            <Notification/>
            <Profile/>
        </div>
    </div>
  )
}

export default NavBar;