import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Input,
  InputGroup,
  Form,
  Button,
} from "reactstrap";
// import Pj from "../../../assets/img/pj.gif";
import "../../../assets/scss/astropooja.css";
import girl from "../../../assets/img/girl.png";
import boy from "../../../assets/img/boy-img.png";

import LayoutOne from "../../../layouts/LayoutOne";
import { Table } from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import swal from "sweetalert";
// import { useLocation } from "react-router-dom";

class KundaliMatchList extends React.Component {
  constructor(props) {
    super(props);
    // const location = useLocation();

    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    this.setState({ data: this.props.location.state });
    console.log(this.props.location.state);
  }
  render() {
    // const { matchmakingreport } = this.state;
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
                    <h1>Kundli Matching Details</h1>
                    {/* <h3>Kundli Matching Details</h3> */}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section>
          <Container>
            <div className="mat-main">
              <h3>Horoscope Matching</h3>
              <Row>
                <Col md="4">
                  <div className="mat-box">
                    <h3>Basic Details</h3>
                    <Table striped>
                      <thead>
                        <tr>
                          <th>Male</th>
                          <th>Female</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{this.state.data?.male}</td>

                          <td>{this.state.data?.female}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Col>
                <Col md="4">
                  <div className="mat-box">
                    <h3>Ashtakoot</h3>
                    <Table striped>
                      <thead>
                        <tr>
                          <th>Received Point</th>
                          <th>NO of points </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Points</td>

                          <td>
                            {this.state.data?.data?.ashtakoota?.received_points}
                            /36
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Col>
                {/* <Col md="4">
                  <div className="mat-box">
                    <h3>Dashakoot</h3>
                    <Table striped>
                      <thead>
                        <tr>
                          <th>Attribute</th>
                          <th>Description </th>
                          <th>Matching Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Col> */}
              </Row>

              <div className="bx-conclusion">
                <Row>
                  <h2 className="mb-20 mat">Conclusion</h2>
                  <Row className="mt-1 mb-2">
                    <p>{this.state.data?.data?.conclusion?.match_report}</p>
                  </Row>
                  {/* <Col md="6">
                    <div className="matbox">
                      <div className="matbox-1">
                        <h2>50%</h2>
                      </div>
                      <div className="matbox-2">
                        <h3>Ashtakoot</h3>
                        <p>
                          Ashtakoot Matching between male and female is 21.5
                          points out of 36 points. This is the medium score.
                          Hence, marriage can be approved.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="matbox">
                      <div className="matbox-1">
                        <h2>50%</h2>
                      </div>
                      <div className="matbox-2">
                        <h3>Dashakoot</h3>
                        <p>
                          Dashakoot Matching between male and female is 18
                          points out of 36 points. This is the medium score.
                          Hence, marriage can be approved.
                        </p>
                      </div>
                    </div>
                  </Col> */}
                </Row>
              </div>

              <div className="bx-conclusion">
                <Row>
                  <h2 className="mb-20 mat">Manglik Report</h2>
                  <Col md="6">
                    <div className="matbox">
                      <div className="matbox-1 mg">
                        <img src={boy} alt="" />
                      </div>
                      <div className="matbox-2">
                        <p>Name: {this.state.data?.male}</p>
                        <p>
                          Manglik Status:{" "}
                          <span className="sp-mat">
                            {" "}
                            {this.state.data?.data?.manglik?.male_percentage}%
                          </span>
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="matbox">
                      <div className="matbox-1 mg">
                        <img src={girl} alt="" />
                      </div>
                      <div className="matbox-2">
                        <p>Name: {this.state.data?.female}</p>

                        <p>
                          Manglik Status:{" "}
                          <span className="sp-mat">
                            {" "}
                            {
                              this.state.data?.data?.manglik?.female_percentage
                            }{" "}
                            %
                          </span>
                        </p>
                        {/* <p>
                          You are not Manglik, which does not lead to any
                          problems.
                        </p> */}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}

export default KundaliMatchList;
