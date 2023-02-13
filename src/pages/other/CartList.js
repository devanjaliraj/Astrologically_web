import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import LayoutOne from '../../layouts/LayoutOne'
import '../../assets/scss/astroteam.scss'
import { Table } from 'reactstrap'
import pay1 from '../../assets/img/icon-img/pay-1.png'
// import pay2 from '../../assets/img/icon-img/pay-2.png'
import pay3 from '../../assets/img/icon-img/pay-3.png'
import pay4 from '../../assets/img/icon-img/pay-4.png'
import pay5 from '../../assets/img/icon-img/pay-5.png'
import pay6 from '../../assets/img/icon-img/pay-6.png'
import swal from 'sweetalert'
import axiosConfig from '../../axiosConfig'
import ReactHtmlParser from 'react-html-parser'

class CartList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      astroId: '',
      userId: '',
      productid: '',
      shipping_address: '',
      gstotal: '',
      total_amt: '',
      data: {},
      addtoCart: [],
      dataCart: [],
      shippingId: '',
      gst: '',
      cartdata: {},
    }
  }
  componentDidMount() {
    let { id } = this.props.match.params
    let productId = localStorage.getItem('product_id')
    let astroId = localStorage.getItem('astro_id')
    let userId = localStorage.getItem('user_id')
    let shippingId = localStorage.getItem('shipping_id')
    // let { shippingId } = this.props.match.params
    axiosConfig
      .get(`/user/product_consltnt_list/` + productId)
      .then((response) => {
        console.log('sdfhshgfsghhghggjghggjgjgg', response.data?.data)
        this.setState({
          data: response.data.data,

          price: response.data?.price,
        })
      })
      .catch((error) => {
        console.log(error.response.data)
      })

    // let { id } = this.props.match.params
    // console.log('sghedgjghjk', id)

    axiosConfig
      .get(`/user/getoneCart/${id}`)
      .then((response) => {
        console.log(response.data.data)
        this.setState({
          dataCart: response.data.data,
          fullname: response.data.data.fullname,
          // image: response.data.data.image[0],
          // gst: response.data.data.gst,
        })
      })
      .catch((error) => {
        console.log(error.response.data.data)
      })
    localStorage.setItem("shipping_id", id);


    axiosConfig
      .get(`/user/getone_address/${shippingId}`)
      .then((response) => {
        //console.log('@@@@new', response?.data?.data[0]?.userid?._id)
        // localStorage.setItem(
        //   'shipping_id',
        //   response?.data?.data[0]?.userid?._id,
        // )
        alert(response?.data?.data[0]?.userid?._id)
        this.setState({
          shippingId: response?.data?.data[0]?.userid?._id,
        })
      })
      .catch((error) => {
        console.log(error)
      })

    // let { productId } = this.props.match.params;

    //shippingId = this.state.shippingId //localStorage.getItem('shipping_id')
    console.log(productId)
    axiosConfig
      .get(`/admin/viewoneProduct/` + productId)
      .then((response) => {
        //console.log(response.data.data)
        this.setState({
          productname: response.data.data.productname,
          desc: response.data.data.desc,
          image: response.data.data.image[0],
          gst: response.data.data.gst,
          price: response.data?.data?.price,
        })
      })
      .catch((error) => {
        console.log(error.response.data.data)
      })

    // new work

    let obj = {
      astroId: astroId,
      userId: userId,
      productId: productId,
      shippingId: shippingId,
      // orderId: this.state.orderId,
      price: this.state.price,
    }

    axiosConfig
      .post(`/user/addtoCart`, obj)
      .then((response) => {
        console.log('addtoCart', response.data.data)
        this.setState({
          addtoCart: response.data.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  submitHandler = (e) => {
    e.preventDefault()
    // let { id } = this.props.match.params
    // console.log(id)
    let astroid = JSON.parse(localStorage.getItem('astro_id'))
    let userid = JSON.parse(localStorage.getItem('user_id'))
    let shippingid = JSON.parse(localStorage.getItem('shipping_id'))
    let productId = localStorage.getItem('product_id')
    let obj = {
      astroId: astroid,
      userId: userid,
      productId: productId,
      shippingId: shippingid,
      //   mobile: parseInt(this.state.mobile),
      //   email: this.state.email,
      // gstotal: this.state.gstotal,
      // total_amt: this.state.total_amt,
      // fullname: this.state.fullname,
      // gst: this.state.gst,
    }

    axiosConfig
      .post(`/user/addtoCart`, obj)
      .then((response) => {
        console.log('@@@@@', response.data.data.data)
        swal('Success!', 'Submitted SuccessFull!', 'success')
        window.location.reload('/addressForm')
      })

      .catch((error) => {
        swal('Error!', 'You clicked the button!', 'error')
        console.log(error)
      })
  }
  render() {
    const { data } = this.state;

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
                    <h1>Order Review</h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="12">
                <div className="order-view">
                  <h4>ORDER REVIEW</h4>
                  <Table striped className="">
                    <thead>
                      <tr>
                        {/* <th># S. No.</th> */}
                        <th>PRODUCT</th>
                        {/* <th>Product Name</th> */}
                        <th>ASTROLOGER</th>
                        <th>ADDRESS</th>
                        <th>AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {/* <th scope="row">1</th> */}
                        <td>
                          {' '}
                          <img src={this.state?.image} alt="" width="40%" />
                          <br />
                          {/* <span>{this.state.price}</span> */}
                          <br />
                          <span>{this.state.productname}</span>
                          <br />
                          <span>{ReactHtmlParser(this.state.desc)}</span>
                        </td>
                        <td>{data.price}</td>
                        {/* <td>Rajverdhan Shastriji</td>
                        <td>indore</td> */}
                        <td>
                          {' '}
                          <p></p>
                        </td>
                        <td>
                          <Link className="Tansdel">
                            {' '}
                            {this.state.addtoCart.total_amt -
                              this.state.addtoCart.gst}
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
              <Col lg="4">
                <div className="order-bx">
                  <h3 className="py-3">Total Amount</h3>
                  <hr></hr>
                  <ul>
                    <li>
                      Order Subtotal
                      <span>
                        {' '}
                        {this.state.addtoCart.total_amt -
                          this.state.addtoCart.gst}
                      </span>
                    </li>
                    <li>
                      Payable Amount
                      <span>
                        {this.state.addtoCart.total_amt -
                          this.state.addtoCart.gst}
                      </span>
                    </li>
                    <li>
                      GST @18%
                      <span>{this.state.addtoCart.gst}</span>
                    </li>
                    <li>
                      Total Payable Amount
                      <span>{this.state.addtoCart.total_amt}</span>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg="8" className="py-5">
                <Row>
                  <Col md="4">
                    <div className="rv-1 my-2">
                      <Link>
                        <img src={pay1} alt="" />
                        <p>UPI</p>
                      </Link>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="rv-1 my-2">
                      <Link>
                        <img src={pay3} alt="" />
                        <p>Debit Card</p>
                      </Link>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="rv-1 my-2">
                      <Link>
                        <img src={pay3} alt="" />
                        <p>Credit Card</p>
                      </Link>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="rv-1 my-2">
                      <Link>
                        <img src={pay4} alt="" />
                        <p>Net Banking</p>
                      </Link>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="rv-1 my-2">
                      <Link>
                        <img src={pay5} alt="" />
                        <p>Other Wallet</p>
                      </Link>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="rv-1 my-2">
                      <Link>
                        <img src={pay6} alt="" />
                        <p>Other Wallet</p>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    )
  }
}

export default CartList
