import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import LayoutOne from '../../layouts/LayoutOne'
import heroscope1 from '../../assets/img/heroscope/heroscope1.png'
import axiosConfig from '../../axiosConfig'
class HeroscopesTwo1 extends React.Component {
  constructor() {
    super()
    this.state = {
      horoscope: [],
    }
  }


  render() {
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
                    <h1>Weekly Horoscope </h1>
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
                  <h3>WEEKLY HOROSCOPE</h3>
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

                    <Col md="">
                      <h4 className="">Aries</h4>
                      <Link to={'/horoscopedetail1/aries'}>
                        <div className="scope-img">
                          <img src={heroscope1} alt="" />
                        </div>
                      </Link>
                    </Col>

                    <Col md="">

                      <Link to={'/horoscopedetail1/taurus'}>
                        <div className="scope-detail scop-2 mtb-10">

                          <div className="scope-img">
                            <img src={heroscope1} alt="" />
                            <h4 className="">Taurus</h4>
                          </div>
                        </div>
                      </Link>
                    </Col>

                    <Col md="2">
                      <div className="scope-detail scop-2 mtb-10">
                        <div className="scope-img">
                          <img src={heroscope1} alt="" />
                        </div>
                        <div className="scope-text">
                          <h4 className="">Gemini</h4>
                          {/* <p>{hscope.desc}</p> */}
                          <span className="scope-sp">
                            <Link to={'/horoscopedetail1/gemini'}>
                              Read More
                            </Link>
                          </span>
                        </div>
                      </div>
                    </Col>

                    <Col md="2">
                      <div className="scope-detail scop-2 mtb-10">
                        <div className="scope-img">
                          <img src={heroscope1} alt="" />
                        </div>
                        <div className="scope-text">
                          <h4 className="">Cancer</h4>
                          {/* <p>{hscope.desc}</p> */}
                          <span className="scope-sp">
                            <Link to={'/horoscopedetail1/cancer'}>
                              Read More
                            </Link>
                          </span>
                        </div>
                      </div>
                    </Col>

                    <Col md="2">
                      <div className="scope-detail scop-2 mtb-10">
                        <div className="scope-img">
                          <img src={heroscope1} alt="" />
                        </div>
                        <div className="scope-text">
                          <h4 className="">Leo</h4>
                          {/* <p>{hscope.desc}</p> */}
                          <span className="scope-sp">
                            <Link to={'/horoscopedetail1/leo'}>
                              Read More
                            </Link>
                          </span>
                        </div>
                      </div>
                    </Col>

                    <Col md="2">
                      <div className="scope-detail scop-2 mtb-10">
                        <div className="scope-img">
                          <img src={heroscope1} alt="" />
                        </div>
                        <div className="scope-text">
                          <h4 className="">Virgo</h4>
                          {/* <p>{hscope.desc}</p> */}
                          <span className="scope-sp">
                            <Link to={'/horoscopedetail1/virgo'}>
                              Read More
                            </Link>
                          </span>
                        </div>
                      </div>
                    </Col>

                    <Col md="2">
                      <div className="scope-detail scop-2 mtb-10">
                        <div className="scope-img">
                          <img src={heroscope1} alt="" />
                        </div>
                        <div className="scope-text">
                          <h4 className="">Libra</h4>
                          {/* <p>{hscope.desc}</p> */}
                          <span className="scope-sp">
                            <Link to={'/horoscopedetail1/libra'}>
                              Read More
                            </Link>
                          </span>
                        </div>
                      </div>
                    </Col>

                    <Col md="2">
                      <div className="scope-detail scop-2 mtb-10">
                        <div className="scope-img">
                          <img src={heroscope1} alt="" />
                        </div>
                        <div className="scope-text">
                          <h4 className="">Scorpio</h4>
                          {/* <p>{hscope.desc}</p> */}
                          <span className="scope-sp">
                            <Link to={'/horoscopedetail1/scorpio'}>
                              Read More
                            </Link>
                          </span>
                        </div>
                      </div>
                    </Col>

                    <Col md="2">
                      <div className="scope-detail scop-2 mtb-10">
                        <div className="scope-img">
                          <img src={heroscope1} alt="" />
                        </div>
                        <div className="scope-text">
                          <h4 className="">Sagittarius</h4>
                          {/* <p>{hscope.desc}</p> */}
                          <span className="scope-sp">
                            <Link to={'/horoscopedetail1/sagittarius'}>
                              Read More
                            </Link>
                          </span>
                        </div>
                      </div>
                    </Col>

                    <Col md="2">
                      <div className="scope-detail scop-2 mtb-10">
                        <div className="scope-img">
                          <img src={heroscope1} alt="" />
                        </div>
                        <div className="scope-text">
                          <h4 className="">Capricorn</h4>
                          {/* <p>{hscope.desc}</p> */}
                          <span className="scope-sp">
                            <Link to={'/horoscopedetail1/capricorn'}>
                              Read More
                            </Link>
                          </span>
                        </div>
                      </div>
                    </Col>

                    <Col md="2">
                      <div className="scope-detail scop-2 mtb-10">
                        <div className="scope-img">
                          <img src={heroscope1} alt="" />
                        </div>
                        <div className="scope-text">
                          <h4 className="">Aquarius</h4>
                          {/* <p>{hscope.desc}</p> */}
                          <span className="scope-sp">
                            <Link to={'/horoscopedetail1/aquarius'}>
                              Read More
                            </Link>
                          </span>
                        </div>
                      </div>
                    </Col>

                    <Col md="2">
                      <div className="scope-detail scop-2 mtb-10">
                        <div className="scope-img">
                          <img src={heroscope1} alt="" />
                        </div>
                        <div className="scope-text">
                          <h4 className="">Pisces</h4>
                          {/* <p>{hscope.desc}</p> */}
                          <span className="scope-sp">
                            <Link to={'/horoscopedetail1/pisces'}>
                              Read More
                            </Link>
                          </span>
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
    )
  }
}

export default HeroscopesTwo1