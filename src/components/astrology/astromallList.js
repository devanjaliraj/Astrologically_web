import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
// import aboutimg from "../../assets/img/aboutimg.jpg";
// import aboutone from "../../assets/img/aboutone.png";
// import abouttwo from "../../assets/img/abouttwo.png";
import LayoutOne from "../../layouts/LayoutOne";
// import pagetitle from "../../assets/img/pagetitle.jpg";
// import FunFactOne from "../../wrappers/fun-fact/FunFactOne";
// import poojaone from "../../assets/img/pooja/pooja-1.jpg";
import AutoSearch from "./autosearch";
import axiosConfig from "../../axiosConfig";
import ReactHtmlParser from "react-html-parser";
class AstromallList extends React.Component {
  constructor() {
    super();
    this.state = {
      procategory: [],
    };
  }

  componentDidMount = () => {
    axiosConfig
      .get("/admin/getproductcalegory")
      .then((response) => {
        console.log(response.data);
        if (response.data.status === true) {
          this.setState({ procategory: response.data.data });
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });
  };
  render() {
    const { procategory } = this.state;
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
                    <h1>Astromall Shop</h1>
                    <h3>Shop Best Online Astrology Products And Services</h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section className="ptb-0">
          <Container>
            <Row>
              <Col lg="12">
                <div className="pt-10 pb-50">
                  <AutoSearch />
                  <Row>
                    {procategory.length
                      ? procategory.map((procat, index) => {
                          return (
                            <Col key={index} md="4">
                              <div className="po-box">
                                <Link to={"/productlist/" + procat._id}>
                                  <Row>
                                    <Col md="4">
                                      <div className="po-1">
                                        <img
                                          src={procat.img}
                                          alt="image"
                                          width="100%"
                                        />
                                      </div>
                                    </Col>
                                    <Col md="8">
                                      <div className="po-1">
                                        <h3>{procat.name}</h3>
                                        <p>{ReactHtmlParser(procat.desc)}</p>
                                      </div>
                                    </Col>
                                  </Row>
                                </Link>
                              </div>
                            </Col>
                          );
                        })
                      : null}
                  </Row>
                </div>
              </Col>
              <Col lg="6">
                {/* <div className="abo-2">
                                  <img src={aboutone} alt="" className="about-img"></img>
                            </div> */}
              </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}

export default AstromallList;
