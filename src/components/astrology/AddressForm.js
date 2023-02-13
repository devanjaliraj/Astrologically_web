import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap'
import LayoutOne from '../../layouts/LayoutOne'
// import AutoSearch from './autosearch'
import axiosConfig from '../../axiosConfig'
import swal from 'sweetalert'

class AddressForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      mobile: '',
      email: '',
      userid: '',
      alt_mobile: '',
      flat_no: '',
      locality: '',
      city: '',
      state: '',
      country: '',
      pincode: '',
      landmark: '',
      data: [],
      viewoneAddressData: [],
    }
  }
  componentDidMount() {


    let userId = JSON.parse(localStorage.getItem('user_id'))

    axiosConfig
      .get(`/user/viewone_address/${userId}`)
      .then((response) => {
        //localStorage.setItem('shipping_id', response?.data?.data[0]?._id)
        console.log('viewone_address', response.data.data)
        this.setState({
          viewoneAddressData: response.data.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value })
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  submitHandler = (e) => {
    e.preventDefault()
    // let { id } = this.props.match.params
    // console.log(id)
    let userId = JSON.parse(localStorage.getItem('user_id'))

    let astroid = JSON.parse(localStorage.getItem('astroId'))
    let userid = localStorage.getItem('user_id')
    let shippingaddress = JSON.parse(localStorage.getItem('shipping_address'))
    let productid = JSON.parse(localStorage.getItem('productid'))
    let obj = {
      astroId: astroid,
      userId: userid,
      productId: productid,
      shipping_address: shippingaddress,
      userid: userId,
      alt_mobile: parseInt(this.state.alt_mobile),
      flat_no: parseInt(this.state.flat_no),
      locality: this.state.locality,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      pincode: this.state.pincode,
      landmark: this.state.landmark,
      name: this.state.name,
      mobile: parseInt(this.state.mobile),
      email: this.state.email,

    }

    axiosConfig
      .post(`/user/add_shipping_address`, obj)
      .then((response) => {
        console.log('@@@@@', response.data.data)
        //localStorage.setItem('shipping_id', response?.data?.data[0]?._id)
        swal('Success!', 'Submitted SuccessFull!', 'success')
        window.location.reload('/addressForm')
      })

      .catch((error) => {
        swal('Error!', 'You clicked the button!', 'error')
        console.log(error)
      })

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


  addressDelete = (id) => {
    axiosConfig
      .get('/user/dlt_address/' + id)
      .then((response) => {
        console.log('@@@@@', response.data.data)
        swal('Success!', 'Address SuccessFull! Deleted', 'success')
        window.location.reload(true)
      })

      .catch((error) => {
        swal('Error!', 'You clicked the button!', 'error')
        console.log(error)
      })
  }

  render() {
    const { viewoneAddressData } = this.state
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
                    <h1>
                      Astromall Shop/ Product Detail/ Consultant List/ Address
                    </h1>
                    <h3>Shop Best Online Astrology Products And Services</h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section className="">
          <Container>
            <div className="multi-address">
              <Row>
                {viewoneAddressData.length
                  ? viewoneAddressData.map((address) => {
                    return (
                      <Col lg="6" className="mb-20">
                        <div className="wal-amt">
                          <h3>
                            Continue with your saved address
                            <span>
                              <Link
                                to={'/addressformedit/' + address?._id}
                                className=""
                              >
                                <i className="pe-7s-note ad-edit" />
                              </Link>
                              <Link
                                onClick={() =>
                                  this.addressDelete(address?._id)
                                }
                                className=" "
                              >
                                <i className="pe-7s-trash ad-del" />
                              </Link>
                            </span>
                          </h3>
                          <hr></hr>
                          <div className="user-pro py-0">
                            <ul>
                              <li>
                                Name : <span>{address?.name}</span>
                              </li>
                              <li>
                                Mobile : <span>{address?.mobile}</span>
                              </li>
                              <li>
                                Email : <span>{address?.email}</span>
                              </li>
                              <li>
                                Address :
                                <span>
                                  {address?.flat_no +
                                    ',' +
                                    address?.locality +
                                    ',' +
                                    address?.city +
                                    '(' +
                                    address.pincode +
                                    ')'}
                                </span>
                              </li>
                              <li>
                                City : <span>{address?.city}</span>
                              </li>
                              <li>
                                State : <span>{address?.state}</span>
                              </li>

                              <li>
                                Locality : <span>{address?.locality}</span>
                              </li>
                              <li>
                                Pin Code :{' '}
                                <span>
                                  {address?.pincode ? address?.pincode : 'NA'}
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="py-3 text-center">
                            <Link to={'/cartlist/' + address?._id}>
                              {/* <Link to={'/cartlist/' + this.props.match.params.id}> */}

                              <Button className="btn btn-warning">
                                Deliver To This Address{' '}
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </Col>
                    )
                  })
                  : null}
              </Row>
            </div>
            <Row>
              <Col lg="12">
                <div className="wal-amt">
                  <h3>Add New Address </h3>
                  <hr></hr>
                  <form onSubmit={this.submitHandler}>
                    <Row>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Name*</label>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Enter Your Fullname"
                            value={this.state.name}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Email address*</label>
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="Enter Your email"
                            value={this.state.email}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Mobile Number*</label>
                          <input
                            type="number"
                            name="mobile"
                            required
                            placeholder="Enter Your Number"
                            value={this.state.mobile}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Alternative Number*</label>
                          <input
                            type="text"
                            name="alt_mobile"
                            required
                            placeholder="Enter Your Number"
                            value={this.state.alt_mobile}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Flat No:*</label>
                          <input
                            type="text"
                            name="flat_no"
                            required
                            placeholder="Enter Your Number"
                            value={this.state.flat_no}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Locality*</label>
                          <input
                            type="text"
                            name="locality"
                            required
                            placeholder="Enter Your Number"
                            value={this.state.locality}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>City*</label>
                          <input
                            type="text"
                            name="city"
                            required
                            placeholder="Enter Your Number"
                            value={this.state.city}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>State / Province*</label>
                          <input
                            type="text"
                            name="state"
                            required
                            placeholder="Enter Your state"
                            value={this.state.state}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Country*</label>
                          <input
                            type="text"
                            name="country"
                            required
                            placeholder="Enter Your Country"
                            value={this.state.country}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>PinCode*</label>
                          <input
                            type="number"
                            name="pincode"
                            required
                            placeholder="Enter Your Number"
                            value={this.state.pincode}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Landmark*</label>
                          <input
                            type="text"
                            name="landmark"
                            required
                            placeholder="Enter Your landmark"
                            value={this.state.landmark}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="12" className="mt-3">
                        <Button className="btn btn-warning">
                          Save Address
                        </Button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    )
  }
}
export default AddressForm
