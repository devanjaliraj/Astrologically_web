import React from "react";
// import { Link } from "react-router-dom";
// import { Container } from "reactstrap";
// import "../../assets/scss/chat.scss";
// import LayoutOne from "../../layouts/LayoutOne";
// import Buyimg from "../../../src/assets/img/boy-img.png";
// import Countdown from "react-countdown";
import swal from "sweetalert";
import axiosConfig from "../../axiosConfig";

class MessagesHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      astroid: "",
      msg: "",
      chatMsgList: [],
      userId: "",
      roomid: "",
    };
  }

  submitHandler = (e, astroid, userId, roomid) => {
    e.preventDefault();
    let { id } = this.props.match.params;
    let user_id = JSON.parse(localStorage.getItem("user_id"));
    let obj = {
      astroId: id,
      astroid: astroid,
      roomId: id,
      roomid: roomid,
      userid: user_id,
      msg: this.state.msg,
    };

    axiosConfig
      .post(`/user/addchat/${user_id}`, obj)
      .then((response) => {
        console.log("@@@@@", response?.data?.data?.roomid);
        this.setState({ msg: "" });
        this.setState({ roomid: response?.data?.data?.roomid });
        if (response?.data?.data?.roomid !== undefined) {
          axiosConfig
            .get(`/user/allchatwithuser/` + response?.data?.data?.roomid)
            .then((response) => {
              console.log("ROOMID", response.data.data);
              this.setState({
                msg: "",
                chatMsgList: response?.data?.data,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
        swal("Success!", "Submitted SuccessFull!", "success");
        //window.location.reload('/askQuestion')
      })
      .catch((error) => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  };
  handleChange = (e) => {
    this.setState({
      msg: e.target.value,
    });
  };
  render() {
    const { chatMsgList } = this.state;
    return (
      <div>
        {chatMsgList.length > 0
          ? chatMsgList.map((chatMsg, index) => {
              return (
                <div>
                  <div className="message " key={chatMsg.msg}>
                    <div class="message-body">{chatMsg.msg_reply}</div>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    );
  }
}
export default MessagesHistory;
