import React, { Component } from "react";
import LayoutOne from "../../layouts/LayoutOne";
// import Cloth from "../../assets/img/Cloth.jpg";
import { Container, Row, ListGroup } from "reactstrap";
import textbottom from "../../assets/img/textbottom.png";
import axiosConfig from "../../axiosConfig";
import ReactHtmlParser from "react-html-parser";

export default class TermsOfUse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    axiosConfig
      .get(`/admin/get_term_cond`)
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
        <Container fluid className="mb-4">
          <Row className="mb-5">
            {/* <div
              className="d-flex justify-content-center align-items-center"
              style={{
                backgroundImage: `url(${Cloth})`,
                height: "70vh",
                width: "100%",
              }}
            >
              <div className="">
                <h1 className="text-light text-center">Terms Of Use</h1>
              </div>
            </div> */}

            <div className="headingtitle text-center ptb-40">
              <h2>Terms and Conditions</h2>
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
                        <div key={value?._id}>
                          {ReactHtmlParser(value?.desc)}
                        </div>
                      </>
                    ))}
                  </>
                ) : null}

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
