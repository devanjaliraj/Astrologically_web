import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Input,
  InputGroup,
  Form,
  Button,
} from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import "../../assets/scss/astroteam.scss";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Table } from "reactstrap";
import axiosConfig from "../../axiosConfig";
import pay1 from "../../assets/img/icon-img/pay-1.png";
import pay2 from "../../assets/img/icon-img/pay-2.png";
import pay3 from "../../assets/img/icon-img/pay-3.png";
import pay4 from "../../assets/img/icon-img/pay-4.png";
import pay5 from "../../assets/img/icon-img/pay-5.png";
import pay6 from "../../assets/img/icon-img/pay-6.png";
import swal from "sweetalert";

class PaymentDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      totalamount: {},
      amountselected: "",
      Customselected: "",
      Custamnt: "",
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  componentDidMount() {
    let userId = JSON.parse(localStorage.getItem("user_id"));

    if (JSON.parse(localStorage.getItem("Rechargediscount")) === true) {
      let { id } = this.props.match.params;
      console.log(id);
      let payload = {
        userid: userId,
        planid: id,
      };
      axiosConfig
        .post(`user/purchase_plan`, payload)
        .then((response) => {
          console.log("purchase Plan", response.data);
          this.setState({ totalamount: response?.data });
          this.setState({
            amountselected: response?.data?.ttl_amt - response?.data?.gstAmt,
          });
        })

        .catch((error) => {
          swal("Error!", "You clicked the button!", "error");
          console.log(error);
        });
    } else {
      let { id } = this.props.match.params;
      console.log(id);
      let userId = JSON.parse(localStorage.getItem("user_id"));
      let obj = {
        userid: userId,
        amount: id,
      };

      axiosConfig
        .post(`/user/add_custome_amt`, obj)
        .then((response) => {
          console.log("Custom amount", response?.data);
          this.setState({ Customselected: response?.data });
          this.setState({
            Custamnt: response?.data?.ttl_amt - response?.data?.gstAmt,
          });
        })

        .catch((error) => {
          swal("Error!", "You clicked the button!", "error");
          console.log(error);
        });
    }
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
                    <h1>Payment Detail</h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section>
          <Container>
            <Row>
              {/* <Col lg="12">
                             <div className="order-view">
                                    <h4>ORDER REVIEW</h4>
                                    <Table striped className="">
                                        <thead>
                                        <tr>
                                            <th># S. No.</th>
                                            <th>Product Image</th>
                                            <th>Product Name</th>
                                            <th>Astrologer</th>
                                            <th>Address</th>
                                            <th>Amount</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>image</td>
                                            <td>lorem</td>
                                            <td>Rajverdhan Shastriji</td>
                                            <td>indore</td>
                                            <td>
                                                <Link className="Tansdel">
                                                    500.00
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>image</td>
                                            <td>lorem</td>
                                            <td>Rajverdhan Shastriji</td>
                                            <td>indore</td>
                                            <td>
                                                <Link className="Tansdel">
                                                    500.00
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>image</td>
                                            <td>lorem</td>
                                            <td>Rajverdhan Shastriji</td>
                                            <td>indore</td>
                                            <td>
                                                <Link className="Tansdel">
                                                    500.00
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>image</td>
                                            <td>lorem</td>
                                            <td>Rajverdhan Shastriji</td>
                                            <td>indore</td>
                                            <td>
                                                <Link className="Tansdel">
                                                    500.00
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>image</td>
                                            <td>lorem</td>
                                            <td>Rajverdhan Shastriji</td>
                                            <td>indore</td>
                                            <td>
                                                <Link className="Tansdel">
                                                    500.00
                                                </Link>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                             </div>
                         </Col> */}
              {JSON.parse(localStorage.getItem("Rechargediscount")) === true ? (
                <>
                  <Col lg="4">
                    <div className="order-bx">
                      <h3 className="py-3">Total Amount</h3>
                      <hr></hr>
                      <ul>
                        <li>
                          Order Subtotal
                          <span>₹ {this.state.amountselected}</span>
                        </li>
                        {/* <li>
                      Payable Amount
                      <span>₹ 501.00</span>
                    </li> */}
                        <li>
                          GST @18%
                          <span>₹ {this.state.totalamount?.gstAmt}</span>
                        </li>
                        <li>
                          Total Payable Amount
                          <span>₹ {this.state.totalamount?.ttl_amt}</span>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  <Col lg="4">
                    <div className="order-bx">
                      <h3 className="py-3">Total Amount</h3>
                      <hr></hr>
                      <ul>
                        <li>
                          Order Subtotal
                          <span>₹ {this.state.Custamnt}</span>
                        </li>
                        {/* <li>
                      Payable Amount
                      <span>₹ 501.00</span>
                    </li> */}
                        <li>
                          GST @18%
                          <span>₹ {this.state.Customselected?.gstAmt}</span>
                        </li>
                        <li>
                          Total Payable Amount
                          <span>₹ {this.state.Customselected?.ttl_amt}</span>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </>
              )}

              <Col lg="8" className="py-5">
                <Row>
                  <Col md="12">
                    <div className="off-code">
                      <div className="w-offer">
                        <Button
                          type="button"
                          className="btn btn-secondary"
                          onClick={this.toggle}
                        >
                          <i className="fa fa-percent" aria-hidden="true"></i>
                          Apply Coupon
                        </Button>
                      </div>
                      <Link className="oth-btn" onClick={this.toggle}>
                        Apply another coupon
                      </Link>
                    </div>
                  </Col>
                  {/* <Col md="4">
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
                  </Col> */}
                  {/* <Col md="4">
                    <div className="rv-1 my-2">
                      <Link>
                        <img src={pay5} alt="" />
                        <p>Other Wallet</p>
                      </Link>
                    </div>
                  </Col> */}
                  {/* <Col md="4">
                    <div className="rv-1 my-2">
                      <Link>
                        <img src={pay6} alt="" />
                        <p>Other Wallet</p>
                      </Link>
                    </div>
                  </Col> */}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        {/* modal for recharge*/}

        <Modal
          size="md"
          style={{ maxWidth: "600px", width: "100%" }}
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader className="wr-3" toggle={this.toggle}>
            <h2 className="wr-4">Apply Voucher Code</h2>
          </ModalHeader>
          <ModalBody>
            <div className="Wr-1 wr-t">
              <form>
                <Col md="12">
                  <input type="text" placeholder="Enter Your Voucher  Code" />
                </Col>
                <Button className="btn btn-success">Submit</Button>
              </form>
            </div>
          </ModalBody>
        </Modal>
      </LayoutOne>
    );
  }
}

export default PaymentDetail;
