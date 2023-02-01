import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Input } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
// import AutoSearch from './autosearch'
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";

class UserRequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "",
      fullname: "",
      astroid: "",
      gender: "",
      tym_of_birth: "",
      birth_city: "",
      birth_state: "",
      birth_country: "",
      marital_status: "",
      occupation: "",
      topic_of_cnsrn: "",

      data: [],
    };
  }

  componentDidMount() {
    //  let { id } = this.props.match.params;
    //   console.log(id);
    let userId = JSON.parse(localStorage.getItem("user_id"));
    axiosConfig
      .get(`/user/viewoneuser/${userId}`)
      .then((response) => {
        // console.log("viewone_user", response.data.data);
        this.setState({
          // fullname: response.data.data.fullname,
          mobile: response.data.data.mobile,
          // gender: response.data.data.gender,
          // dob: response.data.data.dob,
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
    // let { id } = this.props.match.params;
    // console.log(id);
    let userId = JSON.parse(localStorage.getItem("user_id"));
    // let astroid = JSON.parse(localStorage.getItem("astroId"));
    let obj = {
      userid: userId,
      // astroId: astroid,
      //astroid: this.state.astroid,
      fullname: this.state.fullname,
      gender: this.state.gender,
      tym_of_birth: this.state.tym_of_birth,
      birth_city: this.state.birth_city,
      birth_state: this.state.birth_state,
      birth_country: this.state.birth_country,
      marital_status: this.state.marital_status,
      occupation: this.state.occupation,
      topic_of_cnsrn: this.state.topic_of_cnsrn,
      mobile: parseInt(this.state.mobile),

      // alt_mobile: parseInt(this.state.alt_mobile),
      // mobile: parseInt(this.state.mobile),
      // email: this.state.email,
    };
    axiosConfig
      .post(`/user/add_chat_intake`, {
        astroid: localStorage.getItem("astroId"),
      })
      .then((response) => {
        console.log("aaaaaaaaaaaa", response.data.data);
        swal("Success!", "Submitted SuccessFull!", "success");
        // window.location.reload("/allastrologerlist");
        // this.props.history.push("/allastrologerlist");
        this.props.history.push("/allMinRecharge");


      })

      .catch((error) => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  };
  render() {
    // const { viewoneUserData } = this.state;

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
                    <h1>Chat InTake Form</h1>
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
                  <h3>Chat InTake Form </h3>
                  <hr></hr>
                  <form onSubmit={this.submitHandler}>
                    <Row>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>First Name*</label>
                          <input
                            type="text"
                            name="fullname"
                            required
                            placeholder="Enter Your Fullname"
                            value={this.state.fullname}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>

                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Gender*</label>
                          <Input
                            type="select"
                            value={this.state.data.gender}
                            onChange={this.changeHandler}
                          >
                            <option>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                          </Input>
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Mobile Number*</label>
                          <input
                            type="number"
                            name="mobile"
                            value={this.state.mobile}
                            onChange={this.changeHandler}
                            // required
                            placeholder="Enter Your Number"
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
                            // required
                            placeholder="Enter Your Number"
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Time of Birth*</label>
                          <input
                            type="time"
                            name="tym_of_birth"
                            value={this.state.tym_of_birth}
                            onChange={this.changeHandler}
                            // required
                            placeholder="Enter Your Number"
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Place of Birth City*</label>
                          <input
                            type="text"
                            name="birth_city"
                            value={this.state.birth_city}
                            onChange={this.changeHandler}
                            // required
                            placeholder="Enter Your email"
                          />
                        </div>
                      </Col>

                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Place of Birth State*</label>
                          <input
                            type="text"
                            name="birth_state"
                            value={this.state.data.birth_state}
                            onChange={this.changeHandler}
                            // required
                            placeholder="Enter Your Number"
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Place of Birth Country*</label>
                          <input
                            type="text"
                            name="birth_country"
                            value={this.state.birth_country}
                            onChange={this.changeHandler}
                            // required
                            placeholder="Enter Your Number"
                          />
                        </div>
                      </Col>
                      {/* <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Marital Status*</label>
                          <Input
                            type="select"
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
                      </Col> */}
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Marital Status*</label>
                          <Input
                            type="select"
                            value={this.state.data.marital_status}
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
                            <option>Commodity trading consultation</option>
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
                            name="topic_of_cnsrn"
                            required
                            placeholder="Enter Your Fullname"
                            value={this.state.topic_of_cnsrn}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="12" className="mt-3">
                        <Button className="btn btn-warning">
                          Start chat with Mukesh07
                        </Button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}
export default UserRequestForm;
