import PropTypes from "prop-types";
import React, { Fragment, Component } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { Container, Form, Row, Col } from "reactstrap";
import axios from "axios";
import userpic from "../../assets/img/userpic.png";
import axiosConfig from "../../axiosConfig";
export default class MyAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      mobile: "",
      dob: "",
      bithplace: "",
      birth_tym: "",
      userimg: "",
      address: "",
      locality: "",
      pincode: "",
      city: "",
      state: "",
      country: "",
      selectedName: "",
      selectedFile: null,
      // data: {},
    };
  }
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  componentDidMount() {
    // let { id } = this.props.match.params;
    let user_id = JSON.parse(localStorage.getItem("user_id"));
    axiosConfig
      .get(`/user/viewoneuser/${user_id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          fullname: response.data.data.fullname,
          email: response.data.data.email,
          mobile: response.data.data.mobile,
          dob: response.data.data.dob,
          bithplace: response.data.data.bithplace,
          birth_tym: response.data.data.birth_tym,
          userimg: response.data.data.userimg,
          address: response.data.address,
          // locality: response.data.data.locality,
          pincode: response.data.data.pincode,
          city: response.data.data.city,
          state: response.data.data.state,
          country: response.data.data.country,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.data);
    const data = new FormData();
    data.append("fullname", this.state.fullname);
    data.append("email", this.state.email);
    data.append("mobile", this.state.mobile);
    data.append("dob", this.state.dob);
    data.append("bithplace", this.state.bithplace);
    data.append("birth_tym", this.state.birth_tym);
    data.append("address", this.state.address);
    data.append("pincode", this.state.pincode);
    data.append("city", this.state.city);
    data.append("state", this.state.state);
    data.append("country", this.state.country);
    if (this.state.selectedFile !== null) {
      data.append("userimg", this.state.selectedFile, this.state.selectedName);
    }

    for (var value of data.values()) {
      console.log(value);
    }

    for (var key of data.keys()) {
      console.log(key);
    }
    // let { id } = this.props.match.params;
    let user_id = JSON.parse(localStorage.getItem("user_id"));
    axiosConfig
      .post(`/user/edit_myprofile/${user_id}`, data)
      .then((response) => {
        console.log(response.data);
        // swal("Success!", "Submitted SuccessFull!", "success");
        // this.props.history.push("/app/user/userList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <Fragment>
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
                      <h1>My Account Information</h1>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </section>
          <div className="myaccount-area pb-80 pt-100">
            <div className="container">
              <div className="row">
                <div class="col-lg-4">
                  <Card.Body className="usr-1">
                    <div className="user-pro">
                      <img
                        src={this.state.userimg}
                        alt="userimg"
                        className="img-fluid img-border rounded-circle box-shadow-1"
                        width="150"
                      />
                      <ul>
                        <li>
                          Name : <span>{this.state.fullname}</span>
                        </li>
                        <li>
                          Mobile : <span>{this.state.mobile}</span>
                        </li>
                        <li>
                          Email : <span>{this.state.email}</span>
                        </li>
                        <li>
                          DOB : <span>{this.state.dob}</span>
                        </li>
                        <li>
                          Address : <span>{this.state.address}</span>
                        </li>
                        {/* <li>
                          Locality : <span>{this.state.data.locality}</span>
                        </li> */}
                        <li>
                          Pin Code : <span>{this.state.pincode}</span>
                        </li>
                        <li>
                          State : <span>{this.state.state}</span>
                        </li>
                        <li>
                          City : <span>{this.state.city}</span>
                        </li>

                        <li>
                          Country : <span>{this.state.country}</span>
                        </li>
                      </ul>
                    </div>
                  </Card.Body>
                </div>
                <div className="col-lg-8">
                  <div className="myaccount-wrapper">
                    {/* <Accordion defaultActiveKey="0"> */}
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        {/* <Accordion.Toggle variant="link" eventKey="0">
                            <h3 className="panel-title">
                              Edit your account information{" "}
                            </h3>
                          </Accordion.Toggle> */}
                      </Card.Header>
                      {/* <Accordion.Collapse eventKey="0"> */}
                      <Card.Body className="usr-1">
                        <Form onSubmit={this.submitHandler}>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>My Account Information</h4>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>First Name</label>
                                  <input
                                    type="text"
                                    placeholder=" Name"
                                    name="fullname"
                                    value={this.state.fullname}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                              {/* <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Last Name</label>
                                  <input
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastname"
                                    value={this.state.lastname}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div> */}
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Email Address</label>
                                  <input
                                    readOnly
                                    type="email"
                                    placeholder="Customer Email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>User Image</label>
                                  <input
                                    className="form-control"
                                    type="file"
                                    name="userimg"
                                    onChange={this.onChangeHandler}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Mobile Number</label>
                                  <input
                                    type="number"
                                    name="mobile"
                                    value={this.state.mobile}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button type="submit">Continue</button>
                              </div>
                            </div>
                          </div>
                        </Form>
                      </Card.Body>
                      {/* </Accordion.Collapse> */}
                    </Card>
                    <Card className="single-my-account mb-20">
                      <Card.Body className="usr-1">
                        <Form onSubmit={this.addAddress}>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>My Address</h4>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Address</label>
                                  <input
                                    type="textarea"
                                    placeholder="Address"
                                    name="address"
                                    value={this.state.address}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Locality</label>
                                  <input
                                    type="text"
                                    placeholder="Locality"
                                    name="locality"
                                    value={this.state.locality}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Pin Code</label>
                                  <input
                                    type="number"
                                    placeholder="Pin Code"
                                    name="pincode"
                                    value={this.state.pincode}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>City</label>
                                  <input
                                    type="text"
                                    placeholder="city"
                                    name="city"
                                    value={this.state.city}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>State</label>
                                  <input
                                    type="text"
                                    placeholder="State"
                                    name="state"
                                    value={this.state.state}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button type="submit">Continue</button>
                              </div>
                            </div>
                          </div>
                        </Form>
                      </Card.Body>
                      {/* </Accordion.Collapse> */}
                    </Card>
                    <Card className="single-my-account mb-20">
                      <Card.Body className="usr-1">
                        <Form onSubmit={this.addAddress}>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>My Orders</h4>
                            </div>
                            <div className="row"></div>
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button type="submit">Continue</button>
                              </div>
                            </div>
                          </div>
                        </Form>
                      </Card.Body>
                      {/* </Accordion.Collapse> */}
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LayoutOne>
      </Fragment>
    );
  }
}

//export default MyAccount;
