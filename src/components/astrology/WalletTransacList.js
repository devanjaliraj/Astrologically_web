import React from "react"
import { Link } from "react-router-dom";
import { Container, Row,  Col, Input, InputGroup, Form,Button } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import "../../assets/scss/astroteam.scss";
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Table } from 'reactstrap';


class WalletTransacList extends React.Component {
 
  
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
                                        <h1>Wallet Transactions</h1>
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
                             <div className="">
                                    <Table striped className="">
                                        <thead>
                                        <tr>
                                            <th># S. No.</th>
                                            <th>Description</th>
                                            <th>Invoice</th>
                                            <th>Transaction Amount</th>
                                            <th>Date/Time</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Chat With Monish For 2 Minutes</td>
                                            <td>doc</td>
                                            <td>30.00</td>
                                            <td>sept 05, 2022 11:32AM</td>
                                            <td>
                                                <Link className="Tansdel">
                                                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Chat With Monish For 2 Minutes</td>
                                            <td>doc</td>
                                            <td>30.00</td>
                                            <td>sept 05, 2022 11:32AM</td>
                                            <td>
                                                <Link className="Tansdel">
                                                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Chat With Monish For 2 Minutes</td>
                                            <td>doc</td>
                                            <td>30.00</td>
                                            <td>sept 05, 2022 11:32AM</td>
                                            <td>
                                                <Link className="Tansdel">
                                                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Chat With Monish For 2 Minutes</td>
                                            <td>doc</td>
                                            <td>30.00</td>
                                            <td>sept 05, 2022 11:32AM</td>
                                            <td>
                                                <Link className="Tansdel">
                                                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Chat With Monish For 2 Minutes</td>
                                            <td>doc</td>
                                            <td>30.00</td>
                                            <td>sept 05, 2022 11:32AM</td>
                                            <td>
                                                <Link className="Tansdel">
                                                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                                                </Link>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                             </div>
                         </Col>
                    </Row>
              </Container>
        </section>

    

   </LayoutOne>
  );
  }
}


export default WalletTransacList;
