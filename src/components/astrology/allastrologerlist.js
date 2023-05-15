import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import {
  Container,
  Row,
  Col,
  ModalHeader,
  ModalBody,
  Modal,
  FormGroup,
} from "reactstrap";
// import textbottom from '../../assets/img/textbottom.png'
// import Tab from "react-bootstrap/Tab";
// import Nav from "react-bootstrap/Nav";
import axios from "axios";
import {
  NavItem,
  TabContent,
  Nav,
  NavLink,
  TabPane,
  Card,
  CardTitle,
  CardText,
} from "reactstrap";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import { Label, Input, Button } from "reactstrap";
import "../../assets/scss/astroteam.scss";
import LayoutOne from "../../layouts/LayoutOne";
import axiosConfig from "../../axiosConfig";
// import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";
import LoginRegister from "../../pages/other/LoginRegister";

class AllAstrologerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // data: {},
      fullname: "",
      email: "",
      mobile: "",
      dob: "",
      gender: "",
      city: "",
      userimg: "",
      selectedName: "",
      selectedFile: null,
      otp: "",
      otpMsg: "",
      callingmode: false,
      indexnow: null,
      astrologerList: [],
      From: "",
      To: "",
      astroid: "",
      userid: "",
      modal: false,
      modalone: false,
      price_high_to_low: [],
      activeTab: 1,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleone = this.toggleone.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  toggleone() {
    this.setState({
      modalone: !this.state.modalone,
    });
  }
  togglefilter = (tab) => {
    if (this.state.activeTab !== tab) this.setState({ activeTab: tab });
  };
  changeHandler = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.data);
    const data = new FormData();
    data.append("fullname", this.state.fullname);
    data.append("email", this.state.email);
    data.append("mobile", this.state.mobile);
    data.append("gender", this.state.gender);
    data.append("city", this.state.city);
    data.append("dob", this.state.dob);
    if (this.state.selectedFile !== null) {
      data.append("userimg", this.state.selectedFile, this.state.selectedName);
    }
    for (var value of data.values()) {
      console.log(value);
    }
    for (var key of data.keys()) {
      console.log(key);
    }
    // this.setState({ otp: false });
    axios
      .post(`http://65.2.175.154:8000/user/usersignup`, data)
      .then((response) => {
        console.log(response.data.msg);
        localStorage.setItem("auth-token", response.data.token);
        this.setState({
          // token: response.data.token,
          otpMsg: response.data.otp,
        });
        swal("Success!", " Register Successful Done!", "success");
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error.response);
        swal("Error!", "Something went wrong", "error");
      });
  };
  loginHandler = (e) => {
    e.preventDefault();
    let obj = {
      mobile: parseInt(this.state.mobile),
    };
    axios
      .post(`http://65.2.175.154:8000/user/userlogin`, obj)
      .then((response) => {
        console.log("@@@####", response.data);
        this.setState({ otpMsg: response.data.msg });
        if (response.data.msg === "otp Send Successfully") {
          swal("otp Send Successfully");
          // this.props.history.push('/')
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
        swal("Error!", "User doesn't Exist", "error");
      });
  };

  //Image Submit Handler
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  otpHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(`http://65.2.175.154:8000/user/userVryfyotp`, {
        mobile: parseInt(this.state.mobile),
        otp: parseInt(this.state.otp),
      })
      .then((response) => {
        console.log("@@@####", response.data);
        // let id = response.data.user;
        if (response.data.status === true) {
          this.setState({ otpMsg: response.data.msg });
          localStorage.setItem(
            "userData",
            JSON.stringify(response?.data?.data)
          );
          localStorage.setItem("token", JSON.stringify(response?.data?.token));
          localStorage.setItem(
            "user_id",
            JSON.stringify(response?.data?.data?._id)
          );
          localStorage.setItem(
            "user_mobile_no",
            JSON.stringify(response?.data?.data?.mobile)
          );
          if (response.data.msg === "otp verified") {
            swal("otp verified");
            // window.location.replace('/')
            this.props.history.push("/");
          }
        }
      })
      .catch((error) => {
        console.log(error);
        //this.setState({ errormsg: error });
      });
  };

  handlechange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount = () => {
    axiosConfig
      .get("/admin/allAstro")
      .then((response) => {
        console.log(response.data);
        if (response.data.status === true) {
          this.setState({ astrologerList: response.data.data });
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });

    axiosConfig
      .get("/user/price_high_to_low")
      .then((response) => {
        console.log(response.data);
        if (response.data.status === true) {
          this.setState({
            price_high_to_low: response.data.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });
  };

  submitHandler = (e, astroid, mobile, data, index) => {
    // this.setState({ modalone: true });
    let mobileNo = localStorage.getItem("user_mobile_no");
    let userId = JSON.parse(localStorage.getItem("user_id"));
    localStorage.setItem("astroId", astroid);
    console.log(e);
    console.log("astroid", astroid);
    console.log("mobile", mobile);
    console.log("data", data);
    console.log("index", index);
    console.log("mobileNo", mobileNo);
    console.log("userId", userId);
    localStorage.setItem("astroname", data?.fullname);
    this.setState({ indexnow: index });

    e.preventDefault();
    // let astrologerList = localStorage.getItem('astrologerList')

    let astroId = astroid;
    let obj = {
      userid: userId,
      astroid: astroId,
      // astrologerList: astrologerList,
      From: mobile, //parseInt(this.state.number)
      To: mobileNo, //parseInt(this.state.number)
    };
    if (userId !== "" && userId !== null) {
      const data = {
        userid: userId,
        astroid: astroId,
      };
      this.setState({ callingmode: true });

      axiosConfig
        .post(`/user/addCallWallet`, data)
        .then((response) => {
          if (response.data.status === true) {
            axiosConfig
              .post(`/user/make_call`, obj)
              .then((response) => {
                console.log("Calling", response.data);
                // this.setState({ callingmode: false });
              })
              .catch((error) => {
                console.log(error?.response?.data?.error);
                if (error?.response?.data?.error) {
                  swal("Try again after some Time ", "Internal server");
                  this.setState({ callingmode: false });
                }
              });
          }
        })
        .catch((error) => {
          console.log(error);
          // swal('Error!', 'Invalid!', 'error')
        });
    } else {
      swal("Need to Login first");
      // this.setState({ modal: true });
    }
  };

  filterMethod = (name) => {
    axiosConfig
      .get(`/user/` + name)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === true) {
          this.setState({
            astrologerList: response.data.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });
  };

  render() {
    const { astrologerList } = this.state;

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
                    <h1>Talk To Astrologer</h1>
                    <p></p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section id="team" class="pb-5 ">
          <Container>
            <Row>
              <Col md="3">
                <div className="bx-list fbg">
                  <h3 className="mb-3">
                    <b>Sort By:</b>
                  </h3>
                  <hr />
                  <form>
                    <ul>
                      {/* <li>
                        <span>
                          <Form.Check type="radio" aria-label="radio 1" />
                        </span>
                        Popularity
                      </li> */}
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 1"
                            name="id"
                            onChange={() =>
                              this.filterMethod("exp_high_to_low")
                            }
                          />
                        </span>
                        Experience : High to Low
                      </li>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 2"
                            name="id"
                            onChange={() =>
                              this.filterMethod("exp_low_to_high")
                            }
                          />
                        </span>
                        Experience : Low to High
                      </li>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 3"
                            name="id"
                            onChange={() =>
                              this.filterMethod("price_high_to_low")
                            }
                          />
                        </span>
                        Price : High to Low
                      </li>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 4"
                            name="id"
                            onChange={() =>
                              this.filterMethod("price_low_to_high")
                            }
                          />
                        </span>
                        Price : Low to High
                      </li>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 5"
                            name="id"
                            onChange={() =>
                              this.filterMethod("rating_high_to_low")
                            }
                          />
                        </span>
                        Rating : High to Low
                      </li>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 6"
                            name="id"
                            onChange={() =>
                              this.filterMethod("rating_low_to_high")
                            }
                          />
                        </span>
                        Rating : Low to High
                      </li>
                      {/* filter */}
                      <hr />
                      <h3 className="mb-3 mt-1">
                        <Button className="filtericon" onClick={this.toggle}>
                          Filter <i class="fa fa-filter" aria-hidden="true"></i>
                        </Button>
                      </h3>

                      {/* <li>
                        <span>
                          <Form.Check type="radio" aria-label="radio 7" name="exp_low_to_high" onChange={() => this.filterMethod("exp_low_to_high")}/>
                        </span>
                        Rating : High to Low
                      </li> */}
                    </ul>
                  </form>
                </div>
              </Col>
              <Col md="9">
                <Row className="mt-2">
                  {astrologerList.length
                    ? astrologerList.map((astrologer, index) => {
                        return (
                          <Col md="4" key={index}>
                            <div className="image-flip">
                              <div className="mainflip flip-0">
                                <div className="frontside">
                                  <div className="card">
                                    <div className="card-body text-center">
                                      <p>
                                        <Link
                                          to={
                                            "/astrologerdetail/" +
                                            astrologer._id
                                          }
                                        >
                                          <img src={astrologer?.img} alt="" />
                                        </Link>
                                      </p>
                                      <h4 className="card-title">
                                        {astrologer?.fullname}
                                      </h4>
                                      <ul className="mb-3">
                                        <li>
                                          Specility:{" "}
                                          <span>{astrologer?.all_skills}</span>
                                        </li>
                                        <li>
                                          Language:{" "}
                                          <span>{astrologer?.language}</span>
                                        </li>
                                        <li>
                                          Experience:{" "}
                                          <span>
                                            {astrologer?.exp_in_years}
                                          </span>
                                        </li>
                                        <li>
                                          Call Rate:{" "}
                                          <span>
                                            {astrologer?.callCharge}/
                                            {astrologer?.conrubute_hrs}
                                          </span>
                                        </li>
                                      </ul>
                                      {/* <Link
                                      className="btn btn-primary btn-sm st-d"
                                      to={'/askquestion/' + astrologer?._id}
                                    >
                                      Ask Question
                                    </Link> */}
                                      {/* <Link className="btn btn-primary btn-sm st-d">
                                      {astrologer?.status}
                                    </Link> */}
                                      {astrologer.waiting_queue === 0 ? (
                                        <>
                                          {/* <Link
                                            className="btn btn-primary btn-sm sc"
                                            to={
                                              "/astrologerdetail/" +
                                              astrologer._id
                                            }
                                          > */}
                                          {/* <span
                                        className="sr-btn"
                                        onClick={this.onCallSubmit}
                                      >
                                        <i class="fa fa-phone">
                                          {astrologer?.userRequestForm}
                                        </i>{' '}
                                        Call
                                      </span> */}
                                          {/* {localStorage.getItem('auth-token') ? ( */}

                                          {/* <span
                                              className="sr-btn"
                                              onClick={(e) =>
                                                this.submitHandler(
                                                  e,
                                                  astrologer?._id,
                                                  astrologer?.mobile
                                                )
                                              }
                                            >
                                              <i class="fa fa-phone"> Call</i>
                                            </span> */}

                                          <span
                                            className="sr-btn"
                                            onClick={(e) =>
                                              this.submitHandler(
                                                e,
                                                astrologer?._id,
                                                astrologer?.mobile,
                                                astrologer,
                                                index
                                              )
                                            }
                                          >
                                            {this.state.callingmode === true &&
                                            this.state.indexnow === index ? (
                                              <>
                                                <span>
                                                  <div className="btn btn-primary btn-sm sc">
                                                    <i class="fa fa-phone">
                                                      -Calling...
                                                    </i>
                                                  </div>
                                                </span>
                                              </>
                                            ) : (
                                              <>
                                                <span>
                                                  <div className="btn btn-success btn-sm sc">
                                                    <i class="fa fa-phone">
                                                      -Call
                                                    </i>
                                                  </div>
                                                </span>
                                              </>
                                            )}
                                          </span>

                                          {/* ) : (
                                        <span
                                          className="sr-btn"
                                          onClick={(e) =>
                                            (window.location.href =
                                              '/#/login-register')
                                          }
                                        >
                                          <i class="fa fa-phone"></i> Call
                                        </span>
                                      )} */}
                                          {/* <small>
                                            / 20{' '}
                                            <i class="fa fa-inr" aria-hidden="true">
                                              {astrologer?.conrubute_hrs}
                                            </i>{' '}
                                            per Hour
                                          </small> */}
                                          {/* </Link> */}
                                        </>
                                      ) : (
                                        <>
                                          <button className="btn btn-denger wr">
                                            <i class="fa fa-phone">Wait</i>
                                          </button>
                                        </>
                                      )}

                                      <br />
                                      <span value={this.state.waiting_queue}>
                                        {" "}
                                        Wait ~ {astrologer.waiting_queue}Min
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        );
                      })
                    : null}
                </Row>
              </Col>
            </Row>
            {/* <div className="heading mb-30">
                <h2>Best Astrologers </h2>
                <img src={textbottom} alt=""/>
            </div>         */}
          </Container>

          <div>
            {/* modal  */}
            <Modal
              style={{ maxWidth: "900px" }}
              size="lg"
              isOpen={this.state.modal}
              toggle={this.toggle}
              // className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>Filters</ModalHeader>
              <ModalBody>
                <div className="">
                  <div className="container">
                    <div>
                      <Nav tabs vertical>
                        <Row>
                          <Row>
                            <Col
                              className="tabcontentheadings"
                              lg="3"
                              md="3"
                              sm="3"
                            >
                              <Row>
                                <NavItem className="mb-1 mt-1">
                                  <a
                                    className={classnames({
                                      active: this.state.activeTab === "1",
                                    })}
                                    onClick={() => {
                                      this.togglefilter("1");
                                    }}
                                  >
                                    <Button
                                      style={{
                                        background: `${
                                          this.state.activeTab === "1"
                                            ? "#e3ac2e"
                                            : "none"
                                        }`,
                                      }}
                                      className="filtericon"
                                    >
                                      <span
                                        className="filtertext"
                                        style={{ color: "black" }}
                                      >
                                        {" "}
                                        Skills
                                      </span>
                                    </Button>
                                  </a>
                                </NavItem>
                              </Row>
                              <Row>
                                <NavItem className="mb-1 mt-1">
                                  <a
                                    className={classnames({
                                      active: this.state.activeTab === "2",
                                    })}
                                    onClick={() => {
                                      this.togglefilter("2");
                                    }}
                                  >
                                    <Button className="filtericon">
                                      <span
                                        className="filtertext"
                                        style={{ color: "black" }}
                                      >
                                        {" "}
                                        Specialisation
                                      </span>
                                    </Button>
                                  </a>
                                </NavItem>
                              </Row>
                              <Row>
                                <NavItem className="mb-1 mt-1">
                                  <a
                                    className={classnames({
                                      active: this.state.activeTab === "3",
                                    })}
                                    onClick={() => {
                                      this.togglefilter("3");
                                    }}
                                  >
                                    <Button className="filtericon">
                                      <span
                                        className="filtertext"
                                        style={{ color: "black" }}
                                      >
                                        {" "}
                                        Language
                                      </span>
                                    </Button>
                                  </a>
                                </NavItem>
                              </Row>
                              <Row>
                                <NavItem className="mb-1 mt-1">
                                  <a
                                    className={classnames({
                                      active: this.state.activeTab === "4",
                                    })}
                                    onClick={() => {
                                      this.togglefilter("4");
                                    }}
                                  >
                                    <Button className="filtericon">
                                      <span
                                        className="filtertext"
                                        style={{ color: "black" }}
                                      >
                                        {" "}
                                        Active/Non Active
                                      </span>
                                    </Button>
                                  </a>
                                </NavItem>
                              </Row>
                            </Col>
                            <Col className="tabcontentheadings">
                              <div className="tabcontentheading">
                                <TabContent activeTab={this.state.activeTab}>
                                  <TabPane className="tabidone" tabId="1">
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Face Reading</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Kp</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Life Coach</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Nadi</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Numerology</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Palmistry</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Prashana</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Psychic</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Tarot</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Vastu</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Vedic</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Vedic</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Vedic</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Vedic</Label>
                                    </FormGroup>
                                  </TabPane>
                                  <TabPane className="tabidone" tabId="2">
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Option 1</Label>
                                    </FormGroup>
                                  </TabPane>
                                  <TabPane className="tabidone" tabId="3">
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Bengali</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>English</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Gujarati</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Hindi</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Kannada</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Marathi</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Punjabi</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Tamil</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Telugu</Label>
                                    </FormGroup>
                                  </TabPane>
                                  <TabPane className="tabidone" tabId="4">
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Active</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                      <Input name="radio1" type="radio" />{" "}
                                      <Label check>Non-Active</Label>
                                    </FormGroup>
                                  </TabPane>
                                </TabContent>
                              </div>
                            </Col>
                          </Row>
                        </Row>
                      </Nav>
                    </div>
                  </div>
                </div>
              </ModalBody>
            </Modal>
            {/* <Modal
              style={{ maxWidth: "700px" }}
              size="lg"
              isOpen={this.state.modalone}
              toggle={this.toggleone}
              // className={(this.props.className)}
            >
              <ModalHeader toggle={this.toggleone}>Logindfsd</ModalHeader>
              <ModalBody>dsffsssfsd</ModalBody>
            </Modal> */}
          </div>
        </section>
      </LayoutOne>
    );
  }
}

export default AllAstrologerList;
