import React from "react";
// import { Link } from "react-router-dom";
// import { Container } from "reactstrap";
import "../../assets/scss/chat.scss";
// import LayoutOne from "../../layouts/LayoutOne";
// import Buyimg from "../../../src/assets/img/boy-img.png";
// import Countdown from "react-countdown";

class ChatAppMassage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("props value", this.props.roomChatData);
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

//   ReactDOM.render(
//     <ChatApp />,
//     document.getElementById('root')
//   );

export default ChatAppMassage;
