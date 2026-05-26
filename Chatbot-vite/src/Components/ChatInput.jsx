import {useState,useRef,useEffect} from "react"
import {Chatbot} from 'supersimpledev'
import LoadingSpinner from '../assets/loading-spinner.gif'
import "./ChatInput.css"
import dayjs from "dayjs";

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
      id: crypto.randomUUID(),
      time : dayjs().valueOf()
    }];

    setChatMessages(userMessage)


      setChatMessages([...userMessage, {
      message: <img src = {LoadingSpinner} className = "loading-spinner"></img>,
      sender: "robot",
      id: crypto.randomUUID(),
      time : dayjs().valueOf()
    }])

    setInputValue("");
    let chatBotResponse = await Chatbot.getResponseAsync(inputValue);

    setChatMessages([...userMessage, {
      message: chatBotResponse,
      sender: "robot",
      id: crypto.randomUUID(),
      time : dayjs().valueOf()
    }])



  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      sendNewMessage()
    } else if (event.key === "Escape") {
      setInputValue("");
    }
  }

  function handleClear(){
    localStorage.removeItem("messages");
    setChatMessages([]);
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

      <button
      onClick = {handleClear}
      >Clear</button>
    </div>
  )
};


export default ChatInput;