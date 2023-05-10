import { Container, Row, Col, Button, Input } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import React from "react";
import AgoraUIKit from "agora-react-uikit";
import { AgoraRTC, Client, getSessionStats } from "agora-rtc-sdk-ng";

// import {
//   AgoraVideoPlayer,
//   createClient,
//   createMicrophoneAndCameraTracks,
// } from "agora-rtc-react";
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import "../../../src/assets/scss/style.scss";
import AllMinRechargeVideo from "./AllMinRechargeVideo";
import AlertPage from "./AlertPage";
import { LiveStreaming } from "./zegocloud/LiveStreaming";
import App from "./MyTimer";

// const config = { mode: "rtc", codec: "vp8" };
// const useClient = createClient(config);
// const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

class UserRequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoCallList: "",
    };
    this.state = {
      stream: null,
      changeView: false,
      userid: "",
      astroid: "",
      mobile: "",
      userData: {},
      firstname: "",
      p_firstname: "",
      lastname: "",
      p_lastname: "",
      dob: "",
      p_dob: "",
      date_of_time: "",
      p_date_of_time: "",
      birthPlace: "",
      p_birthPlace: "",
      gender: "",
      marital_status: "",
      occupation: "",
      topic_of_cnsrn: "",
      entertopic_of_cnsrn: "",
      data: [],
      setVideoCall: false,
      // videoCallData: "",
      toggle: true,
    };
  }

  componentDidMount() {
    const userid = JSON.parse(localStorage.getItem("user_id"));
    const callingastro_id = localStorage.getItem("videoCallAstro_id");

    // const checkbal = {
    //   userid: userid,
    //   astroid: callingastro_id,
    // };
    // axiosConfig
    //   .post(`/user/addVideoCallWallet`, checkbal)
    //   .then((res) => {
    //     console.log("checkbal", res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    const payload = {
      userAccount: userid,
      astroAccount: callingastro_id,
    };
    axiosConfig
      .post(`/user/userVideoCall`, payload)
      .then((res) => {
        console.log("videocallapio", res);
        // this.setState({
        //   videoCallList: res?.data?.channelName,
        // });
        // this.setState({ videoCallData: res?.data?.channelName });
        localStorage.setItem("usertoken_for_videocall", res?.data?.userAccount);
        localStorage.setItem("userchannel_name", res?.data?.channelName);
      })
      .catch((err) => {
        console.log(err);
      });

    axiosConfig
      .get(`/user/viewoneuser/${userid}`)
      .then((response) => {
        this.setState({ mobile: response.data.data.mobile });
        this.setState({ userData: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();

    let userId = JSON.parse(localStorage.getItem("user_id"));
    let astroId = localStorage.getItem("astro_id");
    let obj = {
      userid: userId,
      astroid: astroId,
      mobile: parseInt(this.state.mobile),
      firstname: this.state.firstname,
      p_firstname: this.state.p_firstname,
      lastname: this.state.lastname,
      p_lastname: this.state.p_lastname,
      dob: this.state.dob,
      p_dob: this.state.p_dob,
      birthPlace: this.state.birthPlace,
      p_birthPlace: this.state.p_birthPlace,
      date_of_time: this.state.date_of_time,
      p_date_of_time: this.state.p_date_of_time,
      gender: this.state.gender,
      marital_status: this.state.marital_status,
      occupation: this.state.occupation,
      topic_of_cnsrn: this.state.topic_of_cnsrn,
      entertopic_of_cnsrn: this.state.entertopic_of_cnsrn,
    };
    axiosConfig
      .post(`/user/add_chat_intake`, obj)
      .then((response) => {
        console.log("videointakeform", response.data.data);
        swal("Success!", "Submitted SuccessFully!", "Success");
        this.setState({ changeView: true });
        this.setState({ setVideoCall: true });
        // this.handleagoratoken();
      })
      .catch((error) => {
        swal("Error!", "error");
        console.log(error);
      });
  };

  // handleagoratoken = () => {
  //   console.log("object");
  // };

  rtcProps = {
    // Pass your App ID here.
    appId: "7d1f07c76f9d46be86bc46a791884023",
    // Set the channel name.

    // channel: "anujesh",

    channel: localStorage.getItem("userchannel_name"),
    // channel: `${this.state.videoCallList}`,
    // Pass your temp token here.
    token: localStorage.getItem("usertoken_for_videocall"),

    // Set the user ID.
    uid: 0,
    // Set the user role
    // role: "",
  };

  callbacks = {
    // Duration: (e) => {
    //   console.log(e);
    //   Client.getSessionStats();
    // },
    EndCall: () => this.setState({ setVideoCall: false }),
    // ["user-joined"]: (e) => {
    //   console.log("anujesh userjoined", e);
    // },
    // ["user-left"]: (e) => {
    //   console.log("anujesh left", e);
    // },
    // ["token-privilege-will-expire"]: (e) => {
    //   console.log("anujesh expire", e);
    // },
  };

  render() {
    // console.log("this.state.videoCallData", this.state.videoCallData);
    return (
      <LayoutOne headerTop="visible">
        {/* {this.state.toggle === true ? ( */}
        <>
          {this.state.changeView === true ? (
            <>
              <section>
                {this.state.setVideoCall === true ? (
                  <>
                    <div
                      style={{
                        display: "flex",
                        width: "100vw",
                        height: "80vh",
                      }}
                    >
                      <AgoraUIKit
                        rtcProps={this.rtcProps}
                        callbacks={this.callbacks}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    {/* <div className="d-flex justify-content-center">
                      <Button
                        onClick={() => this.props.history.push("/")}
                        // onClick={() => this.setState({ changeView: false })}
                        color="primary"
                      >
                        Home
                      </Button>
                    </div> */}
                    <AlertPage />
                  </>
                )}
              </section>
            </>
          ) : (
            <>
              <section className="pt-0 pb-0">
                <div
                  className=""
                  style={{
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
                          <h1>Video InTake Form</h1>
                          {/* <App /> */}
                          <div></div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </section>
              <section className="">
                <Container>
                  <Row>
                    <Col lg="12">
                      <div className="wal-amt">
                        <h3>Video InTake Form </h3>
                        <hr></hr>
                        <form onSubmit={this.submitHandler}>
                          <Row>
                            <Col md="4">
                              <div class="form-group mtb-10">
                                <label>Mobile Number*</label>
                                <input
                                  type="number"
                                  name="mobile"
                                  value={this.state.mobile}
                                  onChange={this.changeHandler}
                                  required
                                  placeholder="Enter Your Number"
                                />
                              </div>
                            </Col>
                            <Col md="4">
                              <div class="form-group mtb-10">
                                <label>First Name*</label>
                                <input
                                  type="text"
                                  name="firstname"
                                  required
                                  placeholder="Enter Your FirstName"
                                  value={this.state.fullname}
                                  onChange={this.changeHandler}
                                />
                              </div>
                            </Col>
                            <Col md="4">
                              <div class="form-group mtb-10">
                                <label>Patner First Name*</label>
                                <input
                                  type="text"
                                  name="p_firstname"
                                  placeholder="Enter Your Patner firstname"
                                  value={this.state.p_firstname}
                                  onChange={this.changeHandler}
                                />
                              </div>
                            </Col>
                            <Col md="4">
                              <div class="form-group mtb-10">
                                <label> Last Name*</label>
                                <input
                                  required
                                  type="text"
                                  name="lastname"
                                  placeholder="Enter Your  Lastname"
                                  value={this.state.lastname}
                                  onChange={this.changeHandler}
                                />
                              </div>
                            </Col>
                            <Col md="4">
                              <div class="form-group mtb-10">
                                <label>Patner Last Name*</label>
                                <input
                                  type="text"
                                  name="p_lastname"
                                  placeholder="Enter Your Patner Lastname"
                                  value={this.state.p_lastname}
                                  onChange={this.changeHandler}
                                />
                              </div>
                            </Col>
                            <Col md="4">
                              <div class="form-group mtb-10">
                                <label>Date of Birth*</label>
                                <input
                                  type="date"
                                  name="dob"
                                  value={this.state.dob}
                                  onChange={this.changeHandler}
                                  required
                                  placeholder="Enter Your Number"
                                />
                              </div>
                            </Col>
                            <Col md="4">
                              <div class="form-group mtb-10">
                                <label> patner Date of Birth*</label>
                                <input
                                  type="date"
                                  name="p_dob"
                                  value={this.state.p_dob}
                                  onChange={this.changeHandler}
                                  placeholder="Enter Your Number"
                                />
                              </div>
                            </Col>

                            <Col md="4">
                              <div class="form-group mtb-10">
                                <label>Date of Time*</label>
                                <input
                                  type="time"
                                  name="date_of_time"
                                  value={this.state.date_of_time}
                                  onChange={this.changeHandler}
                                  required
                                  placeholder="Enter Your Number"
                                />
                              </div>
                            </Col>
                            <Col md="4">
                              <div class="form-group mtb-10">
                                <label> patner Date of Time*</label>
                                <input
                                  type="time"
                                  name="p_date_of_time"
                                  value={this.state.p_date_of_time}
                                  onChange={this.changeHandler}
                                  // required
                                  placeholder="Enter Your Number"
                                />
                              </div>
                            </Col>

                            <Col md="4">
                              <div class="form-group mtb-10">
                                <label>Birth Place*</label>
                                <input
                                  type="text"
                                  name="birthPlace"
                                  value={this.state.birthPlace}
                                  onChange={this.changeHandler}
                                  required
                                  placeholder="Enter Your  Birth Place"
                                />
                              </div>
                            </Col>
                            <Col md="4">
                              <div class="form-group mtb-10">
                                <label> patner Birth Place</label>
                                <input
                                  type="text"
                                  name="p_birthPlace"
                                  value={this.state.p_birthPlace}
                                  onChange={this.changeHandler}
                                  // required
                                  placeholder="Enter Your  Birth Place"
                                />
                              </div>
                            </Col>
                            <Col lg="6" md="6" className="mb-2">
                              <label>Gender*</label>
                              <Input
                                id="exampleSelect"
                                name="gender"
                                type="select"
                                value={this.state.data.gender}
                                onChange={this.changeHandler}
                              >
                                <option>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                              </Input>
                            </Col>
                            {/* 
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Gender*</label>
                          <Input
                            type="select"
                            value={this.state.data.gender}
                            onChange={this.changeHandler1}>
                          </Input>
                        </div>
                      </Col> */}
                            <Col md="4">
                              <div class="form-group mtb-10">
                                <label>Marital Status*</label>
                                <Input
                                  type="select"
                                  name="marital_status"
                                  value={this.state.marital_status}
                                  onChange={this.changeHandler}
                                >
                                  <option>Select Marital Status</option>
                                  <option>Single</option>
                                  <option>Married</option>
                                  <option>Divorced</option>
                                  <option>Separated</option>
                                  <option>Widowed</option>
                                </Input>
                              </div>
                            </Col>
                            <Col md="4">
                              <div class="form-group mtb-10">
                                <label>Occupation*</label>
                                <Input
                                  type="select"
                                  name="occupation"
                                  value={this.state.data.occupation}
                                  onChange={this.changeHandler}
                                >
                                  <option>Select Employed in</option>
                                  <option>Private Sector</option>
                                  <option>Govt Sector</option>
                                  <option>Business/Self Employed</option>
                                  <option>Civil Services</option>
                                  <option>Defence</option>
                                  <option>Not Working</option>
                                  <option>Student</option>
                                </Input>
                              </div>
                            </Col>
                            <Col md="4">
                              <div class="form-group mtb-10">
                                <label>Topic of concern*</label>
                                <Input
                                  type="select"
                                  name="topic_of_cnsrn"
                                  value={this.state.data.topic_of_cnsrn}
                                  onChange={this.changeHandler}
                                >
                                  <option>Select Topic</option>
                                  <option>Career and Business</option>
                                  <option>Marriage</option>
                                  <option>Love and Relationship</option>
                                  <option>Wealth and Property</option>
                                  <option>Education</option>
                                  <option>Legal Matters</option>
                                  <option>Child Name Consultation</option>
                                  <option>Business Name Consultation</option>
                                  <option>Gem Stone Consultation</option>
                                  <option>
                                    Commodity trading consultation
                                  </option>
                                  <option>Match making</option>
                                  <option>Birth Time Rectification</option>
                                  <option>Name Correction Consultation</option>
                                  <option>Travel Abroad Consulation</option>
                                  <option>Remedy Consultation</option>
                                  <option>Health Consultation</option>
                                  <option>Others</option>
                                </Input>
                              </div>
                            </Col>
                            <Col md="4">
                              <div class="form-group mtb-10">
                                <label>Enter topic of concern:</label>
                                <input
                                  type="text"
                                  name="entertopic_of_cnsrn"
                                  required
                                  placeholder="Enter Your Fullname"
                                  value={this.state.entertopic_of_cnsrn}
                                  onChange={this.changeHandler}
                                />
                              </div>
                            </Col>
                            <Col md="12" className="mt-3">
                              <Button className="btn btn-warning">
                                Start Video with{" "}
                                {localStorage.getItem("astroname")}
                              </Button>
                            </Col>
                          </Row>
                        </form>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
            </>
          )}
        </>

        {/* ) : (
          <>
            <AllMinRechargeVideo />
          </>
        )} */}
        {/* <div style={{ display: "flex", width: "100vw", height: "90vh" }}>
          <AgoraUIKit rtcProps={this.rtcProps} callbacks={this.callbacks} />
        </div> */}
        {/* <div style={{ display: "flex", width: "100vw", height: "90vh" }}>
          <LiveStreaming />
        </div> */}
      </LayoutOne>
    );
  }
}
export default UserRequestForm;
