import RobotImage from "../assets/robot.png"
import UserImage from "../assets/user.png"

function ChatMessage({ message, sender }) {
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
      </div>

      {sender === "user" &&
        <img
          src={UserImage}
          width="50" />}
    </div>
  )
}

export default ChatMessage;