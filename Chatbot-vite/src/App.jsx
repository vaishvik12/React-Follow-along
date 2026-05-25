import { useState} from 'react'
import ChatInput from "./Components/ChatInput.jsx"
import {ChatMessages} from "./Components/ChatMessages.jsx"
import './App.css'


function App() {
  const [chatMessages, setChatMessages] = useState([{
    message: "hello",
    sender: "user",
    id: "id1"
  }, {
    message: "Hello! How can I help you?",
    sender: "robot",
    id: "id2"
  }, {
    message: "Flip a coin",
    sender: "user",
    id: "id3"
  }, {
    message: "Sure! You got heads",
    sender: "robot",
    id: "id4"
  }, {
    message: "Thank you",
    sender: "user",
    id: "id5"
  }, {
    message: "No problem! Let me know if you need help with anything else!",
    sender: "robot",
    id: "id6"
  }]);


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
