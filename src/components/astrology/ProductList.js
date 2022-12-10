import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
// import aboutimg from "../../assets/img/aboutimg.jpg";
// import aboutone from '../../assets/img/aboutone.png'
// import abouttwo from '../../assets/img/abouttwo.png'
import LayoutOne from '../../layouts/LayoutOne'
// import pagetitle from '../../assets/img/pagetitle.jpg'
// import FunFactOne from '../../wrappers/fun-fact/FunFactOne'
// import poojaone from '../../assets/img/pooja/pooja-1.jpg'
import AutoSearch from './autosearch'
import axiosConfig from '../../axiosConfig'

class ProductList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // data: {},
      productList: [],
    }
  }
  componentDidMount() {
    let { id } = this.props.match.params
    console.log(id)
    axiosConfig
      .get(`/user/productbycategory/${id}`)
      .then((response) => {
        console.log('productbycategory', response.data)
        if (response.data.status === true) {
          this.setState({
            productList: response.data.data,
          })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    const { productList } = this.state
    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              backgroundColor: '#FFD59E',
              width: '100%',
              padding: '70px 0px',
              backgroundSize: 'cover',
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
                            <Col md="4" key={index}>
                              <div className="po-box">
                                <Row>
                                  <Col md="4">
                                    <div className="po-1">
                                      <img
                                        src={product?.image[0]}
                                        alt="pooja"
                                        width="100%"
                                      />
                                    </div>
                                  </Col>
                                  <Col md="8">
                                    <div className="po-1">
                                      <h3>{product.title}</h3>
                                      <p>
                                        Puja Starting from @₹
                                        {product?.price ? product?.price : 0}
                                      </p>
                                      <Link
                                        to={'/poojadetail/' + product._id}
                                        className="pto-l"
                                      >
                                        Book Now
                                      </Link>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </Col>
                          )
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
    )
  }
}

export default ProductList
