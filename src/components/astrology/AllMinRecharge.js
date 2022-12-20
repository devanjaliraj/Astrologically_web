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
import axiosConfig from "../../axiosConfig";
class AllMinRecharge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      allminrechargeList: [],
      data: {},
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  componentDidMount = () => {
    axiosConfig
      .get("/user/all_min_recharge")
      .then((response) => {
        console.log(response.data);
        if (response.data.status === true) {
          this.setState({ allminrechargeList: response.data.data });
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });
  };

  render() {
    const { allminrechargeList } = this.state;
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
                    <h1>Select Minute Now</h1>
                    <h3>
                      Available Minute : <span>{this.state.minute}</span>
                    </h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section>
          <Container>
            <Row>
              {/* <Col xl="3" lg="3" md="3" sm="6" xs="6">
                <Link to="/walletaddform">
                  <div className="promoBox success-box info-ribbon">
                    <aside>
                      <p>100% extra</p>
                    </aside>
                    <h4>Amount</h4>
                    <p></p>
                  </div>
                </Link>
              </Col> */}
              {allminrechargeList.length
                ? allminrechargeList.map((allmin, index) => {
                    return (
                      <Col xl="3" lg="3" md="3" sm="6" xs="6" key={index}>
                        <Link to="/paymentdetail">
                          <div className="promoBox success-box info-ribbon">
                            <aside>
                              <p>{allmin.title}</p>
                            </aside>
                            <h4>Minute {allmin.minute}</h4>
                          </div>
                        </Link>
                      </Col>
                    );
                  })
                : null}

              {/*    <Col xl="3" lg="3" md="3" sm="6" xs="6">
                               <Link to="paymentdetail">
                                      <div className="promoBox success-box info-ribbon">
                                        <aside>
                                            <p>100% extra</p>
                                        </aside>
                                                <h4>INR 200</h4>
                                                <p></p>     
                                        </div>
                               </Link>
                         </Col> */}
              {/* <Col xl="3" lg="3" md="3" sm="6" xs="6">
                               <Link  to="paymentdetail">
                                      <div className="promoBox success-box info-ribbon">
                                        <aside>
                                            <p>100% extra</p>
                                        </aside>
                                                <h4>INR 300</h4>
                                                <p></p>     
                                        </div>
                               </Link>
                         </Col>
                         <Col xl="3" lg="3" md="3" sm="6" xs="6">
                               <Link  to="paymentdetail">
                                      <div className="promoBox success-box info-ribbon">
                                        <aside>
                                            <p>100% extra</p>
                                        </aside>
                                                <h4>INR 500</h4>
                                                <p></p>     
                                        </div>
                               </Link>
                         </Col>
                         <Col xl="3" lg="3" md="3" sm="6" xs="6">
                               <Link  to="paymentdetail">
                                      <div className="promoBox success-box info-ribbon">
                                        <aside>
                                            <p>100% extra</p>
                                        </aside>
                                                <h4>INR 1000</h4>
                                                <p></p>     
                                        </div>
                               </Link>
                         </Col>
                         <Col xl="3" lg="3" md="3" sm="6" xs="6">
                               <Link  to="paymentdetail">
                                      <div className="promoBox success-box info-ribbon">
                                        <aside>
                                            <p>100% extra</p>
                                        </aside>
                                                <h4>INR 2000</h4>
                                                <p></p>     
                                        </div>
                               </Link>
                         </Col>
                         <Col xl="3" lg="3" md="3" sm="6" xs="6">
                               <Link  to="paymentdetail">
                                      <div className="promoBox success-box info-ribbon">
                                        <aside>
                                            <p>100% extra</p>
                                        </aside>
                                                <h4>INR 100</h4>
                                                <p></p>     
                                        </div>
                               </Link>
                         </Col>
                         <Col xl="3" lg="3" md="3" sm="6" xs="6">
                               <Link  to="paymentdetail">
                                      <div className="promoBox success-box info-ribbon">
                                        <aside>
                                            <p>100% extra</p>
                                        </aside>
                                                <h4>INR 3000</h4>
                                                <p></p>     
                                        </div>
                               </Link>
                         </Col>
                         <Col xl="3" lg="3" md="3" sm="6" xs="6">
                               <Link  to="paymentdetail">
                                      <div className="promoBox success-box info-ribbon">
                                        <aside>
                                            <p>100% extra</p>
                                        </aside>
                                                <h4>INR 4000</h4>
                                                <p></p>     
                                        </div>
                               </Link>
                         </Col> */}

              {/* <Col lg="12">
                             <div className="w-offer">
                                 <Button onClick={this.toggle} >
                                     <i class="fa fa-percent" aria-hidden="true"></i>

                                     apply voucher code

                                     <i class="fa fa-angle-right" aria-hidden="true"></i>

                                 </Button>
                             </div>
                         </Col> */}
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

export default AllMinRecharge;
