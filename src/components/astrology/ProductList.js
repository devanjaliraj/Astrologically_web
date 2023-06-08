import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import LayoutOne from "../../layouts/LayoutOne";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

import AutoSearch from "./autosearch";
import axiosConfig from "../../axiosConfig";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // data: {},
      productList: [],
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    console.log(id);
    axiosConfig
      .get(`/user/productbycategory/${id}`)
      // .get(`/user/productbycategory/64799dad576f08ea7789d670`)
      .then((response) => {
        console.log("productbycategory", response.data.data);
        this.setState({
          productList: response.data.data,
        });
        if (response.data.status === true) {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { productList } = this.state;
    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              // backgroundColor: '#ffcc01',
              // width: '100%',
              // padding: '70px 0px',
              // backgroundSize: 'cover',
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
                    <h1>Online-puja Products</h1>
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
                    {productList.length
                      ? productList.map((product, index) => {
                          return (
                            <>
                              <Col md="3" key={index}>
                                <div className="po-box text-center">
                                  <Row>
                                    <Col md="12">
                                      <div className="po-1 text-center">
                                        <img
                                          src={product?.product?.image}
                                          alt="pooja"
                                          width="250px"
                                          height="200px"
                                        />
                                      </div>
                                    </Col>
                                    <Col md="12">
                                      <div className="po-1 mt-1 mb-1 text-center">
                                        <h3>{product.product?.title}</h3>
                                        <p>
                                          Puja Price
                                          {product?.price
                                            ? product?.product?.price
                                            : 0}{" "}
                                          Rs/-
                                        </p>
                                        <Link
                                          to={
                                            "/poojadetail/" +
                                            product?.product?._id
                                          }
                                          className="pto-l text-center"
                                        >
                                          Book Now
                                        </Link>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              </Col>
                              {/* <Col>
                                <Row>
                                  <div className="container">
                                    <h4>
                                      <b>{product?.title}</b>
                                    </h4>
                                    <h5>{product?.productname}</h5>
                                    <h6>{ReactHtmlParser(product?.desc)}</h6>
                                    <h5> Price:-{product?.product?.price} /-</h5>
                                  </div>
                                </Row>
                              </Col> */}
                            </>
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

export default ProductList;
