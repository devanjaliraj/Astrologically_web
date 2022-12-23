import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import "../../assets/scss/chat.scss";
import LayoutOne from "../../layouts/LayoutOne";
import Buyimg from "../../../src/assets/img/boy-img.png";
import Countdown from "react-countdown";

class ChatAppMassage extends React.Component {
  render() {
    return (
      <>
        <div class="message me">
          <div class="message-body">User reply.......</div>
        </div>

        <div className="message">
          <div class="message-body">Astrologer reply......</div>
        </div>
      </>
    );
  }
}

//   ReactDOM.render(
//     <ChatApp />,
//     document.getElementById('root')
//   );

export default ChatAppMassage;
