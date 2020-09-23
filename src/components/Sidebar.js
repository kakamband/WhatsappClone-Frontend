import React from 'react'
import './Sidebar.css'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';

function Sidebar({ lastMessage }) {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar/>
        <div className='sidebar__headerRight'>
          <IconButton>
            <DonutLargeIcon/>
          </IconButton>
          <IconButton>
            <ChatIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
      </div>

      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <SearchOutlined/>
          <input placeholder='Search or start a new chat' type='text'/>
        </div>
      </div>

      <div className='sidebar__chats'>
        <SidebarChat lastMessage={lastMessage}/>
      </div>
    </div>
  )
}

export default Sidebar
