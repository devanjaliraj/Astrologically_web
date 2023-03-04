import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Input } from 'reactstrap'
import LayoutOne from '../../layouts/LayoutOne'
// import AutoSearch from './autosearch'
import axiosConfig from '../../axiosConfig'
import swal from 'sweetalert'
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
class AddEvent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            mode: "",
            event_list: '',
            mobile: '',
            email: '',
            userid: '',
            date: '',
            city: '',
            state: '',
            country: '',
            address: '',
        }
    }
    // componentDidMount() {


    //     let userId = JSON.parse(localStorage.getItem('user_id'))

    //     axiosConfig
    //         .get(`/user/viewone_address/${userId}`)
    //         .then((response) => {
    //             //localStorage.setItem('shipping_id', response?.data?.data[0]?._id)
    //             console.log('viewone_address', response.data.data)
    //             this.setState({
    //                 viewoneAddressData: response.data.data,
    //             })
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }
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
        // let userId = JSON.parse(localStorage.getItem('user_id'))

        // let astroid = JSON.parse(localStorage.getItem('astroId'))
        let userid = localStorage.getItem('user_id')

        let obj = {
            // astroId: astroid,
            userId: userid,

            // userid: userId,

            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            date: this.state.date,
            mode: this.state.mode,
            event_list: this.state.event_list,
            mobile: parseInt(this.state.mobile),
            email: this.state.email,

        }

        axiosConfig
            .post(`/user/add_event`, obj)
            .then((response) => {
                console.log('@@@@@', response.data)
                //localStorage.setItem('shipping_id', response?.data?.data[0]?._id)
                swal('Success!', 'Submitted SuccessFull!', 'success')
                // window.location.reload('/addEvent')
            })

            .catch((error) => {
                swal('Error!', 'You clicked the button!', 'error')
                console.log(error)
            })


    }




    render() {
        return (
            <LayoutOne headerTop="visible">
                <section className="pt-0 pb-0">
                    <div
                        className=""
                        style={{
                            // backgroundColor: '#FFD59E',
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
                                        {/* <h1>
                                            Astromall Shop/ Product Detail/ Consultant List/ Address
                                        </h1> */}
                                        <h3>Event</h3>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>

                <section className="">
                    <Container>
                        <div className="multi-address">

                        </div>
                        <Row>
                            <Col lg="12">
                                <div className="wal-amt">
                                    <h3>Add New Event </h3>
                                    <hr></hr>
                                    <form onSubmit={this.submitHandler}>
                                        <Row>
                                            <Col md="4">
                                                <div class="form-group mtb-10">
                                                    <label>Event List</label>
                                                    <Input
                                                        type="select"
                                                        name="event_list"
                                                        // required
                                                        value={this.state.event_list}
                                                        onChange={this.changeHandler}
                                                    >
                                                        <option>select</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>4</option>
                                                        <option>2</option></Input>
                                                </div>
                                            </Col>
                                            <Col md="4">
                                                <div class="form-group mtb-10">
                                                    <label>Email address*</label>
                                                    <Input
                                                        type="email"
                                                        name="email"
                                                        // required
                                                        placeholder="Enter Your email"
                                                        value={this.state.email}
                                                        onChange={this.changeHandler}
                                                    />
                                                </div>
                                            </Col>
                                            <Col md="4">
                                                <div class="form-group mtb-10">
                                                    <label>Mobile Number*</label>
                                                    <Input
                                                        type="number"
                                                        name="mobile"
                                                        // required
                                                        placeholder="Enter Your Number"
                                                        value={this.state.mobile}
                                                        onChange={this.changeHandler}
                                                    />
                                                </div>
                                            </Col>
                                            <Col md="4">
                                                <div class="form-group mtb-10">
                                                    <label>Mode</label>
                                                    <Input
                                                        type="select"
                                                        name="mode"

                                                        value={this.state.mode}
                                                        onChange={this.changeHandler}
                                                    ><option>Select</option>
                                                        <option>Online</option>
                                                        <option>Offline</option></Input>
                                                </div>
                                            </Col>
                                            {/* <Col md="4">
                                                <div class="form-group mtb-10">
                                                    <label>Flat No:*</label>
                                                    <Input
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
                                                    <Input
                                                        type="text"
                                                        name="locality"
                                                        required
                                                        placeholder="Enter Your Number"
                                                        value={this.state.locality}
                                                        onChange={this.changeHandler}
                                                    />
                                                </div>
                                            </Col> */}
                                            <Col md="4">
                                                <div class="form-group mtb-10">
                                                    <label>City*</label>
                                                    <Input
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
                                                    <label>State *</label>
                                                    <Input
                                                        type="text"
                                                        name="state"
                                                        // required
                                                        placeholder="Enter Your state"
                                                        value={this.state.state}
                                                        onChange={this.changeHandler}
                                                    />
                                                </div>
                                            </Col>
                                            <Col md="4">
                                                <div class="form-group mtb-10">
                                                    <label>Country*</label>
                                                    <Input
                                                        type="text"
                                                        name="country"
                                                        // required
                                                        placeholder="Enter Your Country"
                                                        value={this.state.country}
                                                        onChange={this.changeHandler}
                                                    />
                                                </div>
                                            </Col>
                                            <Col md="4">
                                                <div class="form-group mtb-10">
                                                    <label>Address*</label>
                                                    <Input
                                                        type="text"
                                                        name="address"
                                                        // required
                                                        placeholder="Enter Your Number"
                                                        value={this.state.address}
                                                        onChange={this.changeHandler}
                                                    />
                                                </div>
                                            </Col>
                                            <Col md="4">
                                                <div class="form-group mtb-10">
                                                    <label>Date*</label>
                                                    <Input
                                                        type="date"
                                                        name="date"
                                                        required
                                                        placeholder="Enter Your landmark"
                                                        value={this.state.date}
                                                        onChange={this.changeHandler}
                                                    />
                                                </div>
                                            </Col>
                                            <Col md="12" className="mt-3">
                                                <Button className="btn btn-warning">
                                                    Save Event
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
export default AddEvent
