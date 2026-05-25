import { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage.jsx';
import "./ChatMessages.css"

export function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);
  useEffect(() => {
    const containerElm = chatMessagesRef.current;
    if (containerElm) {
      containerElm.scrollTop = containerElm.scrollHeight;
    }
  }, [chatMessages]);



  return (
    <div className="chat-messages-div" ref={chatMessagesRef}>

    {chatMessages.length === 0 && <p>Welcome to the chatbot project! Send a message using the textbox below.</p>}

      {chatMessages.map(chatMessage => {
        return (<ChatMessage
          message={chatMessage.message}
          sender={chatMessage.sender}
          key={chatMessage.id}
        />)
      })}
    </div>
  )

}

