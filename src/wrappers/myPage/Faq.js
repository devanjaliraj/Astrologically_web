import React, { Component } from "react";
import LayoutOne from "../../layouts/LayoutOne";
// import Cloth from "../../assets/img/Cloth.jpg";
import { Container, Row, ListGroup } from "reactstrap";
import textbottom from "../../assets/img/textbottom.png";
import { Col } from "reactstrap";
import Accordion from "react-bootstrap/Accordion";
import axiosConfig from "../../axiosConfig";
import ReactHtmlParser from "react-html-parser";

export default class privacyPolicy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    axiosConfig
      .get(`/admin/faq_list`)
      .then((res) => {
        console.log(res.data.data);
        this.setState({ data: res.data.data });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
  render() {
    return (
      <LayoutOne headerTop="visible">
        <Container fluid>
          <Row className="mb-5">
            {/* <div
              className="d-flex justify-content-center align-items-center"
              style={{
                backgroundImage: `url(${Cloth})`,
                height: "70vh",
                width: "100%",
              }}
            > */}
            <div className="headingtitle text-center ptb-40">
              <h2>FAQS FOR AstroVipra</h2>
              <img src={textbottom} alt="" className="sb-img" />
            </div>
          </Row>
          <Container>
            <Row className="">
              <Col xs lg="2"></Col>
              <Col xs lg="8">
                {this.state.data.length > 0 ? (
                  <>
                    {this.state.data?.map((value, i) => (
                      <>
                        <Accordion key={i}>
                          <Accordion.Item eventKey={i} className="">
                            <Accordion.Header>{value?.title}</Accordion.Header>
                            <Accordion.Body>
                              {ReactHtmlParser(value?.desc)}
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>

                        <br></br>
                      </>
                    ))}
                  </>
                ) : null}
              </Col>
              <Col xs lg="2"></Col>
            </Row>
          </Container>
        </Container>
      </LayoutOne>
    );
  }
}
