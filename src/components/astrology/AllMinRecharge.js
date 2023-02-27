import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import swal from "sweetalert";
import LayoutOne from "../../layouts/LayoutOne";
import "../../assets/scss/astroteam.scss";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import axiosConfig from "../../axiosConfig";
class AllMinRecharge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      allminrechargeList: [],
      data: {},
      userid: "",
      astroid: "",
      recharge_planId: ""
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
          swal("Success!", "Submitted SuccessFull!", "success");
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });
  };
  submitHandler = async (e, astroid, userId, recharge_planid) => {
    e.preventDefault();
    let { id } = this.props.match.params;
    let obj = {
      astroId: id,
      astroid: astroid,
      userd: id,
      userid: astroid,
      recharge_planId: id,
      recharge_planid: recharge_planid,
      userId: this.state.userid,
    };
    await axiosConfig
      .post(`/user/addChatWallet`, obj)
      .then((response) => {
        console.log("hdfkjh", response.data.status)
        if (response.data.status === true) {
          this.setState({
          });
        }
      })
      .catch((error) => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error);
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
                  <div className="leftcont text-left" >
                    <h1>Select Minute Now</h1>
                    <h3 >
                      Available Minute : <span >{this.state.minute}</span>
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
              {allminrechargeList.length
                ? allminrechargeList.map((allmin, index) => {
                  return (
                    <Col xl="3" lg="3" md="3" sm="6" xs="6" key={index}>
                      {/* <Link to="/chatApp"> */}
                      <button onClick={() => {
                        localStorage.setItem("minute", allmin.minute)
                        this.props.history.push('/chatApp')
                      }}>
                        <div className="promoBox success-box info-ribbon">
                          {/* <aside>
                            <p>{allmin.title}</p>
                          </aside> */}
                          <h4>Minute {allmin.minute}</h4>
                        </div>
                      </button>
                      {/* </Link> */}
                    </Col>
                  );
                })
                : null}
            </Row>
          </Container>
        </section>
        {/* modal for recharge*/}
        <Modal
          size="md"
          style={{ maxWidth: "600px", width: "100%" }}
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}>
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