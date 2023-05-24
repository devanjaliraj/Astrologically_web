import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
// import MetaTags from "react-meta-tags";
// import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import LocationMap from "../../components/contact/LocationMap";
import textbottom from "../../assets/img/textbottom.png";
import axiosConfig from "../../axiosConfig";
import ReactHtmlParser from "react-html-parser";
import swal from "sweetalert";

const Contact = ({ location }) => {
  const [data, setdata] = useState({
    Name: "",
    email: "",
    Subject: "",
    Message: "",
  });
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");

  const handlechange = (e) => {
    e.preventDefault();

    const data = {
      userid: JSON.parse(localStorage.getItem("user_id")).toString(),
      name: Name.toString(),
      email: Email.toString(),
      subject: Subject.toString(),
      msg: Message.toString(),
    };
    axiosConfig
      .post(`/admin/add_contactus`, data)
      .then((res) => {
        console.log(res.data.message === "success");
        if (res.data.message === "success") {
          swal("Submitted Sucessfully");
          setEmail("");
          setName("");
          setSubject("");
          setMessage("");
        }
      })
      .catch((err) => {
        console.log(err);
        swal("Something went wrong", "Try again Later");
      });
  };

  // const { pathname } = location;
  // console.log(pathname);

  return (
    <Fragment>
      {/* <MetaTags>
        <title>Flone | Contact</title>
        <meta
          name="description"
          content="Contact of flone react minimalist eCommerce template."
        />
      </MetaTags> */}
      {/* <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Contact
      </BreadcrumbsItem> */}
      <LayoutOne headerTop="visible">
        <div className="headingtitle text-center pt-30">
          <h2>Contact Us</h2>
          <img src={textbottom} alt="" className="sb-img" />
        </div>
        {/* breadcrumb */}
        {/* <Breadcrumb /> */}
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <div className="contact-map mb-10">
              <LocationMap latitude="47.444" longitude="-122.176" />
            </div>
            <div className="custom-row-2">
              <div className="col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      <p>+012 345 678 102</p>
                      <p>+012 345 678 102</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:yourname@email.com">
                          yourname@email.com
                        </a>
                      </p>
                      <p>
                        <a href="https://yourwebsitename.com">
                          yourwebsitename.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p>Address goes here, </p>
                      <p>street, Crossroad 123.</p>
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>Follow Us</h3>
                    <ul>
                      <li>
                        <a href="//facebook.com">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="//pinterest.com">
                          <i className="fa fa-pinterest-p" />
                        </a>
                      </li>
                      <li>
                        <a href="//thumblr.com">
                          <i className="fa fa-tumblr" />
                        </a>
                      </li>
                      <li>
                        <a href="//vimeo.com">
                          <i className="fa fa-vimeo" />
                        </a>
                      </li>
                      <li>
                        <a href="//twitter.com">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>Get In Touch</h2>
                  </div>
                  <form className="contact-form-style">
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          required
                          name="name"
                          value={Name}
                          placeholder="Name*"
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          required
                          name="email"
                          value={Email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email*"
                          type="email"
                        />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="Subject"
                          value={Subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="Subject*"
                          type="text"
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          required
                          name="Message"
                          value={Message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Your Message*"
                          defaultValue={""}
                        />
                        <button
                          onClick={handlechange}
                          className="submit"
                          type="submit"
                        >
                          SEND
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-message" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Contact.propTypes = {
  location: PropTypes.object,
};

export default Contact;
