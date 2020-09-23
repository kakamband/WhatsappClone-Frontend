import React, {useEffect, useState} from 'react';
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import Pusher from 'pusher-js'
import axios from './axios'

function App() {

  const [messages, setMessages] = useState([])
  const [lastMessage, setLastMessage] = useState('')

  useEffect(() => {
    axios.get('/api/v1/messages/sync')
      .then(response => {
        setMessages(response.data)
      })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('e76e7de0ddd04cbe5988', {
      cluster: 'us2'
    })

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
      setLastMessage(newMessage)
    })

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }

  }, [messages])

  console.log(messages)

  return (
    <div className="app">
      <div className='app__body'>
        <Sidebar lastMessage={lastMessage}/>
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
