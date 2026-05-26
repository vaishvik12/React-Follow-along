import { useState,useEffect} from 'react'
import ChatInput from "./Components/ChatInput.jsx"
import {ChatMessages} from "./Components/ChatMessages.jsx"
import {Chatbot} from 'supersimpledev'
import './App.css'


function App() {
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);

  useEffect(() => {
    Chatbot.addResponses({
      'good night baby' : "good night, sweet dreams💜",
      "give me a unique id" : function(){
        return `${crypto.randomUUID()}`;
      }
    })
  },[])

  useEffect(() => {
    localStorage.setItem('messages',JSON.stringify(chatMessages))
  },[chatMessages]);



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
