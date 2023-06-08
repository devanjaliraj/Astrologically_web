import React from "react";

import "../../assets/scss/chat.scss";

class ChatAppMassage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {this.props.roomChatData.length
          ? this.props.roomChatData
              .map((chat, index) => {
                return (
                  <>
                    {chat.type === "user" ? (
                      <div className="message me">
                        <div className="message-body">{chat.msg}</div>
                      </div>
                    ) : (
                      <div className="message">
                        <div className="message-body">{chat.msg}</div>
                      </div>
                    )}
                  </>
                );
              })
              .reverse()
          : null}
      </>
    );
  }
}

export default ChatAppMassage;
