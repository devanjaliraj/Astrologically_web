import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
// import AutoSearch from './autosearch'
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import Form from 'react-bootstrap/Form';

class CustomerSupportView extends React.Component {
 
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
                        View  Customer Support 
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
                
                 <Col lg="12">
                     <div className="support-box">
                          <Row>
                              <Col lg="12">
                                 <div className="supp-2">
                                     <h4>lorem ipsum ?</h4>
                                     <ul>
                                        <li>Date: <span>01/11/2022</span></li>
                                        <li>Time: <span>4:00pm</span></li>
                                        <li>Ticket No: <span>56565656</span></li>
                                        <li>Status: <span></span></li>
                                        <li>Description: <span>hhhjhjhjhjhjhj</span></li>
                                     </ul>
                                     <div className="supp-4">
                                         <h3>Write Your Commets</h3>
                                         <form>
                                            <Col md="12">
                                                <div class="form-group mtb-10">
                                                <label>Description*</label>
                                                <textarea className="form-control stp" placeholder="support ticket description...">
                                                </textarea>
                                                </div>
                                            </Col>   
                                            <Button className="btn btn-primary">Submit</Button>
                                         </form>
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
export default CustomerSupportView;
