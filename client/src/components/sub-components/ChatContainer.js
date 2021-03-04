import React from "react";
import "../Main.css";

const ChatContainer = (props) => {
  const messages = props.messages.map((message, index) => {
    return (
      <div key={index + 3}className="chat-flex">
        <p className="yo" key={index}>
          {message.username}:
        </p>
        <p className="blah" key={index + 1}>
            {message.message}
        </p>
      </div>
    );
  });
  return <div>{messages}</div>;
};

export default ChatContainer;
