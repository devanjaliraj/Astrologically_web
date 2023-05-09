import React from "react";
import { Container } from "reactstrap";
import "../../assets/scss/chat.scss";
import LayoutOne from "../../layouts/LayoutOne";
import Buyimg from "../../../src/assets/img/boy-img.png";
import Countdown from "react-countdown";

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <LayoutOne headerTop="visible">
        <section className="app-chatbg">
          <Container>
            <div class="app rt-chat">
              <div class="contact-list">
                <h1 class="title">My messages111</h1>
                <ContactList items={this.state.contacts} />
              </div>
              <div class="messages">
                <div className="chat-header">
                  <p>
                    <span>
                      <img src={{ Buyimg }} className="app-img" alt="" />
                    </span>
                    Astrologer name
                  </p>
                  <span className="appchattimer">
                    <Countdown date={Date.now() + 10000} />
                  </span>
                </div>
                <div class="messages-history">
                  <MessagesHistory items={this.state.messages} />
                </div>
                <form class="messages-inputs" onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    placeholder="Send a message"
                    onChange={this.handleChange}
                    value={this.state.message}
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

  handleChange(e) {
    this.setState({ message: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.message.length) {
      return;
    }
    const newItem = {
      text: this.state.message,
      id: Date.now(),
      me: true,
    };
    this.setState((state) => ({
      messages: state.messages.concat(newItem),
      message: "",
    }));
  }
}
class MessagesHistory extends React.Component {
  render() {
    return []
      .concat(this.props.items)
      .reverse()
      .map((item) => (
        <div className={"message " + (item.me ? "me" : "")} key={item.id}>
          <div class="message-body">{item.text}</div>
        </div>
      ));
  }
}
class ContactList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li className={item.active ? "active" : ""}>
            <div className="imglf">
              <img src={{ Buyimg }} className="app-img" alt="" />
            </div>
            <div className="lst-con">
              <h5>{item.text}</h5>
              <p>lorem</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
export default ChatApp;
