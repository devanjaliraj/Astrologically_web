import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
// import textbottom from '../../assets/img/textbottom.png'
// import astro3 from '../../assets/img/team/astro3.jpg'
import "../../assets/scss/astroteam.scss";
import LayoutOne from "../../layouts/LayoutOne";
import axiosConfig from "../../axiosConfig";
import Form from "react-bootstrap/Form";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
class allastrochatlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // data: {},
      astrologerList: [],
      Form: "",
      To: "",
      astroid: "",
      userid: "",
      price_high_to_low: [],
    };
  }
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
  submitHandler = (e, astroid, mobile) => {
    e.preventDefault();
    // let astrologerList = localStorage.getItem('astrologerList')
    let mobileNo = localStorage.getItem("user_mobile_no");
    let userId = JSON.parse(localStorage.getItem("user_id"));
    let astroId = astroid;
    let obj = {
      userid: userId,
      astroid: astroId,
      From: mobile, //parseInt(this.state.number)
      To: mobileNo, //parseInt(this.state.number)
    };
    axiosConfig
      .post(`/user/make_call`, obj)

      .then((response) => {
        console.log("rhsagdhgshgdjhgj", response.data.data);
        // console.log(response.data.STATUSMSG)
        // this.setState({ responseData: response.data })
        // swal('Successful!', 'Recharge Successful!', 'success')
        // this.props.history.push('/orderrecharge')
      })

      .catch((error) => {
        console.log(error);
        // swal('Error!', 'Invalid!', 'error')
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
                    <h1>Chat With Astrologer</h1>
                    <p></p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section id="team" class="pb-5">
          <Container>
            {/* <div className="heading mb-30">
                <h2>Best Astrologers </h2>
                <img src={textbottom} alt=""/>
            </div>         */}
            <Row>
              <Col md="3">
                <div className="bx-list fbg">
                  <h3 className="mb-3">
                    <b>Sort By:</b>
                  </h3>
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
                            name="exp_high_to_low"
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
                            name="exp_low_to_high"
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
                            name="price_high_to_low"
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
                            name="price_low_to_high"
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
                            name="rating_high_to_low"
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
                            name="rating_low_to_high"
                            onChange={() =>
                              this.filterMethod("rating_low_to_high")
                            }
                          />
                        </span>
                        Rating : Low to High
                      </li>
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
                <Row>
                  {astrologerList.length
                    ? astrologerList.map((astrologer, index) => {
                        return (
                          <Col md="4" key={index}>
                            <div className="image-flip">
                              <div className="mainflip flip-0">
                                <div className="frontside">
                                  <Link
                                    // to={"/astrologerdetail/" + astrologer._id}
                                    className=""
                                  >
                                    <div className="card">
                                      <div className="card-body text-center">
                                        <Link
                                          className=""
                                          // to={"/chatlist/" + astrologer._id}
                                          to={
                                            "/astrologerdetail/" +
                                            astrologer._id
                                          }
                                        >
                                          <p>
                                            <img src={astrologer?.img} alt="" />
                                          </p>
                                        </Link>
                                        <h4 className="card-title">
                                          {astrologer?.fullname}
                                        </h4>
                                        <ul className="mb-3">
                                          <li>
                                            Specility:{" "}
                                            <span>
                                              {astrologer?.all_skills}
                                            </span>
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
                                            <Link
                                              className="btn btn-primary btn-sm sc"
                                              // to={"/chatlist/" + astrologer._id}
                                              to={
                                                "/astrologerdetail/" +
                                                astrologer._id
                                              }
                                            >
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
                                              <span className="sr-btn">
                                                <i
                                                  class="fa fa-commenting"
                                                  aria-hidden="true"
                                                >
                                                  {" "}
                                                  Chat
                                                </i>{" "}
                                              </span>
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
                                              <i class="fa fa-phone"> Chat</i>
                                            </span> */}
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
                                            </Link>
                                          </>
                                        ) : (
                                          <>
                                            <button className="btn btn-denger wr">
                                              <i
                                                class="fa fa-commenting"
                                                aria-hidden="true"
                                              />
                                              Wait
                                            </button>
                                          </>
                                        )}
                                        <br />
                                        <span value={this.state.waiting_queue}>
                                          {" "}
                                          Wait ~ {astrologer.waiting_queue}Min
                                        </span>
                                        {/* <span> Wait ~ 5m</span> */}
                                      </div>
                                    </div>
                                  </Link>
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
          </Container>
        </section>
      </LayoutOne>
    );
  }
}

export default allastrochatlist;

// import React from "react";
// import { Link } from "react-router-dom";
// import { Container, Row, Col, Button } from "reactstrap";
// // import textbottom from '../../assets/img/textbottom.png'
// // import astro3 from '../../assets/img/team/astro3.jpg'
// import "../../assets/scss/astroteam.scss";
// import LayoutOne from "../../layouts/LayoutOne";
// import axiosConfig from "../../axiosConfig";

// class allastrochatlist extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       // data: {},
//       astrologerList: [],
//       Form: "",
//       To: "",
//       astroid: "",
//       userid: "",
//     };
//   }
//   componentDidMount = () => {
//     axiosConfig
//       .get("/admin/allAstro")
//       .then((response) => {
//         console.log(response.data);
//         if (response.data.status === true) {
//           this.setState({ astrologerList: response.data.data });
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         console.log(error.response);
//       });
//   };

//   submitHandler = (e, astroid, mobile) => {
//     e.preventDefault();
//     // let astrologerList = localStorage.getItem('astrologerList')
//     let mobileNo = localStorage.getItem("user_mobile_no");
//     let userId = JSON.parse(localStorage.getItem("user_id"));
//     let astroId = astroid;
//     let obj = {
//       userid: userId,
//       astroid: astroId,
//       // astrologerList: astrologerList,
//       From: mobile, //parseInt(this.state.number)
//       To: mobileNo, //parseInt(this.state.number)
//     };
//     axiosConfig
//       .post(`/user/make_call`, obj)

//       .then((response) => {
//         console.log("rhsagdhgshgdjhgj", response.data.data);
//         // console.log(response.data.STATUSMSG)
//         // this.setState({ responseData: response.data })
//         // swal('Successful!', 'Recharge Successful!', 'success')
//         // this.props.history.push('/orderrecharge')
//       })

//       .catch((error) => {
//         console.log(error);
//         // swal('Error!', 'Invalid!', 'error')
//       });
//   };

//   render() {
//     const { astrologerList } = this.state;

//     return (
//       <LayoutOne headerTop="visible">
//         <section className="pt-0 pb-0">
//           <div
//             className=""
//             style={{
//               backgroundColor: "#FFD59E",
//               width: "100%",
//               padding: "70px 0px",
//               backgroundSize: "cover",
//             }}
//           >
//             <Container>
//               <Row>
//                 <Col md="12">
//                   <div className="leftcont text-left">
//                     <h1>Talk To Astrologer</h1>
//                     <p></p>
//                   </div>
//                 </Col>
//               </Row>
//             </Container>
//           </div>
//         </section>
//         <section id="team" class="pb-5">
//           <Container>
//             {/* <div className="heading mb-30">
//                 <h2>Best Astrologers </h2>
//                 <img src={textbottom} alt=""/>
//             </div>         */}
//             <Row>
//               {astrologerList.length
//                 ? astrologerList.map((astrologer, index) => {
//                     return (
//                       <Col md="3" key={index}>
//                         <div className="image-flip">
//                           <div className="mainflip flip-0">
//                             <div className="frontside">
//                               <Link
//                                 to={"/astrologerdetail/" + astrologer._id}
//                                 className=""
//                               >
//                                 <div className="card">
//                                   <div className="card-body text-center">
//                                     <p>
//                                       <img src={astrologer?.img} alt="" />
//                                     </p>
//                                     <h4 className="card-title">
//                                       {astrologer?.fullname}
//                                     </h4>
//                                     <ul className="mb-3">
//                                       <li>
//                                         Specility:{" "}
//                                         <span>{astrologer?.all_skills}</span>
//                                       </li>
//                                       <li>
//                                         Language:{" "}
//                                         <span>{astrologer?.language}</span>
//                                       </li>
//                                       <li>
//                                         Experience:{" "}
//                                         <span>{astrologer?.exp_in_years}</span>
//                                       </li>
//                                       <li>
//                                         Call Rate:{" "}
//                                         <span>
//                                           {astrologer?.callCharge}/
//                                           {astrologer?.conrubute_hrs}
//                                         </span>
//                                       </li>
//                                     </ul>
//                                     {/* <Link
//                                       className="btn btn-primary btn-sm st-d"
//                                       to={'/askquestion/' + astrologer?._id}
//                                     >
//                                       Ask Question
//                                     </Link> */}
//                                     {/* <Link className="btn btn-primary btn-sm st-d">
//                                       {astrologer?.status}
//                                     </Link> */}
//                                     <Link
//                                       className="btn btn-primary btn-sm"
//                                       to={"/chatlist/" + astrologer._id}
//                                     >
//                                       {/* <span
//                                         className="sr-btn"
//                                         onClick={this.onCallSubmit}
//                                       >
//                                         <i class="fa fa-phone">
//                                           {astrologer?.userRequestForm}
//                                         </i>{' '}
//                                         Call
//                                       </span> */}
//                                       {/* {localStorage.getItem('auth-token') ? ( */}
//                                       <span className="sr-btn">
//                                         <i
//                                           class="fa fa-commenting"
//                                           aria-hidden="true"
//                                         >
//                                           {" "}
//                                           Chat
//                                         </i>{" "}
//                                       </span>
//                                       {/* <span
//                                         className="sr-btn"
//                                         onClick={(e) =>
//                                           this.submitHandler(
//                                             e,
//                                             astrologer?._id,
//                                             astrologer?.mobile
//                                           )
//                                         }
//                                       >
//                                         <i class="fa fa-phone"> Call</i>
//                                       </span> */}

//                                       {/* ) : (
//                                         <span
//                                           className="sr-btn"
//                                           onClick={(e) =>
//                                             (window.location.href =
//                                               '/#/login-register')
//                                           }
//                                         >
//                                           <i class="fa fa-phone"></i> Call
//                                         </span>
//                                       )} */}
//                                       {/* <small>
//                                             / 20{' '}
//                                             <i class="fa fa-inr" aria-hidden="true">
//                                               {astrologer?.conrubute_hrs}
//                                             </i>{' '}
//                                             per Hour
//                                           </small> */}
//                                     </Link>
//                                     <br /> <span> Wait ~ 5m</span>
//                                   </div>
//                                 </div>
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                       </Col>
//                     );
//                   })
//                 : null}
//             </Row>
//           </Container>
//         </section>
//       </LayoutOne>
//     );
//   }
// }

// export default allastrochatlist;
