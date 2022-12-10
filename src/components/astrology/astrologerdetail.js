import React from "react";
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
// import detailsbg from "../../assets/img/details-bg.jpg";
// import pagetitle from "../../assets/img/pagetitle.jpg";
import axiosConfig from "../../axiosConfig";
// import axios from "axios";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

class AstrologerDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allminrechargeList: [],
      data: {},
      To: "",
      Form: "",
      astrid: "",
      userid: "",
      astroMobile: "",
      astroId: "",
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

  componentDidMount = () => {
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
    let { id } = this.props.match.params;
    // console.log(id);
    axiosConfig
      .get(`/admin/getoneAstro/${id}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          fullname: response.data.data.fullname,
          all_skills: response.data.data.all_skills,
          language: response.data.data.language,
          img: response.data.data.img[0],
          status: response.data.status,
          Exp: response.data.data.Exp,
          exp_in_years: response.data.data.exp_in_years,
          callCharge: response.data.data.callCharge,
          long_bio: response.data.data.long_bio,
          msg: response.data.data.msg,
          astroMobile: response?.data?.data?.mobile,
          status: response?.data?.data?.status,
          astroId: response?.data?.data?._id,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  submitHandler = (e, astroid, mobile) => {
    e.preventDefault();
    // let astrologerList = localStorage.getItem('astrologerList')
    // let astroid = localStorage.getItem('astro_id')
    let mobileNo = localStorage.getItem("user_mobile_no");
    let userId = JSON.parse(localStorage.getItem("user_id"));
    // let astroId = JSON.parse(localStorage.getItem('astroid'))
    let obj = {
      userid: userId,
      astroid: astroid,
      // astrologerList: astrologerList,
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
    // const { allminrechargeList } = this.state;

    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              backgroundColor: "#FFD59E",
              width: "100%",
              padding: "70px 0px",
              backgroundSize: "cover",
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
                    <Col md="3">
                      <div className="as-pic mt-30">
                        <img src={this.state?.img} alt="" className="pic-as" />
                      </div>
                    </Col>
                    <Col md="9">
                      <div className="as-content mt-60">
                        <h3>{this.state.fullname}</h3>
                        <div className="review-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <ul>
                          <li>
                            {/* Language: */}
                            <span>{this.state.language}</span>
                          </li>

                          <li>
                            Skills: <span> {this.state.all_skills}</span>
                          </li>
                          <li>
                            Experience: <span>{this.state.exp_in_years}</span>
                          </li>
                          <li>
                            <span>{this.state.callCharge}</span>
                          </li>
                          <li>
                            <span className="">{this.state.status}</span>{" "}
                            {/* {<span className="">{this.state.status}</span>} */}
                          </li>
                        </ul>
                      </div>

                      <Row>
                        <Col md="3" className="mt-30">
                          <Button className="btn-as st" onClick={this.toggle}>
                            <i class="fa fa-commenting" aria-hidden="true"></i>{" "}
                            Start Chat
                            <small className="sm-text">
                              {/* <i class="fa fa-inr" aria-hidden="true"></i>{" "} */}
                              {/* {this.state.callCharge} */}
                            </small>
                          </Button>
                        </Col>
                        <Col md="3" className="mt-30">
                          {/* <Button className="btn-as st" onClick={this.toggle}> */}

                          <Button
                            className="btn-as st"
                            onClick={(e) =>
                              this.submitHandler(
                                e,
                                this.state.astroId,
                                this.state.astroMobile
                              )
                            }
                          >
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            Start Call
                            <small className="sm-text">
                              {/* <i class="fa fa-inr" aria-hidden="true"></i>{" "} */}
                              {/* {this.state.callCharge} */}
                            </small>
                          </Button>
                        </Col>
                        <Col md="3" className="mt-30">
                          <Button className="btn-as st" onClick={this.toggle}>
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
                        </Col>
                        <Col md="3" className="mt-30">
                          <Button className="btn-as st" onClick={this.toggle}>
                            <i
                              class="fa fa-youtube-play"
                              aria-hidden="true"
                            ></i>{" "}
                            Start Live
                            <small className="sm-text">
                              {/* <i class="fa fa-inr" aria-hidden="true"></i>{" "} */}
                              {/* {this.state.callCharge} */}
                            </small>
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </section>
                <section className="mt-50 mb-30">
                  <div className="description-review-wrapper">
                    <Tab.Container defaultActiveKey="productDescription">
                      <Nav
                        variant="pills"
                        className="description-review-topbar"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="additionalInfo">
                            About Information
                          </Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                <Nav.Link eventKey="productDescription">Description</Nav.Link>
              </Nav.Item> */}
                        <Nav.Item>
                          <Nav.Link eventKey="productReviews">Reviews</Nav.Link>
                        </Nav.Item>
                      </Nav>

                      <Tab.Content className="description-review-bottom">
                        <Tab.Pane eventKey="additionalInfo">
                          <div className="product-anotherinfo-wrapper">
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
                        </Tab.Pane>
                        {/* <Tab.Pane eventKey="productDescription">
                <h5>lo</h5>
              </Tab.Pane> */}
                        <Tab.Pane eventKey="productReviews">
                          <h3>
                            RATINGS <i class="fa fa-star"></i>
                          </h3>
                          <div className="row">
                            <div className="col-lg-7">
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
                                <div className="col-md-6">
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
                                </div>
                              </div>
                              <hr />

                              <div className="review-wrapper">
                                <div className="single-review">
                                  *{" "}
                                  <div className="review-img">
                                    <img
                                      src={
                                        process.env.PUBLIC_URL +
                                        "/assets/img/testimonial/1.jpg"
                                      }
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
                                            lorem ipsum
                                          </h4>
                                        </div>
                                        <div className="review-rating">
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
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
                                        Vestibulum ante ipsum primis aucibus
                                        orci luctustrices posuere cubilia Curae
                                        Suspendisse viverra ed viverra. Mauris
                                        ullarper euismod vehicula. Phasellus
                                        quam nisi, congue id nulla.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="ratting-form-wrapper pl-50">
                                <h3>Write a Review</h3>
                                <div className="ratting-form">
                                  <form action="#">
                                    <div className="star-box">
                                      {/* <span>Your rating:</span> */}
                                      {/* <div className="ratting-star">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div> */}
                                    </div>
                                    <div className="row">
                                      <div className="rating-form-style mb-10">
                                        <Rating
                                          name="simple-controlled"
                                          onChange={(event, newValue) => {}}
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
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </section>
              </Container>
            </section>
          </div>
        </div>

        {/* modal for recharge*/}

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
