import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Input, Row } from "reactstrap";
import axios from "axios";
import { Button, ButtonGroup } from "reactstrap";
import "../../assets/scss/style.scss";
import ReactHtmlParser from "react-html-parser";
import abot from "../../../src/assets/img/abot.png";
// import { history } from "../../history";
import { useHistory } from "react-router-dom";

// import Moment from "react-moment";
// import "moment-timezone";
import HtmlParser from "react-html-parser";
import LayoutOne from "../../layouts/LayoutOne";
import swal from "sweetalert";

function Bookpoojadetail() {
  const [blogdescription, setBlogdescription] = useState([]);
  const [Pooja, setPooja] = useState({});
  const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(null);
  const Param = useParams();
  const history = useHistory();

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };

  // console.log(Param);
  useEffect(() => {
    console.log(Param.id);
    const bookpooja = JSON.parse(localStorage.getItem("poojaviewone"));

    setPooja(bookpooja);
  }, [Param]);

  const handlebookpooja = () => {
    const userid = localStorage.getItem("user_id");
    if (userid) {
      console.log("object");
      // history.push("/BookPooojaForm");
      history.push("/BookPooojaForm");
    } else swal("User Not Found", "Login first");
  };
  return (
    <div>
      <LayoutOne headerTop="visible">
        <div className="color mt-2 mb-3">
          <Container className="mb-0">
            <Row>
              <h2 className=" justify-content-center mt-5 mb-3">
                {Pooja?.pooja_type?.pooja_name}
              </h2>
            </Row>

            <Row className="mt-3">
              <img
                className=" d-flex justify-content-center imgColnew"
                //   src={blogdescription?.blogImg}
                src={Pooja?.poojaimg}
                style={{ height: "500px", borderRadius: "10px" }}
                alt="blogimg"
              />
              <Row>
                <div className=" descriptionofblog   mt-3 mb-3">
                  {HtmlParser(Pooja?.desc)}
                </div>
              </Row>
              <Row>
                <div className=" descriptionofblog   mt-3 mb-3">
                  <h4>
                    <b> Benefits: </b>
                  </h4>
                  <p style={{ fontSize: "18px" }}> {Pooja?.benefits} </p>
                </div>
              </Row>

              <div className=" descriptionofblog   mt-1 mb-1">
                <h4>
                  <b> Duration:</b>{" "}
                  <span style={{ fontSize: "18px" }}> {Pooja?.duration} </span>
                </h4>
              </div>

              <div className=" descriptionofblog   mt-1 mb-1">
                <h4>
                  {" "}
                  <b> Pooja Price: </b>
                  <span style={{ fontSize: "18px" }}>
                    {"   "}
                    <i class="fa fa-inr" aria-hidden="true"></i>{" "}
                    {Pooja?.pooja_price}{" "}
                  </span>
                </h4>
              </div>

              <div className=" descriptionofblog   mt-1 mb-1">
                <h4>
                  {" "}
                  <b> Pooja Name:</b>
                  {"  "}
                  <span style={{ fontSize: "18px" }}>
                    {"  "}
                    {Pooja?.pooja_type?.pooja_name}
                  </span>
                </h4>
              </div>
            </Row>
            <Row>
              <h3 className="mt-2">
                <b>Want to buy Something?</b>
              </h3>

              <Row className="mt-2 mb-3">
                <div>
                  <Input
                    onClick={() => onCheckboxBtnClick(1)}
                    active={cSelected.includes(1)}
                    type="checkbox"
                  />
                  <label>
                    <span className="mx-2 productname">
                      <b> Product 2nd Name</b>
                    </span>
                  </label>
                  <Row>
                    <Col lg="10" md="8" sm="8">
                      <p className="priceofadd">
                        {" "}
                        <b>Price </b>:{" "}
                        <i class="fa fa-inr" aria-hidden="true"></i> 300 Rs/-
                      </p>
                      <p>
                        Puja N Pujari is the one-stop solution for all puja
                        needs. At Puja N Pujari you can find pandits,
                        astrologers, puja material, and spiritual gifts. We also
                        provide online booking services for customers in India
                        and abroad. We deliver pooja services from initial
                        pandit consultation to final havan we are one of its
                        kins spiritual destination.{" "}
                      </p>
                    </Col>
                    <Col lg="2" md="4" sm="4">
                      <img
                        width="180px"
                        style={{ BorderRadius: "12px" }}
                        src={abot}
                        alt="image"
                      />
                    </Col>
                  </Row>
                </div>
              </Row>
              <Row className="mt-2 mb-3">
                <div>
                  <Input
                    onClick={() => onCheckboxBtnClick(2)}
                    active={cSelected.includes(2)}
                    type="checkbox"
                  />
                  <label>
                    <span className="mx-2 productname">
                      <b> Product 2nd Name</b>
                    </span>
                  </label>
                  <Row>
                    <Col lg="10" md="8" sm="8">
                      <p className="priceofadd">
                        {" "}
                        <b>Price </b>:{" "}
                        <i class="fa fa-inr" aria-hidden="true"></i> 300 Rs/-
                      </p>

                      <p>
                        {" "}
                        Puja N Pujari is the one-stop solution for all puja
                        needs. At Puja N Pujari you can find pandits,
                        astrologers, puja material, and spiritual gifts. We also
                        provide online booking services for customers in India
                        and abroad. We deliver pooja services from initial
                        pandit consultation to final havan we are one of its
                        kins spiritual destination.{" "}
                      </p>
                    </Col>
                    <Col lg="2" md="4" sm="4">
                      <img
                        width="180px"
                        style={{ BorderRadius: "12px" }}
                        src={abot}
                        alt="image"
                      />
                    </Col>
                  </Row>
                </div>
              </Row>
              <Row className="mt-2 mb-3">
                <div>
                  <Input
                    onClick={() => onCheckboxBtnClick(3)}
                    active={cSelected.includes(3)}
                    type="checkbox"
                  />
                  <label>
                    <span className="mx-2 productname">
                      <b> Product 2nd Name</b>
                    </span>
                  </label>
                  <Row>
                    <Col lg="10" md="8" sm="8">
                      <p className="priceofadd">
                        {" "}
                        <b>Price </b>:{" "}
                        <i class="fa fa-inr" aria-hidden="true"></i> 300 Rs/-
                      </p>

                      <p>
                        {" "}
                        Puja N Pujari is the one-stop solution for all puja
                        needs. At Puja N Pujari you can find pandits,
                        astrologers, puja material, and spiritual gifts. We also
                        provide online booking services for customers in India
                        and abroad. We deliver pooja services from initial
                        pandit consultation to final havan we are one of its
                        kins spiritual destination.{" "}
                      </p>
                    </Col>
                    <Col lg="2" md="4" sm="4">
                      <img
                        width="180px"
                        style={{ BorderRadius: "12px" }}
                        src={abot}
                        alt="image"
                      />
                    </Col>
                  </Row>
                </div>
              </Row>

              <p>Selected Product: {JSON.stringify(cSelected)}</p>
            </Row>

            {/* <Row className="mt-4 ">
            <div className=" justify-content-center mt-3">
              <h3>{ReactHtmlParser(blogdescription?.desc)}</h3>
            </div>
          </Row> */}
            <div className="d-flex justify-content-center mt-1 mb-3">
              <Button onClick={handlebookpooja} color="success">
                Book Now
              </Button>
            </div>
          </Container>
        </div>
      </LayoutOne>
    </div>
  );
}

export default Bookpoojadetail;
