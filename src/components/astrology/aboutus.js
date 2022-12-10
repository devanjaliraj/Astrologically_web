import React from 'react'
// import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import textbottom from '../../assets/img/textbottom.png'
import Abotimg from '../../assets/img/abot.png'
class AboutUs extends React.Component {
  render() {
    return (
      <div className="col-lg-12 col-md-12 mb-30">
        <div className="category-home">
          <section>
            <Container>
              <div className="heading">
                <h2>About Us</h2>
                <img src={textbottom} alt="" className="sb-img" />
              </div>
              <Row>
                <Col lg="6">
                  <div>
                    <img
                      src={Abotimg}
                      alt=""
                      gclassName="ab-img"
                      className="abt-img"
                    />
                  </div>
                </Col>
                <Col lg="6">
                  <div className="">
                    <h3>AstroVipra Connects You With Best Astrologers</h3>
                    <p>
                      We all believe that Vedic Astrology helps you to predict
                      your future and help you to be ready for your future
                      problems. We at AstroVipra too help you with Future
                      predictions, Life Predictions, Marriage life predictions
                      and much more with our Best Astrologers panel.
                    </p>

                    <p>
                      We have Expert & Verified Astrologers who can guide you
                      and suggest you best astrology remedies which can help you
                      to make your life better.
                    </p>

                    <p>
                      We all have this curiosity to know about our future
                      however, most of us fail to do so. Not having a reliable
                      astrologer in contact remains the major issue. A few want
                      to know about their marriage or match making and others
                      about their career or job.
                    </p>

                    <p>
                      We are a reliable platform that connects you with the most
                      trustworthy astrologers that can guide you through your
                      life. We are serving our clients from last seven years
                      with the sole purpose of helping them out at their worst
                      times.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    )
  }
}

export default AboutUs
