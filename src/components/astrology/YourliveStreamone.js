import React, { useEffect, useState } from "react";
import { Button, Card, Col, FormGroup, Input, Label, Row } from "reactstrap";
import AgoraUIKit from "agora-react-uikit";
import { useLocation } from "react-router-dom";

import axiosConfig from "../../axiosConfig";

import LayoutOne from "../../layouts/LayoutOne";

// import VideoCalls from "./VideoCalls";

function YourliveStreamone({ props }) {
  const [videoCall, setVideoCall] = useState(false);
  const [token, settoken] = useState("");
  const [channelName, setchannelName] = useState("");
  const [Token, setToken] = useState("");
  const [Addcall, setAddcall] = useState(false);

  const location = useLocation();

  const rtcProps = {
    // Pass your App ID here.
    appId: "7d1f07c76f9d46be86bc46a791884023",

    // enableVideo: false,
    // dualStreamMode: 0,

    channel: "data.channelName",
    // channel: channelName,
    // Pass your temp token here.
    token:
      "007eJxTYEg1WKq8YNrZq7Hry+t1pN+/dWLIDZotUv3YuP3lGv0TjsIKDOYphmkG5snmZmmWKSZmSakWZknJJmaJ5paGFhYmBkbGfocSUxoCGRmC7M+xMjJAIIjPzpCYV5qVWpzBwAAAcZYfjg==",
    // token: token,

    // role: "host",
    role: "audience",
  };
  const callbacks = {
    EndCall: () => {
      window.location.reload();
    },
  };

  // const handleSubmit = (e) => {
  //   const astroid = localStorage.getItem("astroId");

  //   axiosConfig
  //     .post(`/user/add_VideoChannel`, {
  //       astroid: astroid,
  //       channelName: channelname,
  //     })
  //     .then((res) => {
  //       setchannel("");
  //       swal("Channel Created Successfully");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const handlestatus = (e) => {
  //   e.preventDefault();
  //   const astroid = localStorage.getItem("astroId");

  //   let payload = {
  //     astroAccount: astroid,
  //   };
  //   if (Status === "Active") {
  //     axiosConfig
  //       .post(`/user/astroVideoCall`, payload)
  //       .then((res) => {
  //         console.log(res.data.astroAccount);
  //         setToken(res.data.astroAccount);
  //         localStorage.setItem("astrotokenforvideocall", res.data.astroAccount);
  //         setAddcall(true);

  //         // setVideoCall(true);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  //   if (Status === "Deactive") {
  //     localStorage.removeItem("astrotokenforvideocall");
  //     setAddcall(false);
  //   }
  // };
  useEffect(() => {
    console.log(location.state);
    let userId = JSON.parse(localStorage.getItem("user_id"));
    const astroid = localStorage.getItem("astroId");
    console.log(astroid);
    let livetkn = {
      astroAccount: astroid,
      userAccount: userId,
    };
    axiosConfig
      .post(`/user/UerLiveStreamingToken`, livetkn)
      .then((res) => {
        console.log(res);
        // settoken(res?.data?.token);
        // setchannelName(res?.data?.channelName);
        // console.log(res.data?.token);
        // console.log(res.data?.channelName);
      })
      .catch((err) => {
        console.log(err);
      });
    // axiosConfig
    //   .get(`user/channelList/${astroid}`)
    //   .then((res) => {
    //     console.log(res.data?.data[0]?.channelName);
    //     setchannelName(res.data?.data[0]?.channelName);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);
  return (
    <div>
      <LayoutOne headerTop="visible">
        <Card className="mt-1 mb-2">
          <Row>
            <div className="container mt-1 mb-1">
              <div style={{ display: "flex", width: "100vw", height: "80vh" }}>
                <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
              </div>
            </div>
          </Row>
        </Card>
      </LayoutOne>
    </div>
  );
}

export default YourliveStreamone;
