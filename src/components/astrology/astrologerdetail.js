import React from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  // Input,
  // InputGroup,
  // Form,
  Button,
} from "reactstrap";
// import women from "../../assets/img/women.jpg";
import LayoutOne from "../../layouts/LayoutOne";
import Tab from "react-bootstrap/Tab";
import Rating from "@mui/material/Rating";
import LinearProgress from "@mui/material/LinearProgress";
import Nav from "react-bootstrap/Nav";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
// import pagetitle from "../../assets/img/pagetitle.jpg";
import axiosConfig from "../../axiosConfig";
import PrettyRating from "pretty-rating-react";
import {
  faHeart,
  faStar,
  faHeartBroken,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as farHeart,
  faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";
// import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
// import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
// import axios from "axios";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import AstroProfileVideo from "./AstroProfileVideo";
import swal from "sweetalert";

const colors = {
  star: ["#d9ad26", "#d9ad26", "#434b4d"],
  // heart: ['#9b111e', '#a83f39'],
};
const icons = {
  star: {
    complete: faStar,
    half: faStarHalfAlt,
    empty: farStar,
  },
};

// const colors = {
//   star: ["#d9ad26", "#d9ad26", "#434b4d"],
// };
class AstrologerDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allminrechargeList: [],
      data: {},
      astroData: {},
      fullname: "",
      all_skills: "",
      language: "",
      long_bio: "",
      Exp: "",
      sunday: "",
      monday: "",
      friday: "",
      thursday: "",
      tuesday: "",
      wednesday: "",
      saturday: "",
      To: "",
      callCharge: "",
      Form: "",
      astrid: "",
      userid: "",
      astroMobile: "",
      Gallary: [],
      astroId: "",
      astro: "",
      avg_rating: [false],
      GtRating: [],
    };

    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  handleVideocall = () => {
    console.log(this.state.fullname);
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;
    localStorage.setItem("astroId", id);
    axiosConfig
      .get(`/user/allRevieAstro/${id}`)
      .then((res) => {
        console.log(res.data.data);
        this.setState({ GtRating: res.data.data });
      })
      .catch((err) => console.log(err));
    localStorage.setItem("videoCallAstro_id", id);
    axiosConfig
      .get("/user/all_min_recharge")
      .then((response) => {
        console.log(response.data);
        if (response.data.status === true) {
          this.setState({ allminrechargeList: response.data.data });
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });

    axiosConfig
      .get(`/admin/getoneAstro/${id}`)
      .then((response) => {
        console.log("ddsdds", response.data?.data);
        localStorage.setItem("astroname", response?.data?.data?.fullname);
        localStorage.setItem("channelName", response?.data?.data?.channelName);
        this.setState({ astroData: response.data.data });
        this.setState({
          fullname: response.data.data.fullname,
          all_skills: response.data.data.all_skills,
          language: response.data.data.language,
          img: response.data.data.img[0],
          avg_rating: response.data.data.avg_rating,
          Exp: response.data.data.Exp,
          callCharge: response.data.data.callCharge,
          long_bio: response.data.data.long_bio,
          msg: response.data.data.msg,
          astroMobile: response?.data?.data?.mobile,
          status: response?.data?.data?.status,
          exp_in_years: response.data.data.exp_in_years,
          astroId: response?.data?.data?._id,
          sunday: response.data.data.sunday,
          monday: response.data.data.monday,
          friday: response.data.data.friday,
          tuesday: response.data.data.tuesday,
          thursday: response.data.data.thursday,
          saturday: response.data.data.saturday,
          fullname: response.data.data.fullname,
          language: response.data.data.language,
          wednesday: response.data.data.wednesday,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // handleIntakeform = () => {
  //   const payload = {
  //     userid: "63a1baa3ae6e54f1e2a002cc",
  //     astroid: "6352904e3755959407f948a6",
  //     gender: "Female",
  //     mobile: "5767547323",
  //     firstname: "Seeta",
  //     p_firstname: "Ram",
  //     lastname: "ji",
  //     p_lastname: "ji",
  //     dob: "10/05/2023",
  //     p_dob: "10/05/2023",
  //     date_of_time: "12",
  //     p_date_of_time: "12",
  //     birthPlace: "Ayodhya",
  //     p_birthPlace: "Ayodhya",
  //     marital_status: "Unmarried",
  //     occupation: "Student",
  //     topic_of_cnsrn: "Career and Business",
  //     entertopic_of_cnsrn: "dgrdg hjg",
  //     file: "",
  //   };
  //   axiosConfig
  //     .post(`/user/add_chat_intake`, payload)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  handleStartChat = () => {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    // const { id } = this.props.match.params;
    const id = localStorage.getItem("astroId");
    // latest code
    if (userId !== "" && userId !== null) {
      const data = {
        userid: userId,
        astroid: id,
      };
      if (this.state.astroData.waiting_queue === 0) {
        axiosConfig
          .post(`/user/addCallWallet`, data)
          .then((response) => {
            console.log("@@@chat mode", response.data);

            if (response.data?.msg === "success") {
              this.props.history.push("/UserRequestForm");
            } else
              swal(
                "Recharge Now",
                "You Donot have Enough balance to Make This Call",
                {
                  buttons: {
                    cancel: "Recharge Now",
                    catch: { text: "Cancel ", value: "catch" },
                  },
                }
              ).then((value) => {
                switch (value) {
                  case "catch":
                    swal("Sure Want to cancel it");
                    break;
                  default:
                    this.props.history.push("/walletmoney");
                }
              });
          })
          .catch((error) => {
            console.log(error);
            // swal('Error!', 'Invalid!', 'error')
          });
      } else {
        swal(
          `Astrologer is Busy for ${this.state.astroData.waiting_queue} Min`,
          "Do You Want to Be in queue ",

          {
            buttons: {
              cancel: "Be in queue",
              catch: { text: "Cancel ", value: "catch" },
            },
          }
        ).then((value) => {
          switch (value) {
            case "catch":
              swal("Sure Want to cancel it");
              break;
            default:
              // api for queue
              this.props.history.push("/walletmoney");
          }
        });
      }
    } else {
      swal("Need to Login first");
      // this.setState({ modal: true });
    }

    // previous code
    // if (userId !== "" && userId !== null) {
    //   const data = {
    //     userid: userId,
    //     astroid: id,
    //   };
    //   axiosConfig
    //     .post(`/user/addCallWallet`, data)
    //     .then((response) => {
    //       console.log("@@@callingmode", response.data);
    //       if (response.data?.msg === "success") {
    //         this.props.history.push("/UserRequestForm");
    //       } else
    //         swal(
    //           "Recharge Now",
    //           "You Donot have Enough balance to Make This Call",
    //           {
    //             buttons: {
    //               cancel: "Recharge Now",
    //               catch: { text: "Cancel ", value: "catch" },
    //             },
    //           }
    //         ).then((value) => {
    //           switch (value) {
    //             case "catch":
    //               swal("Sure Want to cancel it");
    //               break;
    //             default:
    //               this.props.history.push("/walletmoney");
    //           }
    //         });
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       // swal('Error!', 'Invalid!', 'error')
    //     });
    // } else {
    //   swal("Need to Login first");
    //   // this.setState({ modal: true });
    // }
  };

  handleStartCall = () => {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    let { id } = this.props.match.params;

    if (userId !== "" && userId !== null) {
      const data = {
        userid: userId,
        astroid: id,
      };
      if (this.state.astroData.waiting_queue === 0) {
        axiosConfig
          .post(`/user/addCallWallet`, data)
          .then((response) => {
            console.log("@@@callingmode", response.data);

            if (response.data?.msg === "success") {
              this.props.history.push("/UserRequestFormCall");
            } else
              swal(
                "Recharge Now",
                "You Donot have Enough balance to Make This Call",
                {
                  buttons: {
                    cancel: "Recharge Now",
                    catch: { text: "Cancel ", value: "catch" },
                  },
                }
              ).then((value) => {
                switch (value) {
                  case "catch":
                    swal("Sure Want to cancel it");
                    break;
                  default:
                    this.props.history.push("/walletmoney");
                }
              });
          })
          .catch((error) => {
            console.log(error);
            // swal('Error!', 'Invalid!', 'error')
          });
      } else {
        swal(
          `Astrologer is Busy for ${this.state.astroData.waiting_queue} Min`,
          "Do You Want to Be in queue ",

          {
            buttons: {
              cancel: "Be in queue",
              catch: { text: "Cancel ", value: "catch" },
            },
          }
        ).then((value) => {
          switch (value) {
            case "catch":
              swal("Sure Want to cancel it");
              break;
            default:
              // api for queue
              this.props.history.push("/walletmoney");
          }
        });
      }
    } else {
      swal("Need to Login first");
      // this.setState({ modal: true });
    }
  };

  livestreaming = () => {
    //
    this.props.history.push({
      pathname: "/livestreaming",
      // pathname: "/YourliveStreamming",

      state: this.state.astroData,
    });
  };

  handleBalacecheck = () => {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    let { id } = this.props.match.params;
    console.log(userId, id);

    if (userId !== "" && userId !== null) {
      const data = {
        userid: userId,
        astroid: id,
      };
      if (this.state.astroData.waiting_queue === 0) {
        const userid = JSON.parse(localStorage.getItem("user_id"));
        const callingastro_id = localStorage.getItem("videoCallAstro_id");

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
            // this.setState({ userVideocalltoken: res?.data?.userAccount });
            localStorage.setItem(
              "usertoken_for_videocall",
              res?.data?.userAccount
            );
            localStorage.setItem("userchannel_name", res?.data?.channelName);
          })
          .catch((err) => {
            console.log(err);
          });

        axiosConfig
          .post(`/user/addCallWallet`, data)
          .then((response) => {
            console.log("@@@Video_calling_mode", response.data);

            if (response.data?.msg === "success") {
              this.props.history.push("/UserRequestFormVideoCall");
            } else
              swal(
                "Recharge Now",
                "You Donot have Enough balance to Make This Call",
                {
                  buttons: {
                    cancel: "Recharge Now",
                    catch: { text: "Cancel ", value: "catch" },
                  },
                }
              ).then((value) => {
                switch (value) {
                  case "catch":
                    swal("Sure Want to cancel it");
                    break;
                  default:
                    this.props.history.push("/walletmoney");
                }
              });
          })
          .catch((error) => {
            console.log(error);
            // swal('Error!', 'Invalid!', 'error')
          });
      } else {
        swal(
          `Astrologer is Busy for ${this.state.astroData.waiting_queue} Min`,
          "Do You Want to Be in queue ",

          {
            buttons: {
              cancel: "Be in queue",
              catch: { text: "Cancel ", value: "catch" },
            },
          }
        ).then((value) => {
          switch (value) {
            case "catch":
              swal("Sure Want to cancel it");
              break;
            default:
              // api for queue
              this.props.history.push("/walletmoney");
          }
        });
      }
    } else {
      swal("Need to Login first");
      // this.setState({ modal: true });
    }

    // if (userId !== "" && userId !== null) {
    //   const data = {
    //     userid: userId,
    //     astroid: id,
    //   };

    //   const checkbal = { userid: userId, astroid: id };
    //   axiosConfig
    //     .post(`/user/addVideoCallWallet`, checkbal)
    //     .then((res) => {
    //       console.log("checkbal_videocall", res?.data.msg === "success");
    //       if (res?.data.msg === "success") {
    //         this.props.history.push("/UserRequestFormVideoCall");
    //       } else {
    //         swal(
    //           "Recharge Now",
    //           "You Donot have Enough balance to Make this Call",
    //           {
    //             buttons: {
    //               cancel: "Recharge Now",
    //               catch: {
    //                 text: "Cancel ",
    //                 value: "catch",
    //               },
    //             },
    //           }
    //         ).then((value) => {
    //           switch (value) {
    //             case "catch":
    //               swal("Sure Want to cancel it");
    //               break;

    //             default:
    //               this.props.history.push("/walletmoney");
    //           }
    //         });
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // } else {
    //   swal("Need to Login first");
    //   // this.setState({ modal: true });
    // }
  };
  // submitHandler = (e, astroid, mobile) => {
  //   e.preventDefault();
  //   // let astrologerList = localStorage.getItem('astrologerList')
  //   // let astroid = localStorage.getItem('astro_id')
  //   let mobileNo = localStorage.getItem("user_mobile_no");
  //   let userId = JSON.parse(localStorage.getItem("user_id"));
  //   // let astroId = JSON.parse(localStorage.getItem('astroid'))
  //   let obj = {
  //     userid: userId,
  //     astroid: astroid,
  //     // astrologerList: astrologerList,
  //     From: mobile, //parseInt(this.state.number)
  //     To: mobileNo, //parseInt(this.state.number)
  //   };
  //   // axiosConfig
  //   //   .post(`/user/make_call`, obj)

  //   //   .then((response) => {
  //   //     console.log("rhsagdhgshgdjhgj", response.data.data);
  //   //     // console.log(response.data.STATUSMSG)
  //   //     // this.setState({ responseData: response.data })
  //   //     // swal('Successful!', 'Recharge Successful!', 'success')
  //   //     // this.props.history.push('/orderrecharge')
  //   //   })

  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //     // swal('Error!', 'Invalid!', 'error')
  //   //   });
  // };

  render() {
    // const { allminrechargeList } = this.state;

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
                    <h1>Astrologer Detail</h1>
                    <p></p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <div className="col-lg-12 col-md-12 mb-30">
          <div className="category-home">
            <section className="pt-0">
              <Container>
                <section className="dt-astro">
                  <Row>
                    <Row>
                      <div className="d-flex justify-content-end mr-2">
                        <Button className="btn-as st">Follow</Button>
                      </div>
                    </Row>
                    <Col md="3">
                      <div className="as-pic mt-30">
                        <img src={this.state?.img} alt="" className="pic-as" />
                      </div>
                    </Col>
                    <Col md="9">
                      {/* <Rating name="no-value" value={null} /> */}
                      <div className="as-content mt-60">
                        <h3>{this.state.fullname}</h3>

                        <div className="review-rating">
                          <PrettyRating
                            disabled
                            value={this.state.avg_rating}
                            icons={icons.star}
                            colors={colors.star}
                            // colors={["#d9ad26", "#d9ad26", "#434b4d"]}
                          />
                          {/* {this.state.avg_rating && this.state.avg_rating > 0 ? ( */}
                          {/* <div className="review-rating"> */}
                          {/* <Rating ratingValue={this.state.avg_rating} /> */}
                          {/* </div> */}
                          {/* // ) : (
                          //   ""
                          // )} */}
                          {/* {this.state.avg_rating}
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" /> */}
                        </div>

                        <ul>
                          <li>
                            Language:
                            <span>{this.state.language}</span>
                          </li>

                          <li>
                            Specility: <span> {this.state.all_skills}</span>
                          </li>
                          <li>
                            Experience:{" "}
                            <span>{this.state.exp_in_years}-Years</span>
                          </li>
                          <li>
                            Call Rate:{" "}
                            <span>{this.state.callCharge} Rs/Minute</span>
                          </li>
                          <li>
                            {this.state.status === "Online" ? (
                              <>
                                <span style={{ color: "green" }} className="">
                                  <b> {this.state.status}</b>
                                </span>{" "}
                              </>
                            ) : (
                              <>
                                <span style={{ color: "red" }} className="">
                                  <b> {this.state.status}</b>
                                </span>{" "}
                              </>
                            )}
                            {/* <span className="">{this.state.status}</span> */}
                          </li>
                        </ul>
                      </div>

                      <Row>
                        <Col md="3" className="mt-30">
                          {/* <Link to=""> */}
                          {/* <Link to="/AllMinRecharge"> */}
                          {/* <Link to="/UserRequestForm"> */}
                          <Button
                            className="btn-as st"
                            onClick={this.handleStartChat}
                          >
                            <i
                              className="fa fa-commenting"
                              aria-hidden="true"
                            ></i>{" "}
                            Start Chat
                            <small className="sm-text">
                              {/* <i class="fa fa-inr" aria-hidden="true"></i>{" "} */}
                              {/* {this.state.callCharge} */}
                            </small>
                          </Button>
                          {/* </Link> */}
                        </Col>
                        <Col md="3" className="mt-30">
                          <Button
                            className="btn-as st"
                            onClick={this.handleStartCall}
                          >
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            Start Call
                            <small className="sm-text"></small>
                          </Button>
                        </Col>
                        <Col
                          // onClick={() => this.handleVideocall}
                          md="3"
                          className="mt-30"
                        >
                          {/* <Link to="/VideoCall"> */}
                          {/* <Link to="/UserRequestFormVideoCall"> */}
                          <Button
                            className="btn-as st"
                            onClick={() => this.handleBalacecheck()}
                            //  onClick={this.toggle}
                          >
                            <i
                              class="fa fa-video-camera"
                              aria-hidden="true"
                            ></i>{" "}
                            Start Video
                            <small className="sm-text">
                              {/* <i class="fa fa-inr" aria-hidden="true"></i>{" "} */}
                              {/* {this.state.callCharge} */}
                            </small>
                          </Button>
                          {/* </Link> */}
                        </Col>
                        <Col md="3" className="mt-30">
                          {/* <Link to="/livestreaming"> */}
                          <Button
                            className="btn-as st"
                            onClick={this.livestreaming}
                          >
                            <i
                              class="fa fa-youtube-play"
                              aria-hidden="true"
                            ></i>
                            Start Live
                            <small className="sm-text">
                              {/* <i class="fa fa-inr" aria-hidden="true"></i>{" "} */}
                              {/* {this.state.callCharge} */}
                            </small>
                          </Button>
                          {/* </Link> */}
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <div className="mt-2 pt-1">
                    <AstroProfileVideo />
                  </div>
                </section>
                <section className="mt-50 mb-30">
                  <div
                    className="product-anotherinfo-wrapper mt-4"
                    style={{ border: "1px solid#ccc", padding: "20px 10px" }}
                  >
                    <h3>AboutUs</h3>
                    <p>
                      {this.state.long_bio}
                      {/* Sree Sanjib ji is KP astrologer from Kolkata,
                              India. He has 15 years of experience in KP
                              astrology and Vedic Astrology. You can consult him
                              in Hindi, English and Bengali Language. He has Won
                              Jyotish Gyan Ratna, Jyotish Gyan Bharti and
                              Jyotish Shiromani awards from Word Astrologers
                              Society. He is expert in Nadi Astrology, KP
                              astrology, Numerology, Palmistry and Vastu. You
                              can consult him for business related issues,
                              marriage, financial issues, property or legal
                              issues and much more. */}
                    </p>
                  </div>
                  {/* {/ about us close  /} */}
                  {/* {/ review section start /} */}
                  <div
                    className="product-anotherinfo-wrapper mt-5"
                    style={{ border: "1px solid#ccc", padding: "20px 10px" }}
                  >
                    {/* <h3>
                      RATINGS <i class="fa fa-star"></i>
                    </h3> */}
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="row">
                          <div className="col-md-4">
                            {/* <h1
                                    style={{
                                      fontSize: 96,
                                      marginTop: 39,
                                      marginRight: 15,
                                      marginBottom: 20,
                                      marginLeft: 0,
                                    }}
                                  ></h1> */}
                            <p></p>
                          </div>
                          {/* <div className="col-md-6">
                            <LinearProgress
                              className="m-1 mb-3 "
                              style={{ color: "#14958f" }}
                              variant="determinate"
                              value={70}
                            />
                            <LinearProgress
                              className="m-1 mb-3 "
                              style={{ color: "#ff" }}
                              variant="determinate"
                              value={30}
                            />
                            <LinearProgress
                              className="m-1 mb-3 "
                              style={{ color: "#14958f" }}
                              variant="determinate"
                              value={30}
                            />
                            <LinearProgress
                              className="m-1 mb-3 "
                              style={{ color: "#14958f" }}
                              variant="determinate"
                              value={30}
                            />
                            <LinearProgress
                              className="m-1 mb-3 "
                              style={{ color: "#14958f" }}
                              variant="determinate"
                              value={10}
                            />
                          </div> */}
                        </div>

                        <div className="review-wrapper">
                          {this.state.GtRating !== " " ? (
                            <>
                              {this.state.GtRating?.map((value) => (
                                <div key={value?._id} className="single-review">
                                  {" "}
                                  <div className="review-img">
                                    <img
                                      width="100px"
                                      height="80px"
                                      style={{ borderRadius: "8px" }}
                                      src={value?.userid?.userimg[0]}
                                      // src={
                                      //   process.env.PUBLIC_URL +
                                      //   "/assets/img/testimonial/1.jpg"
                                      // }
                                      alt=""
                                    />
                                  </div>
                                  <div className="review-content">
                                    <div className="review-top-wrap">
                                      <div className="review-left">
                                        <div className="review-name">
                                          <h4
                                            style={{
                                              textTransform: "capitalize",
                                              margin: 5,
                                            }}
                                          >
                                            {value?.userid?.fullname}
                                          </h4>
                                        </div>
                                        <div className="review-rating">
                                          <PrettyRating
                                            disabled
                                            value={value?.rating}
                                            icons={icons.star}
                                            colors={colors.star}
                                            // colors={["#d9ad26", "#d9ad26", "#434b4d"]}
                                          />
                                          {/* <Rating
                                    name="disabled"
                                    style={{ opacity: 1 }}
                                    disabled
                                  /> */}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="review-bottom">
                                      <p
                                        style={{
                                          display: "inline",
                                          textTransform: "capitalize",
                                        }}
                                      >
                                        {value?.comment}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </>
                          ) : null}
                        </div>
                      </div>
                      {/* {/ avai /} */}
                      <div className="col-md-6">
                        <div className="avai-box text-center">
                          <h3>Availability</h3>
                          <div className="tab-bxx p-1">
                            <Tab.Container defaultActiveKey="">
                              <Nav variant="pills" className="rt_tab">
                                <Nav.Item className="rt_tab">
                                  <Nav.Link
                                    eventKey="tab_one"
                                    style={{ padding: "3px 9px" }}
                                  >
                                    Monday
                                  </Nav.Link>
                                </Nav.Item>

                                <Nav.Item className="rt_tab">
                                  <Nav.Link
                                    eventKey="tab_two"
                                    style={{ padding: "3px 9px" }}
                                  >
                                    Tuesday
                                  </Nav.Link>
                                </Nav.Item>

                                <Nav.Item className="rt_tab">
                                  <Nav.Link
                                    eventKey="tab_three"
                                    style={{ padding: "3px 9px" }}
                                  >
                                    Wednesday
                                  </Nav.Link>
                                </Nav.Item>

                                <Nav.Item className="rt_tab">
                                  <Nav.Link
                                    eventKey="tab_four"
                                    style={{ padding: "3px 9px" }}
                                  >
                                    Thursday
                                  </Nav.Link>
                                </Nav.Item>

                                <Nav.Item className="rt_tab">
                                  <Nav.Link
                                    eventKey="tab_five"
                                    style={{ padding: "3px 9px" }}
                                  >
                                    Friday
                                  </Nav.Link>
                                </Nav.Item>

                                <Nav.Item className="rt_tab">
                                  <Nav.Link
                                    eventKey="tab_six"
                                    style={{ padding: "3px 9px" }}
                                  >
                                    Saturday
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="rt_tab">
                                  <Nav.Link
                                    eventKey="tab_sev"
                                    style={{ padding: "3px 9px" }}
                                  >
                                    Sunday
                                  </Nav.Link>
                                </Nav.Item>
                              </Nav>

                              <Tab.Content className="description-review-bottom">
                                <Tab.Pane eventKey="tab_one">
                                  {this.state.monday?.length > 0 ? (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          {this.state.monday?.map((value) => (
                                            <span key={value?._id}>
                                              {value}
                                              {"  "}
                                            </span>
                                          ))}
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          <span>Not available </span>
                                        </p>
                                      </div>
                                    </>
                                  )}
                                </Tab.Pane>

                                <Tab.Pane eventKey="tab_two">
                                  {this.state.tuesday?.length > 0 ? (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          {this.state.tuesday?.map((value) => (
                                            <span key={value?._id}>
                                              {value}
                                              {"  "}
                                            </span>
                                          ))}
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <>
                                        <div
                                          className=""
                                          style={{
                                            width: "100%",
                                            paddingBottom: "30px",
                                            paddingTop: "10px",
                                          }}
                                        >
                                          <p
                                            style={{
                                              backgroundColor: "rgb(25 120 4)",
                                              color: "#fff",
                                              padding: "10px",
                                              borderRadius: "50px",
                                              fontSize: "16px",
                                              fontWeight: "600",
                                              width: "400px",
                                              margin: "0  auto",
                                            }}
                                          >
                                            <span>Not available </span>
                                          </p>
                                        </div>
                                      </>
                                    </>
                                  )}
                                </Tab.Pane>

                                <Tab.Pane eventKey="tab_three">
                                  {this.state.wednesday?.length > 0 ? (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          {this.state.wednesday?.map(
                                            (value) => (
                                              <span key={value?._id}>
                                                {value}
                                                {"  "}
                                              </span>
                                            )
                                          )}
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <>
                                        <div
                                          className=""
                                          style={{
                                            width: "100%",
                                            paddingBottom: "30px",
                                            paddingTop: "10px",
                                          }}
                                        >
                                          <p
                                            style={{
                                              backgroundColor: "rgb(25 120 4)",
                                              color: "#fff",
                                              padding: "10px",
                                              borderRadius: "50px",
                                              fontSize: "16px",
                                              fontWeight: "600",
                                              width: "400px",
                                              margin: "0  auto",
                                            }}
                                          >
                                            <span>Not available </span>
                                          </p>
                                        </div>
                                      </>
                                    </>
                                  )}
                                </Tab.Pane>

                                <Tab.Pane eventKey="tab_four">
                                  {this.state.thursday?.length > 0 ? (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          {this.state.thursday?.map((value) => (
                                            <span key={value?._id}>
                                              {value}
                                              {"  "}
                                            </span>
                                          ))}
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <>
                                        <div
                                          className=""
                                          style={{
                                            width: "100%",
                                            paddingBottom: "30px",
                                            paddingTop: "10px",
                                          }}
                                        >
                                          <p
                                            style={{
                                              backgroundColor: "rgb(25 120 4)",
                                              color: "#fff",
                                              padding: "10px",
                                              borderRadius: "50px",
                                              fontSize: "16px",
                                              fontWeight: "600",
                                              width: "400px",
                                              margin: "0  auto",
                                            }}
                                          >
                                            <span>Not available </span>
                                          </p>
                                        </div>
                                      </>
                                    </>
                                  )}
                                </Tab.Pane>

                                <Tab.Pane eventKey="tab_five">
                                  {this.state.friday?.length > 0 ? (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          {this.state.friday?.map((value) => (
                                            <span key={value?._id}>
                                              {value}
                                              {"  "}
                                            </span>
                                          ))}
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <>
                                        <div
                                          className=""
                                          style={{
                                            width: "100%",
                                            paddingBottom: "30px",
                                            paddingTop: "10px",
                                          }}
                                        >
                                          <p
                                            style={{
                                              backgroundColor: "rgb(25 120 4)",
                                              color: "#fff",
                                              padding: "10px",
                                              borderRadius: "50px",
                                              fontSize: "16px",
                                              fontWeight: "600",
                                              width: "400px",
                                              margin: "0  auto",
                                            }}
                                          >
                                            <span>Not available </span>
                                          </p>
                                        </div>
                                      </>
                                    </>
                                  )}
                                </Tab.Pane>

                                <Tab.Pane eventKey="tab_six">
                                  {this.state.saturday?.length > 0 ? (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          {this.state.saturday?.map((value) => (
                                            <span key={value?._id}>
                                              {value}
                                              {"  "}
                                            </span>
                                          ))}
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <>
                                        <div
                                          className=""
                                          style={{
                                            width: "100%",
                                            paddingBottom: "30px",
                                            paddingTop: "10px",
                                          }}
                                        >
                                          <p
                                            style={{
                                              backgroundColor: "rgb(25 120 4)",
                                              color: "#fff",
                                              padding: "10px",
                                              borderRadius: "50px",
                                              fontSize: "16px",
                                              fontWeight: "600",
                                              width: "400px",
                                              margin: "0  auto",
                                            }}
                                          >
                                            <span>Not available </span>
                                          </p>
                                        </div>
                                      </>
                                    </>
                                  )}
                                </Tab.Pane>

                                <Tab.Pane eventKey="tab_sev">
                                  {this.state.sunday?.length > 0 ? (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          {this.state.sunday?.map((value) => (
                                            <span key={value?._id}>
                                              {value}
                                              {"  "}
                                            </span>
                                          ))}
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <>
                                        <div
                                          className=""
                                          style={{
                                            width: "100%",
                                            paddingBottom: "30px",
                                            paddingTop: "10px",
                                          }}
                                        >
                                          <p
                                            style={{
                                              backgroundColor: "rgb(25 120 4)",
                                              color: "#fff",
                                              padding: "10px",
                                              borderRadius: "50px",
                                              fontSize: "16px",
                                              fontWeight: "600",
                                              width: "400px",
                                              margin: "0  auto",
                                            }}
                                          >
                                            <span>Not available </span>
                                          </p>
                                        </div>
                                      </>
                                    </>
                                  )}
                                </Tab.Pane>
                              </Tab.Content>
                            </Tab.Container>
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-lg-5">
                              <div className="ratting-form-wrapper pl-50">
                                <h3>Write a Review</h3>
                                <div className="ratting-form">
                                  <form action="#">
                                    <div className="star-box">
                                       <span>Your rating:</span> 
                                     <div className="ratting-star">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div> 
                                    </div>
                                    <div className="row">
                                      <div className="rating-form-style mb-10">
                                        <Rating
                                          name="simple-controlled"
                                          onChange={(event, newValue) => { }}
                                        />
                                      </div>
                                      <div class="col-md-6">
                                        <div class="rating-form-style mb-10">
                                          <input
                                            placeholder="Name"
                                            type="text"
                                          />
                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                        <div class="rating-form-style mb-10">
                                          <input
                                            placeholder="Email"
                                            type="email"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="rating-form-style form-submit">
                                          <textarea
                                            name="comment"
                                            placeholder="Comment"
                                            defaultValue={""}
                                            style={{ height: "auto" }}
                                            rows={3}
                                          />
                                          <input
                                            type="submit"
                                            defaultValue="Submit"
                                          />
                                          <>
                                          </>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-5"></div>

                            <div className="col-lg-5">
                              <div className="ratting-form-wrapper pl-50">
                                <h3>Write a Review</h3>
                                <div className="ratting-form">
                                  <form action="#">
                                    <div className="star-box">
                                       <span>Your rating:</span> 
                                     <div className="ratting-star">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div> 
                                    </div>
                                    <div className="row">
                                      <div className="rating-form-style mb-10">
                                        <Rating
                                          name="simple-controlled"
                                          onChange={(event, newValue) => { }}
                                        />
                                      </div>
                                      <div class="col-md-6">
                                        <div class="rating-form-style mb-10">
                                          <input
                                            placeholder="Name"
                                            type="text"
                                          />
                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                        <div class="rating-form-style mb-10">
                                          <input
                                            placeholder="Email"
                                            type="email"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="rating-form-style form-submit">
                                          <textarea
                                            name="comment"
                                            placeholder="Comment"
                                            defaultValue={""}
                                            style={{ height: "auto" }}
                                            rows={3}
                                          />
                                          <input
                                            type="submit"
                                            defaultValue="Submit"
                                          />

                                          <>
                                          </>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div> */}
                    </div>
                  </div>
                </section>
              </Container>
            </section>
          </div>
        </div>

        {/* modal for recharge*/}
        <Modal
          size="md"
          style={{ maxWidth: "600px", width: "100%" }}
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader className="wr-3" toggle={this.toggle}>
            <h2 className="wr-4">Recharge Now</h2>
          </ModalHeader>
          <ModalBody>
            <div className="Wr-1">
              <h3>
                Minimum balance of 5 minutes (INR 25.0) is required to start
                call with RajnishM
              </h3>
              <Link className="wr-5">
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </Link>
              <Link className="wr-6" to="/walletmoney">
                <Button>Recharge</Button>
              </Link>
            </div>
          </ModalBody>
        </Modal>
        {/* <Modal
          size="md"
          style={{ maxWidth: "600px", width: "100%" }}
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader className="wr-3" toggle={this.toggle}>
            <h2 className="wr-4">Recharge Now</h2>
          </ModalHeader>
          <ModalBody>
            <div className="Wr-1">
              <h3>
                <Row>
                  {allminrechargeList.length
                    ? allminrechargeList?.map((allminrecharge, index) => {
                        return (
                          <Col>
                            <span className="btn-as st" onClick={this.toggle}>
                              {allminrecharge?.minute}
                            </span>
                          </Col>
                        );
                      })
                    : null}
                  <Col>
                    <Button className="btn-as st" onClick={this.toggle}>
                      30 Min
                    </Button>
                  </Col>
                  <Col>
                    <Button className="btn-as st" onClick={this.toggle}>
                      45 Min
                    </Button>
                  </Col>
                  <Col>
                    <Button className="btn-as st" onClick={this.toggle}>
                      1 Hour
                    </Button>
                  </Col>
                </Row>
              </h3>
              <Link className="wr-5">
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </Link>
              <Link className="wr-6" to="/walletmoney">
                <Button>Recharge</Button>
              </Link>
            </div>
          </ModalBody>
        </Modal>  */}
      </LayoutOne>
    );
  }
}

export default AstrologerDetail;
export function getUserID() {
  const name = JSON.parse(localStorage.getItem("userData"));
  const names = name.fullname;
  return names;
}

// export function getUserID(userid, roomid, userName) {
//   return fetch(
//     `http://13.233.228.168:8000/user/allchatwithuser/638dcc72ef0c127a0c5a0426`
//   ).then((res) => res.json());
// }
