import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Input,
  InputGroup,
  Form,
  Button,
} from "reactstrap";
import astrologinbg from "../../assets/img/astrologin-bg.jpg"

import LayoutOne from "../../layouts/LayoutOne";
import "../../assets/scss/astroteam.scss";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Table } from "reactstrap";
import axiosConfig from "../../axiosConfig";

class UserChatHistoryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // data: {},
      userChatList: [],
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    let userId = JSON.parse(localStorage.getItem("user_id"));

    console.log(userId);
    axiosConfig
      .get(`/user/getOne_Conversation_Wallet/${userId}`)
      .then((response) => {
        console.log("userChatList", response.data.data);
        if (response.data.status === true) {
          this.setState({
            userChatList: response.data.data,
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
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              // backgroundColor: "#FFD59E",
              // width: "100%",
              // padding: "70px 0px",
              // backgroundSize: "cover",
              float: "left",
              width: "100%",
              backgroundColor: "#272727",
              position: "relative",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              color: "#ffffff",
              padding: " 50px 0px 50px 0px",
              backgroundImage: `url(${astrologinbg})`,
              backgroundPosition: "center center",
              backgroundRepeat: " no-repeat",
              textAlign: "center",
            }}
          >
            <Container>
              <Row>
                <Col md="12">
                  <div className="leftcont text-left">
                    <h1>User Chat History</h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="12">
                {/* {userChatList.length
                  ? userChatList.map((user, index) => {
                      return ( */}
                <div className="">
                  <Table striped className="">
                    <thead>
                      <tr>
                        <th>#Conversation ID</th>
                        <th>Astrologer Name</th>

                        <th>Conversation Type</th>
                        <th>Rate</th>
                        <th>Duration</th>
                        <th>Amount</th>
                        <th>Deducation</th>
                        <th>Date/Time</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    {userChatList.length
                      ? userChatList.map((user, index) => {
                        return (
                          <tbody>
                            <tr>
                              <th >{user?.conversationId}</th>
                              <td>{user?.astroid?.fullname}</td>

                              <td>{user?.type}</td>
                              <td>{user?.astroid?.callCharge}/Min.</td>
                              <td>{user?.recharge_planId.minute}Min.</td>
                              <td>{user?.userid?.amount}Rs.</td>
                              <td>{user?.deductedAmt}Rs.</td>
                              <td>{user?.createdAt}</td>
                              <td>
                                <Link className="Tansdel">
                                  <i
                                    class="fa fa-trash-o"
                                    aria-hidden="true"
                                  ></i>
                                </Link>
                              </td>
                            </tr>

                            {/* <tr>
                                <th scope="row">2</th>
                                <td>Chat With Monish For 2 Minutes</td>
                                <td>doc</td>
                                <td>30.00</td>
                                <td>sept 05, 2022 11:32AM</td>
                                <td>
                                  <Link className="Tansdel">
                                    <i
                                      class="fa fa-trash-o"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>Chat With Monish For 2 Minutes</td>
                                <td>doc</td>
                                <td>30.00</td>
                                <td>sept 05, 2022 11:32AM</td>
                                <td>
                                  <Link className="Tansdel">
                                    <i
                                      class="fa fa-trash-o"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">4</th>
                                <td>Chat With Monish For 2 Minutes</td>
                                <td>doc</td>
                                <td>30.00</td>
                                <td>sept 05, 2022 11:32AM</td>
                                <td>
                                  <Link className="Tansdel">
                                    <i
                                      class="fa fa-trash-o"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">5</th>
                                <td>Chat With Monish For 2 Minutes</td>
                                <td>doc</td>
                                <td>30.00</td>
                                <td>sept 05, 2022 11:32AM</td>
                                <td>
                                  <Link className="Tansdel">
                                    <i
                                      class="fa fa-trash-o"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                </td>
                              </tr> */}
                          </tbody>
                        );
                      })
                      : null}
                  </Table>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}

export default UserChatHistoryList;
