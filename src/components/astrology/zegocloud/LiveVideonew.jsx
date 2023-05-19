import { Container, Row, Col, Button, Input } from "reactstrap";
import LayoutOne from "../../../layouts/LayoutOne";
import React, { useEffect, useState } from "react";
import AgoraUIKit from "agora-react-uikit";
import axiosConfig from "../../../axiosConfig";
import swal from "sweetalert";
import { Link, useHistory } from "react-router-dom";

import "../../../../src/assets/scss/style.scss";
import { useLocation } from "react-router-dom";
import { LiveStreaming } from "./LiveStreaming.js";

function LiveVideonew() {
  const [Videocall, setVideocall] = useState(true);
  const [chanel, setchannel] = useState("");
  const [token, settoken] = useState("");
  const history = useHistory();

  const location = useLocation();
  // console.log(location.state);

  const rtcProps = {
    appId: "7d1f07c76f9d46be86bc46a791884023",
    // channel: "Anjali",
    channel: chanel,
    // Pass your temp token here.
    token: token,
    uid: 0,
    role: "audience",
  };

  const callbacks = {
    EndCall: () => {
      setVideocall(false);

      history.push({
        pathname: "/astrorating",
      });
      sessionStorage.setItem("typeofcall", "Livestream");

      // window.location.replace("/");

      // console.log("object");
    },
  };
  useEffect(() => {
    console.log(location.state);
    const channel = location?.state?.channelName;
    const token = location?.state?.token;
    settoken(token);
    setchannel(channel);
    console.log(channel);

    let userId = JSON.parse(localStorage.getItem("user_id"));
    const astroid = localStorage.getItem("astroId");
    // console.log(userId);
    // let livetkn = {
    //   astroAccount: astroid,
    //   userAccount: userId,
    // };
    // axiosConfig
    //   .post(`/user/UerLiveStreamingToken`, livetkn)
    //   .then((res) => {
    //     console.log(res.data);
    //      settoken(res?.data?.token);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);
  return (
    <div>
      <LayoutOne headerTop="visible">
        {/* live streaming by anujesh host*/}

        {Videocall ? (
          <>
            <div
              style={{
                display: "flex",
                width: "80vw",
                height: "90vh",
              }}
              className="container"
            >
              <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
            </div>
          </>
        ) : null}
      </LayoutOne>
    </div>
  );
}

export default LiveVideonew;
