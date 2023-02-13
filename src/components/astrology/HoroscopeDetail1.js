import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Input,
  Button
} from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";

import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
class HoroscopeDetail1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      data: {},
      categoryList: [],
      zodiacName: "",
      sun_sign: "",
      prediction_date: "",
      dailyHoroscope: {},


    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {
    axiosConfig
      .get("/admin/getallCategory")
      .then((response) => {
        console.log(response.data);
        if (response.data.status === true) {
          this.setState({ categoryList: response.data.data });
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });

    let { id } = this.props.match.params;
    this.setState({ zodiacName: id })
    // console.log(id);
    axiosConfig
      .get(`/admin/getoneRashi/${id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          rashi_title: response.data.data.rashi_title,
          desc: response.data.data.desc,
          date: response.data.data.date,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    let payload = {
      zodiacName: id
    };
    axiosConfig
      .post(`/user/weeklyHoroscope`, payload)
      .then((response) => {
        console.log("dailyHoroscope", response.data.data.prediction);
        this.setState({ dailyHoroscope: response.data.data });
      })

      .catch((error) => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  }




  submitHandler = (e) => {
    e.preventDefault();

    let payload = {
      zodiacName: this.state.zodiacName
    };
    axiosConfig
      .post(`/user/weeklyHoroscope`, payload)
      .then((response) => {
        console.log("dailyHoroscope", response.data);
        this.setState({ dailyHoroscope: response.data.data });
        console.log("dailyHoroscope1", response.data);

        // this.setState({ dailyHoroscope: response.prediction?.data.data });


        swal("Success!", "Submitted SuccessFull!", "success");
        // window.location.reload("/allastrologerlist");
        // this.props.history.push("/allastrologerlist");
        // this.props.history.push("/allMinRecharge");


      })

      .catch((error) => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  };

  render() {
    const { dailyHoroscope } = this.state;
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
                    <h1>{dailyHoroscope?.sun_sign}</h1>
                    <h3>{dailyHoroscope?.prediction_date}</h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section className="ptb-0">
          <Container>
            <form onSubmit={this.submitHandler}>
              <Row>
                <Col lg="4">
                  <div className="scope-st">
                    <h3>SELECT OTHER SIGN</h3>

                    <Input className="form-control"
                      type="select"
                      name="zodiacName"
                      placeholder="Enter rashi"
                      value={this.state.zodiacName}
                      onChange={this.changeHandler}>

                      <option value="select">---Select---</option>
                      <option value="aries">Aries</option>
                      <option value="taurus">Taurus</option>
                      <option value="gemini">Gemini</option>
                      <option value="cancer">Cancer</option>
                      <option value="leo">Leo</option>
                      <option value="virgo">Virgo</option>
                      <option value="libra">Libra</option>
                      <option value="scorpio">Scorpio</option>
                      <option value="sagittarius">Sagittarius</option>
                      <option value="capricorn">Capricorn</option>
                      <option value="aquarius">Aquarius</option>
                      <option value="pisces">Pisces</option>
                    </Input>

                    <Button className="btn btn-warning">
                      submit

                    </Button>
                    {/* <div className="h-cate">
                      <h3>HOROSCOPES:</h3>

                      <ul>
                        <li>
                          <p>{ }</p>
                        </li>
                      </ul>

                    </div> */}
                  </div>
                </Col>
                <Col lg="8">

                  <div className="scope-1">

                    <h3>Start Date</h3>
                    <p>{dailyHoroscope.prediction_start_date}</p>
                    <h3>End Date</h3>
                    <p>{dailyHoroscope.prediction_end_date}</p>

                    <h3>prediction</h3>
                    <p>{dailyHoroscope.prediction}</p>
                  </div>
                </Col>
              </Row>
            </form>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}

export default HoroscopeDetail1;
