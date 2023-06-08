import React from "react";

import { Button, Container } from "reactstrap";
import "../../assets/scss/chat.scss";
import LayoutOne from "../../layouts/LayoutOne";
import Buyimg from "../../../src/assets/img/boy-img.png";
import { Link } from "react-router-dom";

import ChatAppList from "./ChatAppList";
import ChatAppMassage from "./ChatAppMassage";
import axiosConfig from "../../axiosConfig";
import { Fetchuserdetail } from "../header/IconGroup";
import swal from "sweetalert";

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.countRef = React.createRef();
    this.apicall = React.createRef();

    this.state = {
      Index: "",
      Historydata: false,
      setTimer: 0,
      data: {},
      sendbutton: "",
      Activeastro: {},
      CurrentRoomid: "",
      roomChatData: [],
      userId: "",
      astroId: "",
      msg: "",
      roomId: "",
      time: {},
      seconds: 60 * 15,
      minutes: 15,
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }
  formatTime = (timer) => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  handlestartinterval = () => {
    this.apicall.current = setInterval(() => {
      let userId = JSON.parse(localStorage.getItem("user_id"));
      let astroId = localStorage.getItem("videoCallAstro_id");
      sessionStorage.setItem("typeofcall", "Chat");

      let payload = {
        userId: userId,
        astroId: astroId,
        status: true,
      };
      axiosConfig
        .post(`/user/addCallDuration`, payload)
        .then((res) => {
          console.log("callduration", res.data);
          Fetchuserdetail();
        })
        .catch((err) => {
          console.log(err.response.data.message);
          if (
            err.response.data.message === "Insufficient balance for the call"
          ) {
            this.handlestop();
            this.props.history.push("/allastrologerlist");
            swal("You have Low Balance");
          }
          // swal(
          //   "Low Balance",
          //   "Your Balance is getting low As per minimum charge of this Astrologer",
          //   {
          //     buttons: {
          //       catch: { text: "Cancel ", value: "catch" },
          //       recharge: { text: "Recharge NOW ", value: "Recharge" },
          //     },
          //   }
          // ).then((value) => {
          //   switch (value) {
          //     case "catch":
          //       this.props.history.push("/");
          //       break;
          //     case "Recharge":
          //       swal("move to recharge ");
          //       break;
          //     default:
          //   }
          // });
        });
    }, 60000);
  };

  handleStart = () => {
    this.countRef.current = setInterval(() => {
      this.setState({ setTimer: this.state.setTimer + 1 });
    }, 1000);
    this.handlestartinterval();
  };

  handlePause = () => {
    clearInterval(this.countRef.current);
    clearInterval(this.apicall.current);
    // this.setState({ setIsPaused: false });
  };

  handlestop = () => {
    this.handlePause();
    let userId = JSON.parse(localStorage.getItem("user_id"));
    let astroId = localStorage.getItem("videoCallAstro_id");
    sessionStorage.setItem("typeofcall", "Chat");
    let payload = {
      userId: userId,
      astroId: astroId,
      status: false,
    };
    axiosConfig
      .post(`/user/addCallDuration`, payload)
      .then((res) => {
        console.log("callduration per min", res.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  componentDidMount = () => {
    // this.handleStart();
    //this.startTimer()
    //alert(JSON.parse(localStorage.getItem('minute')))
    const astroId = localStorage.getItem("astroId");

    axiosConfig
      .get(`/admin/getoneAstro/${astroId}`)
      .then((res) => {
        console.log(res.data.data);
        this.setState({ Activeastro: res?.data?.data });
      })
      .catch((err) => {
        console.log(err);
      });

    let timeLeftVar = "";
    if (JSON.parse(localStorage.getItem("minute"))) {
      let minute = JSON.parse(localStorage.getItem("minute"));
      this.setState({ minutes: minute, seconds: minute * 60 });
      this.startTimer();
      this.secondsToTime(minute * 60);
    }
    //timeLeftVar = this.secondsToTime(this.state.seconds);
    // this.setState({ time: timeLeftVar });
    let user_id = JSON.parse(localStorage.getItem("user_id"));
    console.log("user_id1452", user_id);
    // let { id } = this.props.match.params;
    axiosConfig
      .get(`/user/getroomid/${user_id}`)
      .then((response) => {
        console.log(response.data.data);
        if (response.data.status === true) {
          this.setState({
            data: response.data.data,
            fullname: response.data.data.fullname,
            userimg: response.data.data.userimg,
            time: timeLeftVar,
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
    let seconds =
      this.state.seconds !== 0 ? this.state.seconds - 1 : alert("out time");
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
      // window.location.replace("/#/astrorating");
    }
  }
  getChatRoom = (data, status) => {
    this.setState({ Historydata: status });

    // this.setState({ Historydata: false });
    let userid = JSON.parse(localStorage.getItem("user_id"));
    let obj = {
      astroid: data?._id,
      msg: this.state.msg,
    };
    if (this.state.CurrentRoomid != "") {
      axiosConfig
        .get(`/user/allchatwithuser/${this.state.CurrentRoomid}`)
        .then((respons) => {
          console.log(respons?.data?.data);
          this.handleStart();

          // console.log(respons?.data?.status);
          if (respons.data.status === true) {
            this.setState({ roomChatData: respons?.data.data });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axiosConfig
        .post(`/user/addchat/${userid}`, obj)
        .then((response) => {
          console.log("chat", response.data);
          this.setState({ CurrentRoomid: response?.data?.data?.roomid });
          console.log("chat", response?.data?.data?.roomid);
          if (response.data.status === true) {
            this.setState({ msg: "" });
            axiosConfig
              .get(`/user/allchatwithuser/${response?.data?.data?.roomid}`)
              .then((respons) => {
                // this.handleStart();
                console.log(respons?.data?.data);
                // console.log(respons?.data?.status);
                if (respons.data.status === true) {
                  this.setState({ roomChatData: respons?.data.data });
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
    }
  };

  getChatRoomId = async (user, index) => {
    this.setState({ Historydata: true });
    this.setState({ sendbutton: user.astroid?._id });
    this.setState({ Index: index });
    localStorage.setItem("videoCallAstro_id", user?.astroid?._id);
    console.log("userdata", user);
    this.setState({ astroId: user?.astroid?._id, roomId: user?.roomid });
    await axiosConfig
      .get(`/user/allchatwithuser/${user?.roomid}`)
      .then((response) => {
        console.log(response?.data?.data);
        if (response.data.status === true) {
          this.setState({ roomChatData: response?.data.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // this.setState({ astroId: user?.astroid?._id, roomId: user?.roomid });
    // await axiosConfig
    //   .get(`/user/allchatwithuser/${user?.roomid}`)
    //   .then((response) => {
    //     console.log(response?.data?.data);
    //     if (response.data.status === true) {
    //       this.setState({ roomChatData: response?.data.data });
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  submitHandler = async (e, astroid, userId) => {
    e.preventDefault();
    // let { id } = this.props.match.params;
    const astroId = localStorage.getItem("astroId");
    let userid = JSON.parse(localStorage.getItem("user_id"));

    if (this.state.msg != "") {
      let obj = {
        astroid: astroId,
        msg: this.state.msg,
      };

      await axiosConfig
        .post(`/user/addchat/${userid}`, obj)
        .then((response) => {
          console.log("hdfkjh", response.data?.data?.roomid);
          if (response.data.status === true) {
            this.setState({ msg: "" });
            axiosConfig
              // .get(`/user/allchatwithuser/${this.state.roomId}`)
              .get(`/user/allchatwithuser/${response.data?.data?.roomid}`)
              .then((respons) => {
                this.handleStart();
                console.log(respons?.data?.data);
                // console.log(respons?.data?.status);
                if (respons.data.status === true) {
                  this.setState({ roomChatData: respons?.data.data });
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
    } else swal("Input filed is blank", "Fill it before send");
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

                <ChatAppList
                  getChatRoomId={(id, index) => this.getChatRoomId(id, index)}
                  getChatRoom={(data, status) => this.getChatRoom(data, status)}
                  data={this.state.Historydata}
                />
              </div>
              {this.state.Historydata === true ? (
                <>
                  <div class="messages">
                    <div className="chat-header">
                      <p>
                        <span>
                          <img
                            src={
                              this.state.roomChatData.length > 0
                                ? this.state.roomChatData[0]?.astroid?.img[0]
                                : Buyimg
                            }
                            className="app-img"
                            alt=""
                          />
                        </span>
                        {this.state.roomChatData.length > 0
                          ? this.state.roomChatData[0]?.astroid?.fullname
                          : null}
                      </p>
                      <span className="appchattimer">
                        <p>{this.formatTime(this.state.setTimer)}</p>
                      </span>
                    </div>
                    <div class="messages-history">
                      <ChatAppMassage
                        roomChatData={
                          this.state.roomChatData.length > 0
                            ? this.state.roomChatData
                            : []
                        }
                      />
                    </div>
                    {localStorage.getItem("astroId") ===
                    this.state.sendbutton ? (
                      <>
                        <form class="messages-inputs">
                          <input
                            type="text"
                            placeholder="Send a message"
                            onChange={(e) => {
                              this.handleChange(e);
                            }}
                            value={this.state.msg}
                            defaultValue={""}
                          />

                          <button
                            onClick={(e) => {
                              this.submitHandler(
                                e,
                                this.state.astroId,
                                this.state.userId
                              );
                            }}
                          >
                            <i class="material-icons">send</i>
                          </button>
                        </form>
                      </>
                    ) : null}
                  </div>
                </>
              ) : (
                <>
                  <div class="messages">
                    <div className="chat-header">
                      <p>
                        <span>
                          <img
                            src={this.state.Activeastro?.img}
                            className="app-img"
                            alt=""
                          />
                        </span>
                        {this.state.Activeastro?.fullname}
                      </p>
                      <span className="appchattimer">
                        <p>{this.formatTime(this.state.setTimer)}</p>
                      </span>
                    </div>
                    <div class="messages-history">
                      <ChatAppMassage
                        roomChatData={
                          this.state.roomChatData.length > 0
                            ? this.state.roomChatData
                            : []
                        }
                      />
                    </div>

                    <form class="messages-inputs">
                      <input
                        type="text"
                        placeholder="Send a message"
                        onChange={(e) => {
                          this.handleChange(e);
                        }}
                        value={this.state.msg}
                        defaultValue={""}
                      />

                      <button
                        onClick={(e) => {
                          this.submitHandler(
                            e,
                            this.state.astroId,
                            this.state.userId
                          );
                        }}
                      >
                        <i class="material-icons">send</i>
                      </button>
                    </form>
                  </div>
                </>
              )}
            </div>
            <div className="chat-bottom">
              <Link to="/astrorating">
                <Button onClick={this.handlestop} color="primary">
                  Close Chat
                </Button>
              </Link>
            </div>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}
export default ChatApp;
