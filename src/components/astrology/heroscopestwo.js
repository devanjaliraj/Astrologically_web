import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
// import aboutimg from "../../assets/img/aboutimg.jpg";
// import imgvertical from "../../assets/img/img-vertical.jpg";
// import abouttwo from "../../assets/img/abouttwo.png";
import LayoutOne from '../../layouts/LayoutOne'
// import scope from "../../assets/img/scope.png";
// import FunFactOne from "../../wrappers/fun-fact/FunFactOne";
// import asectionbg from "../../assets/img/asectionbg.jpg";
import heroscope1 from '../../assets/img/heroscope/heroscope1.png'
// import taurus from "../../assets/img/heroscope/taurus.png";
// import gemini from "../../assets/img/heroscope/gemini.png";
// import cancer from "../../assets/img/heroscope/cancer.png";
// import leo from "../../assets/img/heroscope/leo.png";
// import virgo from "../../assets/img/heroscope/virgo.png";
// import libra from "../../assets/img/heroscope/libra.png";
// import scarpio from "../../assets/img/heroscope/scarpio.png";
// import sagittariusbig from "../../assets/img/heroscope/sagittariusbig.png";
// import capricor from "../../assets/img/heroscope/capricor.png";
// import aquarius from "../../assets/img/heroscope/aquarius.png";
// import pisces from "../../assets/img/heroscope/pisces.png";
import axiosConfig from '../../axiosConfig'

class HeroscopesTwo extends React.Component {
  constructor() {
    super()
    this.state = {
      horoscope: [],
    }
  }

  componentDidMount = () => {
    axiosConfig
      .get('/admin/Rashilist')
      .then((response) => {
        console.log(response.data)
        if (response.data.status === true) {
          this.setState({ horoscope: response.data.data })
        }
      })
      .catch((error) => {
        console.log(error)
        console.log(error.response)
      })
  }

  render() {
    const { horoscope } = this.state
    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              backgroundColor: '#FFD59E',
              width: '100%',
              padding: '70px 0px',
              backgroundSize: 'cover',
            }}
          >
            <Container>
              <Row>
                <Col md="12">
                  <div className="leftcont text-left">
                    <h1>Todays Horoscope 2022</h1>
                    <p></p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section className="ptb-0">
          <Container>
            <Row>
              <Col lg="12">
                <div className="scope-1">
                  <h3>TODAY'S HOROSCOPE</h3>
                  <p>
                    AstroVipra brings together astrologers and their boundless
                    knowledge about the occult science of Astrology on one
                    platform and lets you connect with them 24*7. Apart from the
                    best future predictions that help you get through the
                    difficult phase of life, AstroVipra also offers Free Live
                    astrology sessions, Daily horoscope, Free kundli matching
                    service, Spiritual store and much more.
                  </p>

                  <Row>
                    {horoscope.length
                      ? horoscope.map((hscope, index) => {
                          return (
                            <Col md="6" key={index}>
                              <div className="scope-detail scop-2 mtb-10">
                                <div className="scope-img">
                                  <img src={heroscope1} alt="" />
                                </div>
                                <div className="scope-text">
                                  <h4 className="">{hscope.rashi_title}</h4>
                                  <p>{hscope.desc}</p>
                                  <span className="scope-sp">
                                    <Link to={'/horoscopedetail/' + hscope._id}>
                                      Read More
                                    </Link>
                                  </span>
                                </div>
                              </div>
                            </Col>
                          )
                        })
                      : null}
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    )
  }
}

export default HeroscopesTwo
