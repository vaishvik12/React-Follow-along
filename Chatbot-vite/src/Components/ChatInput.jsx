import {useState,useRef,useEffect} from "react"
import {Chatbot} from 'supersimpledev'

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputValue, setInputValue] = useState("");
  const chatInputRef = useRef(null);

  useEffect(() => {
    chatInputRef.current.focus()
  }, []);

  function storeInputValue(event) {
    setInputValue(event.target.value);//he
  }

  async function sendNewMessage() {

    const userMessage = [...chatMessages, {
      message: inputValue,
      sender: "user",
      id: crypto.randomUUID()
    }];

    setChatMessages(userMessage)

    let chatBotResponse = await Chatbot.getResponseAsync(inputValue);

    setChatMessages([...userMessage, {
      message: chatBotResponse,
      sender: "robot",
      id: crypto.randomUUID()
    }])


    setInputValue("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      sendNewMessage()
    } else if (event.key === "Escape") {
      setInputValue("");
    }
  }



  return (
    <div
      className="chat-input-div">
      <input type="text"
        placeholder="Send a message to the chat bot"
        size="30"
        onChange={storeInputValue}
        onKeyDown={handleKeyDown}
        value={inputValue}
        className="chat-input"
        ref={chatInputRef}
      />

      <button
        className="send-bttn"
        onClick={sendNewMessage}
      >
        Send
      </button>
    </div>
  )
};


export default ChatInput;