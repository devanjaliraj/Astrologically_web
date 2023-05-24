import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Input } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import "../../../src/assets/scss/style.scss";
// import AutoSearch from './autosearch'
import { BiTime } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import textbottom from "../../assets/img/textbottom.png";
import astro2 from "../../assets/img/team/astro2.jpg";
// import { useHistory } from "react-router-dom";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

class BookEvent extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = {
      listofpooja: [],
    };
    this.state = {
      mode: "",
      event_list: "",
      mobile: "",
      email: "",
      userid: "",
      date: "",
      city: "",
      state: "",
      country: "",
      address: "",
    };
  }

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlecheckpooja = (value) => {
    console.log(value);

    localStorage.setItem("poojaviewone", JSON.stringify(value));
    const userid = localStorage.getItem("user_id");
    if (userid !== null) {
      //   history.push("/Poojadetailpage");
      //   this.props.history.push("/Poojadetailpage");
      this.props.history.push(`/Poojadetailpage/${value?._id}`);
    } else swal("No User Found", "User Need to login First");
  };

  componentDidMount() {
    axiosConfig
      .get(`/admin/get_adminevent`)
      .then((res) => {
        console.log(res.data.data);
        this.setState({ listofpooja: res.data.data });
      })
      .catch((err) => console.log(err));
  }
  submitHandler = (e) => {
    e.preventDefault();
    // let { id } = this.props.match.params
    // console.log(id)
    // let userId = JSON.parse(localStorage.getItem('user_id'))

    // let astroid = JSON.parse(localStorage.getItem('astroId'))
    let userid = localStorage.getItem("user_id");

    let obj = {
      // astroId: astroid,
      userId: userid,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      date: this.state.date,
      mode: this.state.mode,
      event_list: this.state.event_list,
      mobile: parseInt(this.state.mobile),
      email: this.state.email,
    };

    axiosConfig
      .post(`/user/add_event`, obj)
      .then((response) => {
        console.log("@@@@@", response.data);
        //localStorage.setItem('shipping_id', response?.data?.data[0]?._id)
        swal("Success!", "Submitted SuccessFull!", "success");
        // window.location.reload("/astromallList");
        this.props.history.push("/astromallList");
      })

      .catch((error) => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  };

  render() {
    return (
      <LayoutOne headerTop="visible">
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
              timeslot: "",
            }}
          >
            <Container>
              <Row>
                <Col md="12">
                  <div className="leftcont text-left">
                    {/* <h1>
                        Astromall Shop/ Product Detail/ Consultant List/ Address
                    </h1> */}
                    <h3>Book Your Pooja</h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="container mt-2">
            <Row>
              <div className="col-lg-12 col-md-12 mb-30">
                <div className="category-home">
                  <section className="pt-0">
                    <div className="container">
                      <Row>
                        {this.state.listofpooja !== "" ? (
                          <>
                            {this.state.listofpooja?.map((value, i) => (
                              <Col key={i} className="mt-3" md="3">
                                <div className="product-grid8">
                                  <div class="product-image8 imageofpooja">
                                    {/* <Link to="/poojadetail"> */}
                                    <img
                                      className="imagepooja"
                                      style={{ borderRadius: "10px" }}
                                      src={value?.poojaimg}
                                      alt="pooja image"
                                    />
                                    {/* </Link> */}
                                  </div>
                                  <div className="product-content">
                                    <Row className="priceandname">
                                      <Col lg="8" md="8" sm="8">
                                        <div
                                          style={{
                                            fontSize: "12px",
                                            fontWeight: "300",
                                          }}
                                          //   className=" poojaname  justify-content-left"
                                        >
                                          <b>
                                            {value?.pooja_type?.pooja_name?.slice(
                                              0,
                                              13
                                            )}
                                          </b>
                                          {/* {value?.pooja_type?.pooja_name} */}
                                        </div>
                                      </Col>
                                      <Col lg="4" md="4" sm="4">
                                        <div
                                          style={{ fontSize: "15px" }}
                                          className=" poojanames  justify-content-end"
                                        >
                                          <i
                                            class="fa fa-inr"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          {value?.pooja_price}
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row className="priceandname">
                                      <Col lg="6" md="6" sm="6">
                                        <div
                                          style={{
                                            fontSize: "12px",
                                            fontWeight: "200",
                                          }}
                                          //   className=" poojaname  justify-content-left"
                                        >
                                          Mode of Pooja
                                        </div>
                                      </Col>
                                      <Col lg="6" md="6" sm="6">
                                        <div
                                          style={{ fontSize: "10px" }}
                                          className=" poojanames  justify-content-end"
                                        >
                                          <span style={{ color: "green" }}>
                                            {" "}
                                            {value?.mode}
                                          </span>
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row className="mt-1">
                                      <Col lg="6" md="6" sm="6">
                                        <div
                                          style={{ fontSize: "15px" }}
                                          //   className=" poojaname  justify-content-left"
                                        >
                                          <MdOutlineLocationOn
                                            color="red"
                                            size={20}
                                          />{" "}
                                          {value?.fullfill_location}
                                        </div>
                                      </Col>
                                      <Col lg="6" md="6" sm="6">
                                        <span style={{ fontSize: "12px" }}>
                                          {value?.liveStreaming === true ? (
                                            <>
                                              <div
                                                style={{ fontSize: "12px" }}
                                                className=" poojanames  justify-content-end"
                                              >
                                                LiveStreaming
                                              </div>
                                              <div style={{ color: "green" }}>
                                                Available
                                              </div>
                                            </>
                                          ) : (
                                            <div style={{ color: "red" }}>
                                              Not Available
                                            </div>
                                          )}
                                        </span>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg="6" md="6" sm="6">
                                        <div
                                          style={{
                                            fontSize: "17px",
                                            fontWeight: "500",
                                          }}
                                          //   className=" poojaname  justify-content-left"
                                        >
                                          <BiTime color="green" size={16} />{" "}
                                          Duration
                                        </div>
                                      </Col>
                                      <Col lg="6" md="6" sm="6">
                                        <div
                                          style={{ fontSize: "15px" }}
                                          className=" poojanames  justify-content-end"
                                        >
                                          {value?.duration}
                                          {/* <select
                                            onChange={(e) =>
                                              this.setState({
                                                timeslot: e.target.value,
                                              })
                                            }
                                          >
                                            <option>Select Time</option>
                                            {value?.time_slots?.map(
                                              (ele, i) => (
                                                <option key={i} value={ele}>
                                                  {ele}
                                                </option>
                                              )
                                            )}
                                          </select> */}
                                        </div>
                                      </Col>
                                    </Row>

                                    {/* <h3 className="title">
                                <Link>Magic ball reader</Link>
                              </h3> */}
                                    <Row className="mt-1">
                                      <Button
                                        onClick={() =>
                                          this.handlecheckpooja(value)
                                        }
                                        color="success"
                                      >
                                        View
                                      </Button>
                                    </Row>
                                  </div>
                                </div>
                              </Col>
                            ))}
                          </>
                        ) : null}
                      </Row>
                    </div>
                  </section>
                </div>
              </div>
            </Row>
          </div>
        </section>
      </LayoutOne>
    );
  }
}
export default BookEvent;
