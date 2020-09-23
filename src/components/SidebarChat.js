import React from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core';

function SidebarChat({ lastMessage }) {
  return (
    <div className='sidebarChat'>
      <Avatar/>
      <div className='sidebarChat__info'>
        <h2>Demo App</h2>
        <p>{lastMessage.message}</p>
      </div>
    </div>
  )
}

export default SidebarChat
