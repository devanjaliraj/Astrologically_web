import React from "react";

import { Container } from "reactstrap";
import "../../assets/scss/chat.scss";
import LayoutOne from "../../layouts/LayoutOne";
import Buyimg from "../../../src/assets/img/boy-img.png";
import { Link } from 'react-router-dom'

import ChatAppList from "./ChatAppList";
import ChatAppMassage from "./ChatAppMassage";
import axiosConfig from "../../axiosConfig"

class ChatApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      roomChatData: [],
      userId: "",
      astroId: "",
      msg: "",
      roomId: '',
      time: {},
      seconds: 60 * 15,

      minutes: 15,
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  };


  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount = () => {
    //this.startTimer()
    //alert(JSON.parse(localStorage.getItem('minute')))
    let timeLeftVar = ''
    if (JSON.parse(localStorage.getItem('minute'))) {
      let minute = JSON.parse(localStorage.getItem('minute'))
      this.setState({ minutes: minute, seconds: minute * 60 });
      this.startTimer()
      this.secondsToTime(minute * 60);
    }
    //timeLeftVar = this.secondsToTime(this.state.seconds);
    // this.setState({ time: timeLeftVar });
    let user_id = JSON.parse(localStorage.getItem('user_id'))
    // let { id } = this.props.match.params;
    axiosConfig
      .get(`/user/getroomid/${user_id}`)
      .then((response) => {
        console.log(response.data.data);
        if (response.data.status === true) {
          this.setState({
            data: response.data.data,
            fullname: response.data.data.fullname,
            userimg: response.data.data.userimg, time: timeLeftVar
          });
        }
      })
      .catch((error) => {
        console.log(error);
        // console.log(error.response);
      });
  };

  startTimer() {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // let astroid = JSON.parse(localStorage.getItem('astroid'))
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds !== 0 ?
      this.state.seconds - 1
      :
      alert("out time");
    // this.history.redirect(`/astrologerdetail/${astroid}`)
    // <Redirect to={'/chatApp/astrologerdetail/' + astroid} />
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
      //    if (seconds = 0 && this.state.seconds > 0) {
      //   this.timer = setInterval(this.countDown, 1000);
      // }
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }
  getChatRoomId = async (user) => {
    console.log("sdjghjks", user)
    this.setState({ astroId: user?.astroid?._id, roomId: user?.roomid });
    await axiosConfig.get(`/user/allchatwithuser/${user?.roomid}`)
      .then((response) => {
        console.log(response?.data?.data);
        if (response.data.status === true) {
          this.setState({ roomChatData: response?.data.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  submitHandler = async (e, astroid, userId) => {
    e.preventDefault();
    // let { id } = this.props.match.params;
    let userid = JSON.parse(localStorage.getItem("user_id"));
    let obj = {
      astroid: this.state.astroId,
      msg: this.state.msg,
    };

    await axiosConfig
      .post(`/user/addchat/${userid}`, obj)
      .then((response) => {
        console.log("hdfkjh", response.data.status)
        if (response.data.status === true) {
          this.setState({ msg: "" });
          axiosConfig.get(`/user/allchatwithuser/${this.state.roomId}`)
            .then((response1) => {
              console.log(response1?.data?.data);
              if (response1.data.status === true) {
                this.setState({ roomChatData: response1?.data.data });
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })

      .catch((error) => {
        // swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  };

  handleChange = (e) => {
    this.setState({
      msg: e.target.value,
    });
  };

  render() {
    return (
      <LayoutOne headerTop="visible">
        <section className="app-chatbg">
          <Container>
            <div class="app rt-chat">
              <div class="contact-list">
                <h1 class="title">My messages</h1>
                <ChatAppList getChatRoomId={(id) => this.getChatRoomId(id)} />
              </div>
              <div class="messages">
                <div className="chat-header">
                  <p>
                    <span>
                      <img src={this.state.roomChatData.length > 0 ? this.state.roomChatData[0]?.astroid?.img[0] : Buyimg} className="app-img" alt="" />

                    </span>
                    {this.state.roomChatData.length > 0 ? this.state.roomChatData[0]?.astroid?.fullname : null}
                  </p>
                  <span className="appchattimer">

                    {this.state.time.m} :{this.state.time.s}

                  </span>
                </div>
                <div class="messages-history">
                  <ChatAppMassage roomChatData={this.state.roomChatData.length > 0 ? this.state.roomChatData : []} />
                </div>
                <form class="messages-inputs"  >


                  <input

                    type="text"
                    placeholder="Send a message"
                    onChange={(e) => {
                      this.handleChange(e);
                    }}
                    value={this.state.msg}
                    defaultValue={""}
                  />
                  {/* )
                    })
                    : null} */}
                  <button onClick={(e) =>
                    this.submitHandler(
                      e,
                      this.state.astroId,
                      this.state.userId,

                    )
                  }
                  >
                    <i class="material-icons" onClick={this.startTimer}>send</i>
                  </button>
                </form>
              </div>
            </div>
            <div className="chat-bottom">
              {/* <button>Close Chat</button> */}
              <Link to="/astrorating">
                <button>Close Chat</button></Link>
            </div>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}
export default ChatApp;