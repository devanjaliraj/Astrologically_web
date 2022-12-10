/* eslint-disable no-unused-expressions */
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap'
import LayoutOne from '../../layouts/LayoutOne'
import axiosConfig from '../../axiosConfig'
import swal from 'sweetalert'
import Ansicon from '../../assets/img/ansicon.png'

class AskQuestion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      astroId: '',
      question: '',
      createdAt: '',
      astroQuesList: [],
      userId: '',
    }
  }

  componentDidMount() {
    let { id } = this.props.match.params

    // console.log('jdhgkfjgkjd', astroId)
    axiosConfig
      .get(`/admin/getoneAstro/${id}`)
      .then((response) => {
        console.log(response.data)
        this.setState({
          fullname: response.data.data.fullname,
          all_skills: response.data.data.all_skills,
          language: response.data.data.language,
          img: response.data.data.img[0],
          status: response?.data?.data?.status,
          Exp: response.data.data.Exp,
          exp_in_years: response.data.data.exp_in_years,
          callCharge: response.data.data.callCharge,
          long_bio: response.data.data.long_bio,
          msg: response.data.data.msg,
          astroMobile: response?.data?.data?.mobile,
          astroId: response?.data?.data?._id,
          userId: response?.data?.data?._id,
          createdAt: response?.data?.data?.createdAt,
        })
      })
      .catch((error) => {
        console.log(error)
      })

    // this.getQuestionList(id)
    let user_id = localStorage.getItem('user_id')
    axiosConfig
      .get(`/user/list_ask_qus/${id}/${JSON.parse(user_id)}`)
      .then((response) => {
        console.log('fgshdfhsdfhs', response.data.data)
        this.setState({
          astroQuesList: response?.data?.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // getQuestionList = (id) => {
  //   axiosConfig
  //     .get(`/user/astro_ques_list/${id}`)
  //     .then((response) => {
  //       console.log(response.data)
  //       this.setState({
  //         astroQuesList: response?.data?.data,
  //       })
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  submitHandler = (e, astroid, userId) => {
    e.preventDefault()
    let { id } = this.props.match.params
    // console.log(id)
    // let astroid = JSON.parse(localStorage.getItem('astroId'))

    // let userid = JSON.parse(localStorage.getItem('userId'))
    let user_id = JSON.parse(localStorage.getItem('user_id'))
    let obj = {
      astroId: id,
      astroid: astroid,
      userid: user_id,
      question: this.state.question,
    }

    axiosConfig
      .post(`/user/user_ask_qus`, obj)

      .then((response) => {
        console.log('@@@@@', response.data.data)
        this.setState({ question: '' })
        // this.getQuestionList(id)
        swal('Success!', 'Submitted SuccessFull!', 'success')
        //window.location.reload('/askQuestion')
      })

      .catch((error) => {
        swal('Error!', 'You clicked the button!', 'error')
        console.log(error)
      })
  }

  handleChange = (e) => {
    this.setState({
      question: e.target.value,
    })
  }

  render() {
    const { astroQuesList } = this.state
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
                    <h1>Ask Question to Astrologer</h1>
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
                      <div className="supp-2 ask-qes-2">
                        <ul>
                          <li>
                            <h3>
                              Astrologer : <span>{this.state.fullname}</span>
                            </h3>
                          </li>
                          <li>
                            Date/Time: <span>{this.state.createdAt}</span>
                          </li>
                          <li>{/* Time: <span>4:00pm</span> */}</li>
                          <li>
                            Status: <span>{this.state.status}</span>
                          </li>
                          <li>
                            Question:
                            <ul className="ask-ques">
                              {astroQuesList.length > 0
                                ? astroQuesList.map((astro, index) => {
                                    return (
                                      <li>
                                        <i
                                          class="fa fa-quora"
                                          aria-hidden="true"
                                          style={{ marginRight: 6 }}
                                        >
                                          {index + 1 + '.'}
                                        </i>

                                        {astro.question}

                                        {astro?.answer ? (
                                          <p>
                                            <img src={Ansicon} alt="" />
                                            {astro?.answer}
                                          </p>
                                        ) : null}
                                      </li>
                                    )
                                  })
                                : 'No question available'}
                            </ul>
                          </li>
                        </ul>
                        <div className="supp-4">
                          <h3>Write Your Question</h3>
                          <form>
                            <Col md="12">
                              <div class="form-group mtb-10">
                                <label>Question*</label>
                                <textarea
                                  className="form-control stp"
                                  placeholder="Ask ypur question here..."
                                  maxLength={150}
                                  onChange={(e) => {
                                    this.handleChange(e)
                                  }}
                                ></textarea>
                                <small className="sm-txt">
                                  Note: Maximum 150 Words Accepted.{' '}
                                </small>
                              </div>{' '}
                            </Col>
                            <Button
                              className="btn btn-primary"
                              onClick={(e) =>
                                this.submitHandler(
                                  e,
                                  this.state.astroId,
                                  this.state.userId,
                                )
                              }
                            >
                              Submit
                            </Button>
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
    )
  }
}
export default AskQuestion
