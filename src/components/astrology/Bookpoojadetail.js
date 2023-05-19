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
import axiosConfig from "../../../src/axiosConfig";
// import Moment from "react-moment";
// import "moment-timezone";
import HtmlParser from "react-html-parser";
import LayoutOne from "../../layouts/LayoutOne";
import swal from "sweetalert";
import BookPoojaForm from "./BookPoojaForm";

function Bookpoojadetail() {
  const [blogdescription, setBlogdescription] = useState([]);
  const [Pooja, setPooja] = useState({});
  const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(null);
  const Param = useParams();
  const history = useHistory();
  const [poojaform, setpoojaform] = useState(false);

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
    axiosConfig
      .get(`/admin/admin_getone_event/${Param.id}`)
      .then((res) => {
        console.log(res.data.data);
        setPooja(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // setPooja(bookpooja);
  }, [Param]);

  const handlebookpooja = () => {
    setpoojaform(true);
    const userid = localStorage.getItem("user_id");
    if (userid) {
      // history.push("/BookPooojaForm");
      // history.push("/BookPooojaForm");
    } else swal("User Not Found", "Login first");
  };
  return (
    <div>
      <LayoutOne headerTop="visible">
        {poojaform === true ? (
          <>
            <div>
              <BookPoojaForm data={cSelected} Param={Param.id} />
            </div>
          </>
        ) : (
          <>
            <Container className="">
              <Row>
                <h2 className=" justify-content-center mt-5 mb-3">
                  {Pooja?.pooja_type?.pooja_name}
                </h2>
              </Row>

              <Row className="mt-3">
                <img
                  className="  justify-content-center imgColnew"
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
                    <span style={{ fontSize: "18px" }}>
                      {" "}
                      {Pooja?.duration}{" "}
                    </span>
                  </h4>
                </div>
                <div className=" descriptionofblog   mt-1 mb-1">
                  <h4>
                    <b> Mode of Pooja:</b>{" "}
                    <span style={{ fontSize: "18px" }}> {Pooja?.mode} </span>
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
                {Pooja?.product?.length > 0 ? (
                  <>
                    <h3 className="mt-2">
                      <b>Want to buy Something?</b>
                    </h3>
                    {Pooja?.product?.map((ele) => (
                      <Row key={ele?._id} className="maindivproduct mt-2 mb-4">
                        <Col lg="8" md="6" sm="6">
                          <Input
                            onClick={() => onCheckboxBtnClick(ele?._id)}
                            active={cSelected.includes(1)}
                            type="checkbox"
                          />
                          <label>
                            <span className="mx-2 productname">
                              <b> {ele?.name}</b>
                            </span>
                          </label>
                        </Col>
                        <Col lg="4" md="6" sm="6">
                          <div className="d-flex justify-content-end">
                            <p className="priceofadd">
                              {" "}
                              <b>Price </b>:{" "}
                              <i class="fa fa-inr" aria-hidden="true"></i>{" "}
                              {ele?.price}
                              Rs/-
                            </p>
                          </div>
                        </Col>
                        <div>
                          <Row>
                            <Col lg="10" md="8" sm="8">
                              <p>{ele?.description}</p>
                            </Col>
                            <Col lg="2" md="4" sm="4">
                              <img
                                width="180px"
                                style={{ BorderRadius: "12px" }}
                                src={ele?.image}
                                alt="image"
                              />
                            </Col>
                          </Row>
                        </div>
                        <br />
                        {/* <hr /> */}
                      </Row>
                    ))}
                  </>
                ) : null}

                {/* <p>Selected Product: {JSON.stringify(cSelected)}</p> */}
              </Row>

              <div className="d-flex justify-content-center mt-1 mb-3">
                <Button onClick={handlebookpooja} color="success">
                  CheckOut
                </Button>
              </div>
            </Container>
          </>
        )}
      </LayoutOne>
    </div>
  );
}

export default Bookpoojadetail;
