import React from "react"
import { Link } from "react-router-dom";
import { Container, Row,  Col, Input, InputGroup, Form,Button } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import "../../assets/scss/astroteam.scss";
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Table } from 'reactstrap';
import pay1 from '../../assets/img/icon-img/pay-1.png'
import pay2 from '../../assets/img/icon-img/pay-2.png'
import pay3 from '../../assets/img/icon-img/pay-3.png'
import pay4 from '../../assets/img/icon-img/pay-4.png'
import pay5 from '../../assets/img/icon-img/pay-5.png'
import pay6 from '../../assets/img/icon-img/pay-6.png'



class PaymentDetail extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
        
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }


  render() {


  return (

    <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0" >
                 <div
                    className=""
                    style={{
                      backgroundColor:"#FFD59E",
                      width: "100%",
                      padding:"70px 0px",
                      backgroundSize:"cover"
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
                         <Col lg="4">
                             <div className="order-bx">
                                  <h3 className="py-3">Total Amount</h3>
                                  <hr></hr>
                                 <ul>
                                    <li>
                                         Order Subtotal
                                         <span>₹ 501.00</span>
                                    </li>
                                    <li>
                                         Payable Amount
                                         <span>₹ 501.00</span>
                                    </li>
                                    <li>
                                         GST @18%
                                         <span>₹ 90.18</span>
                                    </li>
                                    <li>
                                          Total Payable Amount
                                         <span>₹ 591.18</span>
                                    </li>
                                 </ul>
                             </div>
                         </Col>
                         <Col lg="8" className="py-5">
                             <Row>
                                 <Col md="12">
                                    <div className="off-code">
                                      <div className="w-offer">
                                           <Button type="button" className="btn btn-secondary" onClick={this.toggle}>
                                                <i className="fa fa-percent" aria-hidden="true"></i>Apply Coupon
                                            </Button>
                                       </div>
                                       <Link className="oth-btn"  onClick={this.toggle}>Apply another coupon</Link>
                                    </div>
                                 </Col>
                                 <Col md="4">
                                     <div className="rv-1 my-2">
                                        <Link>
                                            <img src={pay1} alt=""  />
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
                                           <img src={pay3} alt=""/>
                                           <p>Credit Card</p>
                                        </Link>
                                     </div>
                                 </Col>
                                 <Col md="4">
                                     <div className="rv-1 my-2">
                                        <Link>
                                           <img src={pay4} alt=""  />
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
                                            <img src={pay6} alt=""/>
                                            <p>Other Wallet</p>
                                        </Link>
                                     </div>
                                 </Col>
                             </Row>
                         </Col>
                    </Row>
              </Container>
        </section>


         {/* modal for recharge*/}

         <Modal size="md" style={{maxWidth: '600px', width: '100%'}} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader className="wr-3" toggle={this.toggle}>
                    <h2 className="wr-4">Apply Voucher Code</h2>
                </ModalHeader>
                <ModalBody>
                          <div className="Wr-1 wr-t">
                              <form>
                                  <Col md="12">
                                      <input
                                          type="text"
                                          placeholder="Enter Your Voucher  Code"

                                      />
                                  </Col>
                                  <Button className="btn btn-success">
                                      Submit
                                  </Button>
                              </form>
                          </div>
                </ModalBody>
              
        </Modal>  
   </LayoutOne>
  );
  }
}


export default PaymentDetail;
