import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  // Input,
  // InputGroup,
  // Form,
  // Button,
} from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
// import heroscope1 from "../../assets/img/heroscope/heroscope1.png";
// import astromob from "../../assets/img/astromob.png";
import axiosConfig from "../../axiosConfig";
class HoroscopeDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      categoryList: [],
    };
  }
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
  }

  render() {
    const { categoryList } = this.state;
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
                    <h1>{this.state.rashi_title}</h1>
                    <h3>{this.state.date}</h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section className="ptb-0">
          <Container>
            <Row>
              <Col lg="4">
                <div className="scope-st">
                  <h3>SELECT OTHER SIGN</h3>
                  <select className="form-control">
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
                  </select>
                  <div className="h-cate">
                    <h3>HOROSCOPES:</h3>
                    {categoryList.length
                      ? categoryList.map((cat) => {
                          return (
                            <ul>
                              <li>
                                <Link>{cat?.title}</Link>
                              </li>
                            </ul>
                          );
                        })
                      : null}
                  </div>
                </div>
              </Col>
              <Col lg="8">
                <div className="scope-1">
                  <h3>{this.state.rashi_title}</h3>
                  <p>{this.state.desc}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}

export default HoroscopeDetail;
