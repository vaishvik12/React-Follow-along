import { useState} from 'react'
import ChatInput from "./Components/ChatInput.jsx"
import {ChatMessages} from "./Components/ChatMessages.jsx"
import './App.css'


function App() {
  const [chatMessages, setChatMessages] = useState([]);


  return (
    <div className="app-container">

      <ChatMessages
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>)
};

export default App
