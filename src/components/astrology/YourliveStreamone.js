import React, { useEffect, useState } from "react";
import { Button, Card, Col, FormGroup, Input, Label, Row } from "reactstrap";
import AgoraUIKit from "agora-react-uikit";

import axiosConfig from "../../axiosConfig";

import LayoutOne from "../../layouts/LayoutOne";

// import VideoCalls from "./VideoCalls";

function YourliveStreamone() {
  const [videoCall, setVideoCall] = useState(false);
  const [channelname, setchannel] = useState("");
  const [channelNamecreated, setchannelName] = useState("");
  const [Status, setStatus] = useState("");
  const [Token, setToken] = useState("");
  const [Addcall, setAddcall] = useState(false);

  const [view, setview] = useState(false);
  const [listofchannel, setlistofchannel] = useState();

  const rtcProps = {
    // Pass your App ID here.
    appId: "7d1f07c76f9d46be86bc46a791884023",

    // enableVideo: false,
    // dualStreamMode: 0,

    // Set the channel name.
    // channel: channelNamecreated,
    channel: "anujesh",
    // Pass your temp token here.
    token:
      "007eJxTYEg1WKq8YNrZq7Hry+t1pN+/dWLIDZotUv3YuP3lGv0TjsIKDOYphmkG5snmZmmWKSZmSakWZknJJmaJ5paGFhYmBkbGfocSUxoCGRmC7M+xMjJAIIjPzpCYV5qVWpzBwAAAcZYfjg==",
    // token: Token || localStorage.getItem("astrotokenforvideocall"),

    // Set the user ID.
    // uid: 0,
    // Set the user role
    // role: "host",
    role: "audience",
  };
  const callbacks = {
    EndCall: () => {
      window.location.reload();
      setVideoCall(false);
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

  const handlestatus = (e) => {
    e.preventDefault();
    const astroid = localStorage.getItem("astroId");

    let payload = {
      astroAccount: astroid,
    };
    if (Status === "Active") {
      axiosConfig
        .post(`/user/astroVideoCall`, payload)
        .then((res) => {
          console.log(res.data.astroAccount);
          setToken(res.data.astroAccount);
          localStorage.setItem("astrotokenforvideocall", res.data.astroAccount);
          setAddcall(true);

          // setVideoCall(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (Status === "Deactive") {
      localStorage.removeItem("astrotokenforvideocall");
      setAddcall(false);
    }
  };
  useEffect(() => {
    const astroid = localStorage.getItem("astroId");
    console.log(astroid);

    axiosConfig
      // .get(`/user/getoneChannl/644fae265f6b65e11a4bdbd7`)
      .get(`user/channelList/${astroid}`)
      .then((res) => {
        console.log(res.data?.data[0]?.channelName);
        setchannelName(res.data?.data[0]?.channelName);
      })
      .catch((err) => {
        console.log(err);
      });
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
