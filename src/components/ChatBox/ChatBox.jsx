/*import "./ChatBox.css";
import { MdOutlineDiversity2 } from "react-icons/md";
import { useEffect, useRef } from "react";
function ChatBox(props) {
  const bottomRef = useRef(null);

  // Scroll automático al final cuando se actualizan los mensajes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [props.messages]);
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

export default ChatBox;*/

import "./ChatBox.css";
import { useEffect, useRef } from "react";
import { MdOutlineDiversity2 } from "react-icons/md";

function ChatBox(props) {
  const bottomRef = useRef(null);

  // Scroll automático al final cuando se actualizan los mensajes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [props.messages]);

  return (
    <div className="chat-box">
      {props.messages.map(({ isReceiver, text }, index) => {
        const classNameType = isReceiver ? "reciver" : "sender";
        return (
          <div key={index} className={`chat-box-item ${classNameType}`}>
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
      {/* Elemento invisible para hacer scroll hacia él */}
      <div ref={bottomRef} />
    </div>
  );
}

export default ChatBox;
