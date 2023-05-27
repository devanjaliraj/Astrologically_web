import React from "react";
// import { Link } from "react-router-dom";
// import { Container } from "reactstrap";
import "../../assets/scss/chat.scss";
// import LayoutOne from "../../layouts/LayoutOne";
// import Buyimg from "../../../src/assets/img/boy-img.png";
// import Countdown from "react-countdown";
import axiosConfig from "../../axiosConfig";
// import ChatApp from "./ChatApp";
class ChatAppList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: {},
      userChatList: [],
    };
  }
  componentDidMount() {
    let userId = JSON.parse(localStorage.getItem("user_id"));

    console.log(userId);
    axiosConfig
      .get(`/user/getroomid/${userId}`)
      .then((response) => {
        console.log(response);
        if (response.data.status === true) {
          this.setState({
            userChatList: response.data?.data,
            roomid: response.data.data?.roomid,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { userChatList } = this.state;

    return (
      <ul>
        {userChatList.length
          ? userChatList.map((user, index) => {
              return (
                <li>
                  {/* <Link to="this.state.data.roomid"> */}

                  <div
                    key={user?._id}
                    className="list-main"
                    onClick={() => this.props.getChatRoomId(user)}
                  >
                    <div className="imglf">
                      <img src={user.astroid?.img} className="app-img" alt="" />
                    </div>
                    <div
                      onClick={() => this.props.getChatRoomId(user)}
                      className="lst-con"
                    >
                      <h5 onClick={() => this.props.getChatRoomId(user)}>
                        {user.astroid?.fullname}
                      </h5>
                      <p onClick={() => this.props.getChatRoomId(user)}>
                        {user.msg}
                      </p>
                    </div>
                  </div>
                  {/* </Link> */}
                </li>
              );
            })
          : null}
      </ul>
    );
  }
}

export default ChatAppList;
