import "./ChatBox.css";
import { MdOutlineDiversity2 } from "react-icons/md";

function ChatBox(props) {
  return (
    <div className="chat-box">
      {props.messages.map(({ isReceiver, text }) => {
        const classNameType = isReceiver ? "reciver" : "sender";
        return (
          <div className={`chat-box-item ${classNameType}`}>
            {isReceiver && (
              <div className="chat-box-ia-icon">
                <MdOutlineDiversity2 size={22} />
              </div>
            )}
            <div className={`chat-box-text-item ${classNameType}`}>
              <p>{text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ChatBox;
