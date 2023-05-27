import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import textbottom from "../../assets/img/textbottom.png";
import axiosConfig from "../../axiosConfig";

class SectionPooja extends React.Component {
  state = {
    productList: [],
  };
  componentDidMount() {
    axiosConfig.get(`/admin/getProduct`).then((res) => {
      console.log(res);
      this.setState({ productList: res.data.data });
    });
  }
  render() {
    const { productList } = this.state;
    return (
      <Container>
        <div className="heading mt-40">
          <h2>Our Trending Products</h2>
          <img src={textbottom} alt="" />
        </div>
        <Row>
          <div className="col-lg-12 col-md-12 mb-30">
            <div className="category-home">
              <section className="pt-0">
                <div className="container">
                  <Row>
                    {this.state.productList.length
                      ? productList.map((product, index) => {
                          return (
                            <Col md="3">
                              <div className="product-grid8">
                                <div class="product-image8">
                                  <Link to="/poojadetail">
                                    <img
                                      style={{ borderRadius: "8px" }}
                                      width={250}
                                      height={250}
                                      src={product.image}
                                      alt=""
                                      className="Ptd-img"
                                    />
                                  </Link>
                                </div>
                                <div className="product-content">
                                  <div className="price">
                                    <i class="fa fa-inr" aria-hidden="true"></i>{" "}
                                    {product.price}
                                  </div>
                                  <h3 className="title">
                                    <Link>{product.productname} </Link>
                                  </h3>
                                  <Link
                                    to={"/astromallList"}
                                    className="all-deals"
                                  >
                                    View More
                                    <i class="fa fa-angle-right icon"></i>
                                  </Link>
                                </div>
                              </div>
                            </Col>
                          );
                        })
                      : null}
                  </Row>
                </div>
              </section>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}
export default SectionPooja;
