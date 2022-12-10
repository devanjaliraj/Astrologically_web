import React from "react"
import { Link } from "react-router-dom";
import { Container, Row,  Col, Input, InputGroup, Form,Button } from "reactstrap";
import textbottom from "../../assets/img/textbottom.png";
import "../../assets/scss/workflow.css"
import chatimg from "../../assets/img/icon-img/chaticon.png";
import callimg from "../../assets/img/icon-img/callicon.png";
import videoimg from "../../assets/img/icon-img/video.png";


class OurWorkFlow extends React.Component {
 

  render() {

  return (
    <div className="col-lg-12 col-md-12 mb-30">
      <div className="category-home">
      <section className="stt-2">
      <Container>

         <div className="heading">
              <h2>Connect to Astrologers</h2>
              <img src={textbottom} alt=""/>
         </div>
             <Row>
               <Col md="4">
                    <div className="process-box process-left" data-aos="fade-right"        data-aos-duration="1000">
                        <Row>
                            <Col md="5">
                                <div className="process-step">
                                    <img src={chatimg}  alt="" className="hm-img"/>
                                </div>  
                            </Col>
                            <Col md="7">
                                <h5 className="bt-txt">Chat with Astrologer</h5>
                                <p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </small></p> 
                            </Col>
                            {/* <div class="process-line-l"></div> */}
                        </Row> 
                    </div>
               </Col>
               <Col md="4">
                    <div className="process-box process-left" data-aos="fade-right"        data-aos-duration="1000">
                        <Row>
                            <Col md="5">
                                <div className="process-step">
                                    <img src={callimg}  alt="" className="hm-img"/>
                                </div>  
                            </Col>
                            <Col md="7">
                                <h5 className="bt-txt">Talk to Astrologer</h5>
                                <p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </small></p> 
                            </Col>
                            {/* <div class="process-line-l"></div> */}
                        </Row> 
                    </div>
               </Col>
               <Col md="4">
                    <div className="process-box process-left" data-aos="fade-right"        data-aos-duration="1000">
                        <Row>
                            <Col md="5">
                                <div className="process-step">
                                    <img src={videoimg}  alt="" className="hm-img"/>
                                </div>  
                            </Col>
                            <Col md="7">
                                <h5 className="bt-txt">Live Astrologers</h5>
                                <p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </small></p> 
                            </Col>
                            {/* <div class="process-line-l"></div> */}
                        </Row> 
                    </div>
               </Col>
             </Row>
      </Container>
    </section>
    </div>
    </div>
  );
  }
}


export default OurWorkFlow;
