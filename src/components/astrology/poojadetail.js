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
import Pj from "../../assets/img/Pj.jpg";
import "../../assets/scss/astropooja.css";
import pagetitle from "../../assets/img/pagetitle.jpg";
import LayoutOne from "../../layouts/LayoutOne";
import axiosConfig from "../../axiosConfig";
import ReactHtmlParser from "react-html-parser";

class PoojaDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    localStorage.setItem("product_id", id);
    axiosConfig
      .get(`/admin/viewoneProduct/${id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          data: response.data.data,
          image: response.data.data.image[0],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
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
                    <h1>Product Detail</h1>
                    {/* <h3></h3> */}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <Container>
          <Row>
            <Col md="12">
              <Card className="mb-50">
                <Row>
                  <Col md="4">
                    <div className="preview-pic tab-content">
                      <img src={this.state?.image} alt="" width="100%" />
                    </div>
                  </Col>
                  <Col md="8">
                    <div className="details">
                      <h3 className="product-title">
                        {this.state.data.productname}
                      </h3>
                      <p>{ReactHtmlParser(this.state.data.desc)}</p>
                      <h4 className="price">
                        Starting From: <span>${this.state.data.price}</span>
                      </h4>

                      <div class="action">
                        <Link to={"/consultantlist/" + this.state.data._id}>
                          <button
                            className="add-to-cart btn btn-default"
                            type="button"
                          >
                            Book Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </LayoutOne>
    );
  }
}

export default PoojaDetail;
