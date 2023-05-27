import React from "react";
import { Container, Row, Col, Input, Button } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";

class Dailyhors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    let { id } = this.props.match.params;
    this.setState({ zodiacName: id });
    let payload = { zodiacName: id };
    axiosConfig
      .post(`/user/weeklyHoroscope`, payload)
      .then((response) => {
        console.log("dailyHoroscope", response.data.data);
        this.setState({ dailyHoroscope: response.data.data });
      })
      .catch((error) => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  }
  submitHandler = (e) => {
    e.preventDefault();
    let payload = { zodiacName: this.state.zodiacName };
    axiosConfig
      .post(`/user/dailyhoroscope`, payload)
      .then((response) => {
        console.log("dailyHoroscope", response.data.data);
        this.setState({ dailyHoroscope: response.data.data });
        // console.log("dailyHoroscope1", response.data.data);
        // swal("Success!", "Submitted SuccessFull!", "success");
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
                    <h1>Daily Horoscope</h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section className="ptb-0">
          <Container>
            <form onSubmit={this.submitHandler}>
              <Row className="mt-b mb-4">
                <Col lg="4">
                  <div className="scope-st">
                    <h3>SELECT SIGN</h3>
                    <Input
                      className="form-control"
                      type="select"
                      name="zodiacName"
                      placeholder="Enter rashi"
                      value={this.state.zodiacName}
                      onChange={this.changeHandler}
                    >
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
                    <Button className="btn btn-warning">submit</Button>
                  </div>
                </Col>
                <Col lg="8">
                  {dailyHoroscope.status == false ? null : (
                    <>
                      <div className="scope-1">
                        <h3>Rashi Name:-:{dailyHoroscope?.sun_sign}</h3>
                        <h3>Date:{dailyHoroscope?.prediction_date}</h3>

                        <h3>Emoptions</h3>
                        <p>{dailyHoroscope?.prediction?.emotions}</p>

                        <h3>Health</h3>
                        <p>{dailyHoroscope?.prediction?.health}</p>

                        <h3>Luck</h3>
                        <p>{dailyHoroscope?.prediction?.luck}</p>

                        <h3>Personnel life</h3>
                        <p>{dailyHoroscope?.prediction?.personal_life}</p>

                        <h3>Professional</h3>
                        <p>{dailyHoroscope?.prediction?.profession}</p>

                        <h3>Travel</h3>
                        <p>{dailyHoroscope?.prediction?.travel}</p>
                      </div>
                    </>
                  )}
                </Col>
              </Row>
            </form>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}
export default Dailyhors;
