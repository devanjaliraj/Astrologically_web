import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import "../../assets/scss/chat.scss";
import LayoutOne from "../../layouts/LayoutOne";
import Buyimg from "../../../src/assets/img/boy-img.png";
import Countdown from "react-countdown";
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      astroId: "",
      question: "",
      createdAt: "",
      roomid: "",
      allchatwithuserList: [],
      userChatList: [],
      userId: "",

      contacts: [
        { text: "John Smith", active: false },
        { text: "Molly Watt", active: true },
        { text: "Ivan Mackay", active: false },
      ],
      // messages: [
      //   { id: "1", text: "Hi Molly!", me: true },
      //   { id: "2", text: "Hey, how are you doing?", me: false },
      //   { id: "3", text: "It's been a while", me: false },
      //   { id: "4", text: "Yes it is!", me: true },
      //   { id: "5", text: "Have you ever heard of lorem ipsum?", me: true },
      //   { id: "6", text: "No, what is it?", me: false },
      //   {
      //     id: "7",
      //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      //     me: true,
      //   },
      // ],
      // message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    let user_id = JSON.parse(localStorage.getItem("user_id"));

    axiosConfig
      .get(`/user/userChatList/${user_id}`)
      .then((response) => {
        console.log("fgshdfhsdfhs", response.data.data);
        this.setState({
          userChatList: response?.data?.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/user/allchatwithuser/${id}`)
      .then((response) => {
        console.log("fgshdfhsdfhs", response.data.data);
        this.setState({
          allchatwithuserList: response?.data?.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  submitHandler = (e, astroid, userId) => {
    e.preventDefault();
    let { id } = this.props.match.params;
    // console.log(id)
    // let astroid = JSON.parse(localStorage.getItem('astroId'))

    // let userid = JSON.parse(localStorage.getItem('userId'))
    let user_id = JSON.parse(localStorage.getItem("user_id"));
    let obj = {
      // astroId: id,
      // astroid: astroid,
      userid: user_id,
      msg: this.state.msg,
    };

    axiosConfig
      .post(`/user/addchat/${user_id}`, obj)

      .then((response) => {
        console.log("@@@@@", response.data.data);
        this.setState({ msg: "" });
        // this.getQuestionList(id)
        swal("Success!", "Submitted SuccessFull!", "success");
        window.location.reload("/chatApp");
      })

      .catch((error) => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  };

  render() {
    const { allchatwithuserList } = this.state;

    return (
      <LayoutOne headerTop="visible">
        <section className="app-chatbg">
          <Container>
            <div class="app rt-chat">
              <div class="contact-list">
                <h1 class="title">My messages</h1>
                <ContactList items={this.state.contacts} />
              </div>
              <div class="messages">
                <div className="chat-header">
                  <p>
                    <span>
                      <img src={{}} className="app-img" />
                    </span>
                    Astrologer name
                  </p>
                  <span className="appchattimer">
                    <Countdown date={Date.now() + 10000} />
                  </span>
                </div>
                <div class="messages-history">
                  {allchatwithuserList.length > 0
                    ? allchatwithuserList.map((allchat, index) => {
                        return <MessagesHistory>{allchat.msg}</MessagesHistory>;
                      })
                    : " "}
                </div>
                <form class="messages-inputs" onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    placeholder="Send a message"
                    onChange={this.handleChange}
                    value={this.state.msg}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={(e) =>
                      this.submitHandler(
                        e,
                        this.state.astroId,
                        this.state.userId
                      )
                    }
                  >
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
              <img src={{ Buyimg }} className="app-img" />
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

//   ReactDOM.render(
//     <ChatApp />,
//     document.getElementById('root')
//   );

export default ChatApp;
