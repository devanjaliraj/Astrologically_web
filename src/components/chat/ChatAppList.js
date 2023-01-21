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

        if (response.data.status === true) {
          this.setState({
            userChatList: response.data?.data,
            roomid: response.data.data?.roomid
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

                <div className="list-main" onClick={() => this.props.getChatRoomId(user)}>
                  <div className="imglf">
                    <img src={user.astroid?.img} className="app-img" alt="" />
                  </div>
                  <div className="lst-con">
                    <h5>{user.astroid?.fullname} </h5>
                    <p>{user.msg}</p>

                  </div>
                </div>
                {/* </Link> */}
              </li>
            );
          })
          : null}
      </ul>

      /* <li>
          <div className="imglf">
            <img src={{ Buyimg }} className="app-img" />
          </div>
          <div className="lst-con">
            <h5> namehghghghg</h5>
            <p>lorem</p>
          </div>
        </li> */
    );
  }
}

//   ReactDOM.render(
//     <ChatApp />,
//     document.getElementById('root')
//   );

export default ChatAppList;
