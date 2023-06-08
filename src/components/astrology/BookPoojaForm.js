import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Input, Card } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import "../../../src/assets/scss/style.scss";
// import AutoSearch from './autosearch'
import { BiTime } from "react-icons/bi";
import Select from "react-select";
// import useRazorpay from "react-razorpay";

import { MdOutlineLocationOn } from "react-icons/md";
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import textbottom from "../../assets/img/textbottom.png";
import astro2 from "../../assets/img/team/astro2.jpg";
import { Country, State, City } from "country-state-city";

// import { useHistory } from "react-router-dom";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import { Razorpaydummy } from "./Razorpaydummy";
import DemoChat from "./DemoChat";

// const Razorpay = useRazorpay();

class BookPoojaForm extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = {
      mode: "",
      event_list: "",
      mobile: "",
      email: "",
      userid: "",
      date: "",
      city: "",
      state: "",
      country: "",
      address: "",
      listofpooja: [],
      poojatype: "",
      state: [],
      city: [],
      country: [],
      selectedCountry: null,
      selectedState: null,
      selectedCity: null,
      //   poojatype: "online",
      bookpoojadata: {},
      timeslot: "",
      SelectedProduct: {},
      Movetopayment: false,
    };
  }

  changeCountry = (item) => {
    this.setState({ selectedCountry: item });

    axiosConfig
      .post(`/user/time_zone`, {
        country_code: item?.timezones[0].zoneName,
      })
      .then((response) => {
        this.setState({ timezone: response?.data?.data?.timezone });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  changeCity = (item) => {
    console.log("item", item);
    this.setState({
      submitPlaceHandler: item,
    });

    axiosConfig
      .post(`/user/geo_detail`, {
        place: item?.name,
      })
      .then((response) => {
        this.setState({
          latitude: response?.data?.data?.geonames[0].latitude,
          longitude: response?.data?.data?.geonames[0].longitude,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  handleInputChanged(event) {
    this.setState({
      searchQuery: event.target.value,
    });
    axiosConfig
      .post(`/user/geo_detail`, {
        place: this.state.searchQuery,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.state.searchQuery);
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlecheckpooja = (value) => {
    console.log(value);
    localStorage.setItem("poojaviewone", JSON.stringify(value));
    const userid = localStorage.getItem("user_id");
    if (userid !== null) {
      //   history.push("/Poojadetailpage");
      //   this.props.history.push("/Poojadetailpage");
      this.props.history.push(`/Poojadetailpage/${value?._id}`);
    } else swal("No User Found", "User Need to login First");
  };

  componentDidMount() {
    console.log(this.props);
    this.setState({ SelectedProduct: this.props });
    const bookpooja = JSON.parse(localStorage.getItem("poojaviewone"));
    this.setState({ bookpoojadata: bookpooja });
    console.log(bookpooja.mode);
    this.setState({ poojatype: bookpooja?.mode });
    // axiosConfig
    //   .get(`/admin/admin_getone_event/${bookpooja._id}`)
    //   .then((res) => {
    //     console.log(res.data.data);
    //     // setPooja(res.data.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    axiosConfig
      .get(`/admin/get_adminevent`)
      .then((res) => {
        // console.log(res.data.data);
        this.setState({ listofpooja: res?.data?.data });
      })
      .catch((err) => console.log(err));
  }
  submitHandler = (e) => {
    e.preventDefault();
    // let { id } = this.props.match.params
    // console.log(id)
    // let userId = JSON.parse(localStorage.getItem('user_id'))

    // let astroid = JSON.parse(localStorage.getItem('astroId'))
    let userid = localStorage.getItem("user_id");
    this.setState({ Movetopayment: true });

    let obj = {
      // astroId: astroid,
      userId: userid,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      date: this.state.date,
      mode: this.state.mode,
      event_list: this.state.event_list,
      mobile: parseInt(this.state.mobile),
      email: this.state.email,
      // dummy parameter is below need to be add in api
      // timeslot:this.state.timeslot
    };

    axiosConfig
      .post(`/user/add_event`, obj)
      .then((response) => {
        console.log("@@@@@", response.data);
        //localStorage.setItem('shipping_id', response?.data?.data[0]?._id)
        swal("Success!", "Submitted SuccessFull!", "success");
        // window.location.reload("/astromallList");
        // this.props.history.push("/astromallList");
      })

      .catch((error) => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  };

  render() {
    const SelectedProduct = this.state.SelectedProduct;
    const poojadata = this.state.bookpoojadata;
    return (
      // <LayoutOne headerTop="visible">
      // </LayoutOne>
      <>
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
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
                    <h3>Enter Details for book Pooja</h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section className="">
          {this.state.Movetopayment ? (
            <>
              <div className="container">
                <Row>
                  <Col lg="12">
                    <div className="order-bx">
                      <h2 className="py-3">Total Amount</h2>
                      <hr></hr>

                      <ul>
                        {SelectedProduct?.data?.map((value) => (
                          <li key={value?._id}>
                            {value?.name}

                            <span>Rs {value?.price} </span>
                          </li>
                        ))}
                        <li>
                          {SelectedProduct?.Param?.pooja_type?.pooja_name}

                          <span>
                            Rs
                            {SelectedProduct?.Param?.pooja_price}
                          </span>
                        </li>
                        {/* <li>
                    GST @18%
                    <span>this.state.addtoCart.gst</span>
                  </li> */}

                        <li>
                          <hr />
                          Total Payable Amount
                          <span>Rs {this.props?.totalSum}</span>
                          <hr />
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Row>
                    <Col md="12" className="mt-3">
                      {/* <Razorpaydummy /> */}
                      <DemoChat />
                    </Col>
                  </Row>
                  {/* <Col lg="8" className="py-5">
              <Row>
                <Col md="4">
                  <div className="rv-1 my-2">
                    <Link>
                      <img src="pay1" alt="" />
                      <p>UPI</p>
                    </Link>
                  </div>
                </Col>
                <Col md="4">
                  <div className="rv-1 my-2">
                    <Link>
                      <img src="pay3" alt="" />
                      <p>Debit Card</p>
                    </Link>
                  </div>
                </Col>
                <Col md="4">
                  <div className="rv-1 my-2">
                    <Link>
                      <img src="pay3" alt="" />
                      <p>Credit Card</p>
                    </Link>
                  </div>
                </Col>
                <Col md="4">
                  <div className="rv-1 my-2">
                    <Link>
                      <img src="pay4" alt="" />
                      <p>Net Banking</p>
                    </Link>
                  </div>
                </Col>
                <Col md="4">
                  <div className="rv-1 my-2">
                    <Link>
                      <img src="pay5" alt="" />
                      <p>Other Wallet</p>
                    </Link>
                  </div>
                </Col>
                <Col md="4">
                  <div className="rv-1 my-2">
                    <Link>
                      <img src="pay6" alt="" />
                      <p>Other Wallet</p>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Col> */}
                </Row>
              </div>
            </>
          ) : (
            <>
              <div className="container">
                <Card className="">
                  <Row className="">
                    <Col lg="12 mt-12">
                      <div className="wal-amt">
                        {/* <p>product id-[{this.props?.Param}]</p> */}
                        {/* <p> product ids-[{this.props?.data}]</p> */}
                        <h3>Pooja Booking</h3>
                        <hr></hr>
                        <form onSubmit={this.submitHandler}>
                          <Row>
                            {this.state.poojatype === "online" ? (
                              <>
                                <Col md="3">
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
                                <Col md="3">
                                  <div class="form-group mtb-10">
                                    <label>Slots*</label>

                                    <select
                                      className="form-control"
                                      onChange={(e) =>
                                        this.setState({
                                          timeslot: e.target.value,
                                        })
                                      }
                                    >
                                      <option>Select Time</option>
                                      {this.state.bookpoojadata?.time_slots?.map(
                                        (ele, i) => (
                                          <option key={i} value={ele}>
                                            {ele}
                                          </option>
                                        )
                                      )}
                                    </select>
                                  </div>
                                </Col>
                              </>
                            ) : (
                              <>
                                <Col md="3">
                                  <div class="form-group mtb-10">
                                    <label>Price </label>
                                    <Input
                                      disabled
                                      type="text"
                                      name="email"
                                      // required
                                      placeholder={poojadata.pooja_price}
                                      // value={this.state.email}
                                      // onChange={this.changeHandler}
                                    />
                                  </div>
                                </Col>
                                {/* <Col md="3">
                            <div class="form-group mtb-10">
                              <label>price Offline*</label>
                              <Input
                                type="text"
                                name="mobile"
                                // required
                                placeholder="Enter Your Number"
                                // value={this.state.mobile}
                                // onChange={this.changeHandler}
                              />
                            </div>
                          </Col> */}
                                <Col md="3">
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
                                {/* <Col md="4">
                        <div class="form-group mtb-10">
                          <label>price Online</label>
                          <Input
                            type="select"
                            name="mode"
                            value={this.state.mode}
                            onChange={this.changeHandler}
                          >
                            <option>Select</option>
                            <option>Online</option>
                            <option>Offline</option>
                          </Input>
                        </div>
                      </Col> */}

                                <Col md="3">
                                  <div class="form-group mtb-10">
                                    <label>Slots*</label>

                                    <select
                                      className="form-control"
                                      onChange={(e) =>
                                        this.setState({
                                          timeslot: e.target.value,
                                        })
                                      }
                                    >
                                      <option>Select Time</option>
                                      {this.state.bookpoojadata?.time_slots?.map(
                                        (ele, i) => (
                                          <option key={i} value={ele}>
                                            {ele}
                                          </option>
                                        )
                                      )}
                                    </select>
                                  </div>
                                </Col>
                                <Col md="3">
                                  <label>Country</label>
                                  <Select
                                    options={Country.getAllCountries()}
                                    getOptionLabel={(options) => {
                                      return options["name"];
                                    }}
                                    getOptionValue={(options) => {
                                      return options["name"];
                                    }}
                                    value={this.state.selectedCountry}
                                    onChange={(item) => {
                                      this.changeCountry(item);
                                    }}
                                  />
                                </Col>

                                <Col md="3">
                                  <label>State</label>
                                  <Select
                                    options={State?.getStatesOfCountry(
                                      this.state.selectedCountry?.isoCode
                                    )}
                                    getOptionLabel={(options) => {
                                      return options["name"];
                                    }}
                                    getOptionValue={(options) => {
                                      return options["name"];
                                    }}
                                    value={this.state.selectedState}
                                    onChange={(item) => {
                                      this.setState({ selectedState: item });
                                    }}
                                  />
                                </Col>

                                <Col md="3">
                                  <label>City</label>
                                  <Select
                                    options={City.getCitiesOfState(
                                      this.state.selectedState?.countryCode,
                                      this.state.selectedState?.isoCode
                                    )}
                                    getOptionLabel={(options) => {
                                      return options["name"];
                                    }}
                                    getOptionValue={(options) => {
                                      return options["name"];
                                    }}
                                    value={this.state.submitPlaceHandler}
                                    onChange={(item) => {
                                      this.changeCity(item);
                                    }}
                                  />
                                </Col>

                                <Col md="6">
                                  <div class="form-group mtb-10">
                                    <label>Event Detail</label>
                                    <Input
                                      type="textarea"
                                      name="flat_no"
                                      required
                                      placeholder="Enter Your Number"
                                      value={this.state.flat_no}
                                      onChange={this.changeHandler}
                                    />
                                  </div>
                                </Col>
                                <Col md="6">
                                  <div class="form-group mtb-10">
                                    <label>Address*</label>
                                    <Input
                                      type="textarea"
                                      name="address"
                                      // required
                                      placeholder="Enter Your Number"
                                      value={this.state.address}
                                      onChange={this.changeHandler}
                                    />
                                  </div>
                                </Col>
                              </>
                            )}

                            <Col md="12" className="mt-3">
                              <Button className="btn btn-primary">
                                Submit
                              </Button>
                            </Col>
                          </Row>
                        </form>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </div>
            </>
          )}
        </section>
      </>
    );
  }
}
export default BookPoojaForm;
