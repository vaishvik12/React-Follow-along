import RobotImage from "../assets/robot.png"
import UserImage from "../assets/user.png"
import dayjs from "dayjs";

function ChatMessage({ message, sender, time }) {
  return (
    <div className={sender === "user"
      ? "user-message-div"
      : "robot-message-div"
    }>
      {sender === "robot" &&
        <img
          src={RobotImage}
          width="50" />}

      <div className="chat-message-div">
        {message}
        <div className = 'chat-message-time'>
        {dayjs(time).format("H:mma")}
        </div>
      </div>

      {sender === "user" &&
        <img
          src={UserImage}
          width="50" 
          className = "user-image"
          />}
    </div>
  )
}

export default ChatMessage;