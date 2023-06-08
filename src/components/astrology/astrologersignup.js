import React from "react";
// import render  from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bs-stepper/dist/css/bs-stepper.min.css";
import Stepper from "bs-stepper";
// import axios from 'axios'
// import LayoutOne from "../../layouts/LayoutOne";
import { Container, Row, Col, Input, Form, Button, Label } from "reactstrap";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
// import Select from 'react-select'
import swal from "sweetalert";
import axiosConfig from "../../axiosConfig";
// import { colourOptions } from '../astrology/selectdata/data.ts';
class AstrologerSignup extends React.Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      email: "",
      mobile: "",
      gender: "",
      otp: "",
      dob: "",
      primary_skills: "",
      all_skills: "",
      language: "",
      exp_in_years: "",
      conrubute_hrs: "",
      hear_abt_astrology: "",
      other_online_platform: "",
      why_onboard_you: "",
      suitable_tym_interview: "",
      crnt_city: "",
      income_src: "",
      highest_qualification: "",
      degree_deploma: "",
      clg_scl_name: "",
      lrn_abt_astrology: "",
      insta_link: "",
      fb_link: "",
      linkedln_link: "",
      youtube_link: "",
      website_link: "",
      anybody_prefer: "",
      min_earning_expe: "",
      max_earning_expe: "",
      long_bio: "",
      status: "Active",
      callCharge: "",
      img: "",
      selectedName: "",
      selectedFile: null,
      userId: "",
      __v: 0,
      approvedstatus: "false",
      otpverify: "true",
    };
  }
  //Image Submit Handler
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  componentDidMount() {
    this.stepper = new Stepper(document.querySelector("#stepper1"), {
      linear: false,
      animation: true,
    });
  }

  handlechange = (e) => {
    // e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  changeHandler = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandlerLogin = (e) => {
    e.preventDefault();
    //this.setState({ otp: false });
    axiosConfig
      .post("/user/signup", this.state)
      .then((response) => {
        console.log(response);
        localStorage.setItem("auth-token", response.data.token);
        this.setState({
          token: response.data.token,
        });
        swal("Success!", " Register Successful Done!", "success");
        this.props.history.push("/otpverify");
      })
      .catch((error) => {
        console.log(error.response);
        swal("Error!", "Something went wrong", "error");
      });
  };

  submitHandler = (e) => {
    e.preventDefault();
    let obj = {
      fullname: this.state.fullname,
      email: this.state.email,
      mobile: this.state.mobile,
      otpverify: this.state.otpverify,
      approvedstatus: this.state.approvedstatus,
      all_skills: this.state.all_skills,
      anybody_prefer: this.state.anybody_prefer,
      callCharge: this.state.callCharge,
      img: this.state.selectedFile !== null ? this.state.selectedName : "",
      clg_scl_name: this.state.clg_scl_name,
      conrubute_hrs: this.state.conrubute_hrs,
      crnt_city: this.state.crnt_city,
      degree_deploma: this.state.degree_deploma,
      dob: this.state.dob,
      exp_in_years: this.state.exp_in_years,
      fb_link: this.state.fb_link,
      gender: this.state.gender,
      hear_abt_astrology: this.state.hear_abt_astrology,
      highest_qualification: this.state.highest_qualification,
      income_src: this.state.income_src,
      insta_link: this.state.insta_link,
      language: this.state.language,
      linkedln_link: this.state.linkedln_link,
      long_bio: this.state.long_bio,
      lrn_abt_astrology: this.state.lrn_abt_astrology,
      max_earning_expe: this.state.max_earning_expe,
      min_earning_expe: this.state.min_earning_expe,
      other_online_platform: this.state.other_online_platform,
      primary_skills: this.state.primary_skills,
      status: this.state.status,
      suitable_tym_interview: this.state.suitable_tym_interview,
      website_link: this.state.website_link,
      why_onboard_you: this.state.why_onboard_you,
      youtube_link: this.state.youtube_link,
    };
    const data = new FormData();
    data.append("_id", this.state.userId);
    data.append("fullname", this.state.fullname);
    data.append("email", this.state.email);
    data.append("mobile", this.state.mobile);
    data.append("gender", this.state.gender);
    data.append("dob", this.state.dob);
    data.append("primary_skills", this.state.primary_skills);
    data.append("all_skills", this.state.all_skills);
    data.append("language", this.state.language);
    data.append("exp_in_years", this.state.exp_in_years);
    data.append("conrubute_hrs", this.state.conrubute_hrs);
    data.append("hear_abt_astrology", this.state.hear_abt_astrology);
    data.append("other_online_platform", this.state.other_online_platform);
    data.append("why_onboard_you", this.state.why_onboard_you);
    data.append("suitable_tym_interview", this.state.suitable_tym_interview);
    data.append("crnt_city", this.state.crnt_city);
    data.append("income_src", this.state.income_src);
    data.append("highest_qualification", this.state.highest_qualification);
    data.append("degree_deploma", this.state.degree_deploma);
    data.append("lrn_abt_astrology", this.state.lrn_abt_astrology);
    data.append("insta_link", this.state.insta_link);
    data.append("fb_link", this.state.fb_link);
    data.append("linkedln_link", this.state.linkedln_link);
    data.append("youtube_link", this.state.youtube_link);
    data.append("website_link", this.state.website_link);
    data.append("anybody_prefer", this.state.anybody_prefer);
    data.append("min_earning_expe", this.state.min_earning_expe);
    data.append("max_earning_expe", this.state.max_earning_expe);
    data.append("long_bio", this.state.long_bio);
    data.append("status", this.state.status);
    data.append("callCharge", this.state.callCharge);
    if (this.state.selectedFile !== null) {
      data.append("img", this.state.selectedFile, this.state.selectedName);
    }

    for (var value of data.values()) {
      console.log(value);
    }

    for (var key of data.keys()) {
      console.log(key);
    }
    // let { userId } = this.props.match.params;
    axiosConfig
      .post(`/user/editAstroDetails/${this.state.userId}`, obj)
      .then((response) => {
        console.log(response.data.message);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/");
      })

      .catch((error) => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error.response);
      });
  };

  stepperFirst = () => {
    const { email, mobile, fullname } = this.state;
    axiosConfig
      .post("/user/signup", {
        mobile: parseInt(mobile) != NaN ? parseInt(mobile) : "null",
        email: email,
        fullname: fullname,
        moblie: mobile,
      })
      .then((response) => {
        this.stepper.next();
        console.log("@@@####", response.data);
        let userInfo = response.data.user;
        localStorage.setItem("user_id", response.data._id);
        // localStorage.setItem("auth-token", response.data.token);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
        swal("Error!", " Wrong UserName or Password", "error");
      });
  };
  stepperSecond = () => {
    const { otp, mobile } = this.state;
    axiosConfig
      .post("/user/verifyotp", {
        otp: parseInt(otp, mobile) != NaN ? parseInt(otp) : "null",
        otp: otp,
        mobile: mobile,
      })
      .then((response) => {
        this.stepper.next();
        console.log("@@@####", response.data);
        let userInfo = response.data.user;
        this.setState({ userId: response.data._id });
        localStorage.setItem("user_id", response.data._id);
        // localStorage.setItem("auth-token", response.data.token);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
        swal("Error!", " Wrong UserName or Password", "error");
      });
  };

  render() {
    return (
      <section
        className=""
        style={{
          backgroundImage: `url(${astrologinbg})`,
          width: "100%",
          padding: "50px 0px",
          height: "100%",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <section className="ptb-30">
            <div className="stp-1">
              <h2 className="th-1">AstroVipra</h2>
              <h4 className="th-2">Astrologer Register</h4>
              <div id="stepper1" className="bs-stepper">
                <div className="bs-stepper-header">
                  <div className="step" data-target="#test-l-1">
                    <button className="step-trigger">
                      <span className="bs-stepper-circle">1</span>
                      <span className="bs-stepper-label">Personal Details</span>
                    </button>
                  </div>
                  <div className="line"></div>
                  <div className="step" data-target="#test-otp">
                    <button className="step-trigger">
                      <span className="bs-stepper-circle">2</span>
                      <span className="bs-stepper-label">Verify OTP</span>
                    </button>
                  </div>
                  <div className="line"></div>
                  <div className="step" data-target="#test-l-2">
                    <button className="step-trigger">
                      <span className="bs-stepper-circle">3</span>
                      <span className="bs-stepper-label">Skill Details</span>
                    </button>
                  </div>
                  <div className="line"></div>
                  <div className="step" data-target="#test-l-3">
                    <button className="step-trigger">
                      <span className="bs-stepper-circle">4</span>
                      <span className="bs-stepper-label">Other Details</span>
                    </button>
                  </div>
                </div>

                <div className="bs-stepper-content">
                  <Form className="m-1" onSubmit={this.submitHandler}>
                    {/* <form onSubmit={this.submitHandler}> */}
                    <div id="test-l-1" className="content">
                      <Row>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>Name*</Label>
                            <Input
                              type="text"
                              name="fullname"
                              required
                              placeholder="Enter Your Fullname"
                              value={this.state.fullname}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>Email address*</Label>
                            <Input
                              type="email"
                              name="email"
                              required
                              placeholder="Enter Your email"
                              value={this.state.email}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>Mobile Number*</Label>
                            <Input
                              type="text"
                              name="mobile"
                              required
                              placeholder="Enter Your Number"
                              value={this.state.mobile}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                      </Row>
                      <button
                        className="btn btn-primary"
                        onClick={() => this.stepperFirst()}
                      >
                        Next
                      </button>
                    </div>
                    <div id="test-otp" className="content">
                      <Row>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>Otp*</Label>
                            <Input
                              type="text"
                              required
                              name="otp"
                              value={this.state.otp}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                      </Row>
                      <button
                        className="btn btn-primary"
                        onClick={() => this.stepperSecond()}
                      >
                        Next
                      </button>
                    </div>
                    <div id="test-l-2" className="content">
                      <Row>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>Gender*</Label>
                            <select
                              className="form-control"
                              value={this.state.gender}
                              onChange={this.changeHandler}
                              name="gender"
                            >
                              <option selected>--select--</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>DOB*</Label>
                            <Input
                              type="date"
                              required
                              name="dob"
                              maxLength="8"
                              value={this.state.dob}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>Primary Skills*</Label>

                            <Input
                              placeholder="Primary Skills"
                              name="primary_skills"
                              type="text"
                              value={this.state.primary_skills}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>All Skills*</Label>

                            <Input
                              placeholder="All Skills"
                              name="all_skills"
                              type="text"
                              value={this.state.all_skills}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>Language*</Label>

                            <Input
                              placeholder="language"
                              name="language"
                              type="text"
                              value={this.state.language}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>

                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>Experience in years*</Label>
                            <Input
                              type="text"
                              name="exp_in_years"
                              required
                              value={this.state.exp_in_years}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div class="form-group mtb-10">
                            <Label>
                              How many hours you can contribute daily?*
                            </Label>
                            <Input
                              type="text"
                              name="conrubute_hrs"
                              required
                              value={this.state.conrubute_hrs}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>Where did you hear about Astro ?*</Label>
                            <Input
                              type="text"
                              name="hear_abt_astrology"
                              value={this.state.hear_abt_astrology}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                        <Col md="12">
                          <p className="mb-0 mt-10">
                            Are you working on any other online platform?*
                          </p>
                          <Row>
                            <Col md="6">
                              <div className="form-group mtb-10">
                                <Label>Name of platform</Label>
                                <Input
                                  type="text"
                                  name="other_online_platform"
                                  value={this.state.other_online_platform}
                                  onChange={this.changeHandler}
                                />
                              </div>
                            </Col>
                            <Col md="6">
                              <div className="form-group mtb-10">
                                <Label>Monthly Earning</Label>
                                <Input type="text" />
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <button
                        className="btn btn-primary"
                        onClick={() => this.stepper.next()}
                      >
                        Next
                      </button>
                    </div>
                    <div id="test-l-3" className="content">
                      <Row>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>
                              Why do you think we should onboard you?*
                            </Label>
                            <Input
                              type="text"
                              required
                              name="why_onboard_you"
                              value={this.state.why_onboard_you}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>
                              What is a suitable time for interview*
                            </Label>
                            <Input
                              type="text"
                              required
                              name="suitable_tym_interview"
                              value={this.state.suitable_tym_interview}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>Which city do you currently live in?</Label>
                            <Input
                              type="text"
                              required
                              name="crnt_city"
                              value={this.state.crnt_city}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>

                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>Call Charge</Label>
                            <Input
                              type="text"
                              required
                              name="callCharge"
                              value={this.state.callCharge}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>
                              Main source of business (other than astrology)*
                            </Label>

                            <Input
                              placeholder="source of business"
                              name="income_src"
                              type="text"
                              value={this.state.income_src}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>Select your highest qualification*</Label>

                            <Input
                              placeholder="qualification"
                              name="highest_qualification"
                              type="text"
                              value={this.state.highest_qualification}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>Degree/Diploma*</Label>

                            <Input
                              placeholder="Degree/Diploma"
                              name="degree_deploma"
                              type="text"
                              value={this.state.degree_deploma}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>College/School/University*</Label>
                            <Input
                              type="text"
                              name="clg_scl_name"
                              required
                              value={this.state.clg_scl_name}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>From where did you learn Astrology?</Label>
                            <Input
                              type="text"
                              name="lrn_abt_astrology"
                              required
                              value={this.state.lrn_abt_astrology}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <Label>User Image</Label>
                          <Input
                            className="form-control"
                            type="file"
                            name="img"
                            onChange={this.onChangeHandler}
                          />
                        </Col>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>Instagram profile link</Label>
                            <Input
                              type="text"
                              name="insta_link"
                              required
                              value={this.state.insta_link}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>Facebook profile link</Label>
                            <Input
                              type="text"
                              name="fb_link"
                              required
                              value={this.state.fb_link}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>LinkedIn profile link</Label>
                            <Input
                              type="text"
                              name="linkedln_link"
                              required
                              value={this.state.linkedln_link}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>Youtube channel link</Label>
                            <Input
                              type="text"
                              name="youtube_link"
                              required
                              value={this.state.youtube_link}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>Name of the person who referred you?</Label>
                            <Input
                              type="text"
                              name="anybody_prefer"
                              required
                              value={this.state.anybody_prefer}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>
                              Minimum Earning Expectation from AstroVipra*
                            </Label>
                            <Input
                              type="text"
                              name="min_earning_expe"
                              required
                              value={this.state.min_earning_expe}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>
                              Maximum Earning Expectation from AstroVipra*
                            </Label>
                            <Input
                              type="text"
                              name="max_earning_expe"
                              required
                              value={this.state.max_earning_expe}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="form-group mtb-10">
                            <Label>Website profile link</Label>
                            <Input
                              type="text"
                              name="website_link"
                              required
                              value={this.state.website_link}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </Col>

                        <Col md="12">
                          <div className="form-group mtb-10">
                            <Label>Long bio*</Label>
                            <textarea
                              type="text"
                              className="form-control"
                              name="long_bio"
                              required
                              value={this.state.long_bio}
                              onChange={this.changeHandler}
                              placeholder="Please let us know more about you"
                            />
                          </div>
                        </Col>
                      </Row>
                      <p className="ptb-10">
                        You can reach out to us for Astrologer onboarding
                        support team at onboarding@astrovipra.com in case of any
                        issues or queries.
                      </p>
                      <Button type="submit" className="btn btn-primary mt-5">
                        Submit
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </section>
    );
  }
}

export default AstrologerSignup;
