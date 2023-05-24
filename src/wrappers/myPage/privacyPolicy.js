import React, { Component } from "react";
import LayoutOne from "../../layouts/LayoutOne";
// import Cloth from "../../assets/img/Cloth.jpg";
import { Container, Row, ListGroup } from "reactstrap";
import textbottom from "../../assets/img/textbottom.png";
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
      .get(`/admin/getPrivcyPolicy`)
      .then((res) => {
        // console.log(res.data.data);
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
              <h2>Privacy Policy</h2>
              <img src={textbottom} alt="" className="sb-img" />
            </div>
          </Row>
          <Container>
            <Row>
              <ListGroup>
                {this.state.data.length > 0 ? (
                  <>
                    {this.state.data?.map((value) => (
                      <>
                        <h3 key={value?._id} style={{ fontWeight: "500" }}>
                          {value?.title}
                        </h3>
                        <p>{ReactHtmlParser(value?.desc)}</p>
                        <br></br>
                      </>
                    ))}
                  </>
                ) : null}

                <p>
                  Our prices do not vary according to the market needs,
                  competitor pricing etc.
                </p>
                <br></br>
                <br></br>
              </ListGroup>
            </Row>
          </Container>
        </Container>
      </LayoutOne>
    );
  }
}
