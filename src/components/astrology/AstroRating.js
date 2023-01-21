import React from "react";
// import ReactDOM from "react-dom";

import StarRatingComponent from "react-star-rating-component";
import { Col, Container, Row } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import axiosConfig from "../../axiosConfig";
class AstroRating extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 1,
      rating_custom_icon: 6,
      rating_half_star: 3.5,
      rating_empty_initial: 0,
      type: "Chat",
      astroid: "",
      userid: "",
      question: "",
      rating: "",
      comment: "",

    };
  }

  onStarClick(nextValue, prevValue, name) {
    console.log(
      "name: %s, nextValue: %s, prevValue: %s",
      name,
      nextValue,
      prevValue
    );
    this.setState({ rating: nextValue });
  }

  onStarClickCustomIcon(nextValue, prevValue, name) {
    console.log(
      "name: %s, nextValue: %s, prevValue: %s",
      name,
      nextValue,
      prevValue
    );
    this.setState({ rating_custom_icon: nextValue });
  }

  onStarClickHalfStar(nextValue, prevValue, name, e) {
    const xPos =
      (e.pageX - e.currentTarget.getBoundingClientRect().left) /
      e.currentTarget.offsetWidth;

    if (xPos <= 0.5) {
      nextValue -= 0.5;
    }

    console.log(
      "name: %s, nextValue: %s, prevValue: %s",
      name,
      nextValue,
      prevValue
    );
    // console.log(e);
    this.setState({ rating_half_star: nextValue });
  }

  onStarClickEmptyInitial(nextValue, prevValue, name) {
    console.log(
      "name: %s, nextValue: %s, prevValue: %s",
      name,
      nextValue,
      prevValue
    );
    this.setState({ rating_empty_initial: nextValue });
  }
  submitHandler = (e, astroid, userId) => {
    e.preventDefault();
    let { id } = this.props.match.params;

    let user_id = JSON.parse(localStorage.getItem("user_id"));
    let obj = {
      astroId: id,
      astroid: astroid,
      userid: user_id,
      question: this.state.question,
      rating: this.state.rating,
      comment: this.state.comment,
      type: this.state.type,

    };

    axiosConfig
      .post(`/user/addChatReview`, obj)
      // 13.233.228.168:8000/user/addChatReview
      .then((response) => {
        console.log("@@@@@", response.data.data);
        this.setState({ question: "" });
        // this.getQuestionList(id)
        // swal("Success!", "Submitted SuccessFull!", "success");
        //window.location.reload('/askQuestion')
      })

      .catch((error) => {
        // swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  };

  handleChange = (e) => {
    this.setState({
      question: e.target.value,
    });
  };

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
                    <h1>Your Review</h1>
                    <p></p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section>
          <Container>
            <Row>
              <Col lg="12">
                <div className="rat-box">
                  <h3>Add Reviews</h3>
                  <form>
                    <Row>
                      <Col md="6">
                        <div className="star-bx mt-5">
                          <h3>Rating ({this.state.rating})</h3>
                          <div style={{ fontSize: 26 }}>
                            <StarRatingComponent
                              name="app2"
                              starCount={8}
                              value={this.state.rating}

                              onStarClick={this.onStarClick.bind(this)}
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="comm-bx">
                          <label>Comments *</label>
                          <textarea
                            name="comment"
                            placeholder="Your Message*"
                            maxLength={150}
                            onChange={(e) => {
                              this.handleChange(e);
                            }}></textarea>
                          <button className="stb-btn"
                            onClick={(e) =>
                              this.submitHandler(
                                e,
                                this.state.astroId,
                                this.state.userId
                              )
                            }>Submit</button>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}

export default AstroRating;
