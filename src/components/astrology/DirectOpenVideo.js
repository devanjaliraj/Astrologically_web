import { Container, Row, Col, Button, Input, Alert } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import React from "react";
import AgoraUIKit from "agora-react-uikit";

import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import "../../../src/assets/scss/style.scss";
import AllMinRechargeVideo from "./AllMinRechargeVideo";
import AlertPage from "./AlertPage";
import { LiveStreaming } from "./zegocloud/LiveStreaming";
import Timer from "./Timer";
import ReactStopwatch from "react-stopwatch";
import { CloudLightning } from "react-feather";
import Timerclass from "./Timerclass";
import { Fetchuserdetail } from "../header/IconGroup";

class DirectOpenVideo extends React.Component {
  constructor(props) {
    super(props);
    this.countRef = React.createRef();
    this.apicall = React.createRef();

    this.state = {
      videoCallList: "",
    };
    this.state = {
      setTimer: 0,
      setIsActive: false,
      setIsPaused: false,
      hours: 0,
      minutes: 0,
      seconds: 0,
      stream: null,
      changeView: false,
      userid: "",
      astroid: "",
      mobile: "",
      userData: {},
      firstname: "",
      p_firstname: "",
      lastname: "",
      p_lastname: "",
      dob: "",
      p_dob: "",
      date_of_time: "",
      p_date_of_time: "",
      birthPlace: "",
      p_birthPlace: "",
      gender: "",
      marital_status: "",
      occupation: "",
      topic_of_cnsrn: "",
      entertopic_of_cnsrn: "",
      data: [],
      setVideoCall: false,
      // videoCallData: "",
      toggle: true,
      userVideocalltoken: "",
    };
  }

  formatTime = (timer) => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  handlestartinterval = () => {
    this.apicall.current = setInterval(() => {
      let userId = JSON.parse(localStorage.getItem("user_id"));
      let astroId = localStorage.getItem("videoCallAstro_id");
      sessionStorage.setItem("typeofcall", "videocall");

      let payload = {
        userId: userId,
        astroId: astroId,
        status: true,
        // duration: this.formatTime(this.state.setTimer),
      };
      axiosConfig
        .post(`/user/addCallDuration`, payload)
        .then((res) => {
          console.log("callduration", res.data);
          Fetchuserdetail();
        })
        .catch((err) => {
          console.log(err.response.data.message);
          if (
            err.response.data.message === "Insufficient balance for the call"
          ) {
            // this.props.history.push("/");
            swal("You have Low Balance ");
            this.setState({ setVideoCall: false });
          }
          // swal(
          //   "Low Balance",
          //   "Your Balance is getting low As per minimum charge of this Astrologer",
          //   {
          //     buttons: {
          //       catch: { text: "Cancel ", value: "catch" },
          //       recharge: { text: "Recharge NOW ", value: "Recharge" },
          //     },
          //   }
          // ).then((value) => {
          //   switch (value) {
          //     case "catch":
          //       this.props.history.push("/");
          //       break;
          //     case "Recharge":
          //       swal("move to recharge ");
          //       break;
          //     default:
          //   }
          // });
        });
    }, 60000);
  };

  handleStart = () => {
    this.setState({ setIsActive: true });
    this.setState({ setIsPaused: true });
    this.countRef.current = setInterval(() => {
      this.setState({ setTimer: this.state.setTimer + 1 });
    }, 1000);
    this.handlestartinterval();
  };

  handlePause = () => {
    clearInterval(this.countRef.current);
    clearInterval(this.apicall.current);
    this.setState({ setIsPaused: false });
  };

  componentDidMount() {
    const userchannel_name = localStorage.getItem("userchannel_name");
    this.setState({ userchannelname: userchannel_name });
    const usertoken_for_videocall = localStorage.getItem(
      "usertoken_for_videocall"
    );
    this.setState({ usertoken: userchannel_name });
    const userid = JSON.parse(localStorage.getItem("user_id"));
    const callingastro_id = localStorage.getItem("videoCallAstro_id");

    const payload = {
      userAccount: userid,
      astroAccount: callingastro_id,
    };
    axiosConfig
      .post(`/user/userVideoCall`, payload)
      .then((res) => {
        console.log("videocallapio", res);
        // this.setState({
        //   videoCallList: res?.data?.channelName,
        // });
        // this.setState({ videoCallData: res?.data?.channelName });
        this.setState({ userVideocalltoken: res?.data?.userAccount });
        localStorage.setItem("usertoken_for_videocall", res?.data?.userAccount);
        localStorage.setItem("userchannel_name", res?.data?.channelName);
      })
      .catch((err) => {
        console.log(err);
      });

    axiosConfig
      .get(`/user/viewoneuser/${userid}`)
      .then((response) => {
        console.log("1154", response.data);
        this.setState({ mobile: response.data.data.mobile });
        this.setState({ userData: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  rtcProps = {
    // Pass your App ID here.
    appId: "7d1f07c76f9d46be86bc46a791884023",
    // Set the channel name.

    channel: localStorage.getItem("userchannel_name"),
    // channel: `${this.state.videoCallList}`,
    // Pass your temp token here.
    token:
      localStorage.getItem("usertoken_for_videocall") ||
      this.state.userVideocalltoken,

    // Set the user ID.
    uid: 1,
    // Set the user role
    // role: "",
    // layout:"",
  };

  callbacks = {
    EndCall: () => {
      this.setState({ setVideoCall: false });
    },
  };

  render() {
    return (
      <LayoutOne headerTop="visible">
        {/* {this.state.toggle === true ? ( */}
        <>
          <div
            style={{
              display: "flex",
              width: "100vw",
              height: "80vh",
            }}
          >
            <AgoraUIKit rtcProps={this.rtcProps} callbacks={this.callbacks} />
          </div>
        </>

        {/* <div style={{ display: "flex", width: "100vw", height: "90vh" }}>
          <AgoraUIKit rtcProps={this.rtcProps} callbacks={this.callbacks} />
        </div> */}
      </LayoutOne>
    );
  }
}
export default DirectOpenVideo;
