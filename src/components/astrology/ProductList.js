import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
// import aboutimg from "../../assets/img/aboutimg.jpg";
// import aboutone from '../../assets/img/aboutone.png'
// import abouttwo from '../../assets/img/abouttwo.png'
import LayoutOne from "../../layouts/LayoutOne";
// import pagetitle from '../../assets/img/pagetitle.jpg'
// import FunFactOne from '../../wrappers/fun-fact/FunFactOne'
// import poojaone from '../../assets/img/pooja/pooja-1.jpg'
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
      .then((response) => {
        console.log("productbycategory", response.data);
        if (response.data.status === true) {
          this.setState({
            productList: response.data.data,
          });
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
                            <Col md="3" key={index}>
                              <div className="po-box text-center">
                                <Row>
                                  <Col md="12">
                                    <div className="po-1 text-center">
                                      <img
                                        src={product?.image[0]}
                                        alt="pooja"
                                        width="50%"
                                      />
                                    </div>
                                  </Col>
                                  <Col md="12">
                                    <div className="po-1 text-center">
                                      <h3>{product.title}</h3>
                                      <p>
                                        Puja Starting from @₹
                                        {product?.price ? product?.price : 0}
                                      </p>
                                      <Link
                                        to={"/poojadetail/" + product._id}
                                        className="pto-l text-center"
                                      >
                                        Book Now
                                      </Link>
                                    </div>
                                  </Col>
                                </Row>
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

export default ProductList;
