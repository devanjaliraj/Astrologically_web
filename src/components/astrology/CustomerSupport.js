import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
// import AutoSearch from './autosearch'
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";

class CustomerSupport extends React.Component {
 
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
                    <h1>
                       Customer Support
                    </h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section className="">
          <Container>
            <Row>
                 <Col lg="2">
                     <div className="supp-1">
                         <Link to="/customersupportform">
                             <i className="pe-7s-plus"></i>
                              <p>
                                   Create Ticket
                              </p> 
                         </Link>
                     </div>
                 </Col>
                 <Col lg="10">
                     <div className="support-box">
                          <Row>
                              <Col lg="4">
                                 <div className="supp-2">
                                     <h4>lorem ipsum ?</h4>
                                     <ul>
                                        <li>Date: <span>01/11/2022</span></li>
                                        <li>Time: <span>4:00pm</span></li>
                                        <li>Ticket No: <span>56565656</span></li>
                                        <li>Status: <span></span></li>
                                     </ul>
                                     <div className="supp-3">
                                        <Link to="/customersupportview">View More</Link>
                                     </div>
                                 </div>
                              </Col>
                              <Col lg="4">
                                 <div className="supp-2">
                                     <h4>lorem ipsum ?
                                       
                                     </h4>
                                     <ul>
                                        <li>Date: <span>01/11/2022</span></li>
                                        <li>Time: <span>4:00pm</span></li>
                                        <li>Ticket No: <span>56565656</span></li>
                                        <li>Status: <span></span></li>
                                     </ul>
                                     <div className="supp-3">
                                        <Link to="/customersupportview">View More</Link>
                                     </div>
                                 </div>
                              </Col>
                              <Col lg="4">
                                 <div className="supp-2">
                                     <h4>lorem ipsum ?
                                       
                                     </h4>
                                     <ul>
                                        <li>Date: <span>01/11/2022</span></li>
                                        <li>Time: <span>4:00pm</span></li>
                                        <li>Ticket No: <span>56565656</span></li>
                                        <li>Status: <span></span></li>
                                     </ul>
                                     <div className="supp-3">
                                        <Link to="/customersupportview">View More</Link>
                                     </div>
                                 </div>
                              </Col>
                          </Row>
                     </div> 
                 </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}
export default CustomerSupport;
