import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import "../../assets/scss/chat.scss";
import LayoutOne from "../../layouts/LayoutOne";
import Buyimg from "../../../src/assets/img/boy-img.png";
import Countdown from "react-countdown";
import ChatAppList from "./ChatAppList";
import ChatAppMassage from "./ChatAppMassage";

class ChatApp extends React.Component {

  render() {
    return (
      <LayoutOne headerTop="visible">
        <section className="app-chatbg">
          <Container>
            <div class="app rt-chat">
              <div class="contact-list">
                <h1 class="title">My messages</h1>
                <ChatAppList  />
              </div>
              <div class="messages">
                <div className="chat-header">
                  <p>
                    <span>
                      <img src={{ Buyimg }} className="app-img" />
                    </span>
                    Astrologer name
                  </p>
                  <span className="appchattimer">
                    <Countdown date={Date.now() + 10000} />
                  </span>
                </div>
                <div class="messages-history">
                  <ChatAppMassage  />
                </div>
                <form class="messages-inputs" o>
                  <input
                    type="text"
                    placeholder="Send a message"
                   
                  />
                  <button>
                    <i class="material-icons">send</i>
                  </button>
                </form>
              </div>
            </div>
            <div className="chat-bottom">
              <button>Close Chat</button>
            </div>
          </Container>
        </section>
      </LayoutOne>
    );
  }

  
}




//   ReactDOM.render(
//     <ChatApp />,
//     document.getElementById('root')
//   );

export default ChatApp;
