import React, { useState, useEffect } from "react";
import AgoraUIKit, { PropsInterface, layout } from "agora-react-uikit";
import AgoraRTC from "agora-rtc-sdk-ng";
import Livestream from "./Livestream";
const Livenewpage = () => {
  const [videocall, setVideocall] = useState(true);
  const [isHost, setHost] = useState(false);
  const [isPinned, setPinned] = useState(false);
  const [client, setClient] = useState(null);
  const [localAudioTrack, setLocalAudioTrack] = useState(null);
  const [localVideoTrack, setLocalVideoTrack] = useState(null);
  const [remoteUsers, setRemoteUsers] = useState([]);

  const props: PropsInterface = {
    rtcProps: {
      appId: "7d1f07c76f9d46be86bc46a791884023",
      channel: "arpit",
      role: isHost ? "host" : "audience",
      layout: isPinned ? layout.pin : layout.grid,
    },
    callbacks: {
      EndCall: () => setVideocall(false),
    },
    styleProps: {
      localBtnContainer: { backgroundColor: "blueviolet" },
    },
  };
  useEffect(() => {
    const init = async () => {
      const agoraClient = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
      setClient(agoraClient);

      const audioTrack = await AgoraRTC.createMicrophoneAudioTrack();
      setLocalAudioTrack(audioTrack);

      const videoTrack = await AgoraRTC.createCameraVideoTrack();
      setLocalVideoTrack(videoTrack);
    };

    init();
  }, []);
  const joinChannel = async () => {
    await client.join("anujesh", null, null);

    await client.publish([localAudioTrack, localVideoTrack]);

    client.on("user-published", async (user, mediaType) => {
      await client.subscribe(user, mediaType);
      if (mediaType === "video") {
        setRemoteUsers((prev) => [...prev, user]);
      }
    });

    client.on("user-unpublished", (user) => {
      setRemoteUsers((prev) => prev.filter((u) => u.uid !== user.uid));
    });
  };

  const leaveChannel = async () => {
    await client?.leave();
    setClient(null);
    setLocalAudioTrack(null);
    setLocalVideoTrack(null);
    setRemoteUsers([]);
  };
  const styles = {
    container: {
      width: "80vw",
      height: "80vh",
      display: "flex",
      flex: 1,
      backgroundColor: "#007bff22",
    },
    heading: { textAlign: "center", marginBottom: 0 },
    videoContainer: { display: "flex", flexDirection: "column", flex: 1 },
    nav: { display: "flex", justifyContent: "space-around" },
    btn: {
      backgroundColor: "#007bff",
      cursor: "pointer",
      borderRadius: 5,
      padding: 5,
      color: "#ffffff",
      fontSize: 20,
    },
  };
  return (
    <div>
      <div style={styles.container}>
        {videocall ? (
          <>
            <div style={styles.nav}>
              <p style={{ fontSize: 20, width: 200 }}>
                You're {isHost ? "a host" : "an audience"}
              </p>
              <p style={styles.btn} onClick={() => setHost(!isHost)}>
                Change Role
              </p>
              <p style={styles.btn} onClick={() => setPinned(!isPinned)}>
                Change Layout
              </p>
            </div>
            <AgoraUIKit
              rtcProps={props.rtcProps}
              callbacks={props.callbacks}
              styleProps={props.styleProps}
            />
          </>
        ) : (
          <h3 style={styles.btn} onClick={() => setVideocall(true)}>
            Start Call
          </h3>
        )}
      </div>
      <h2 class="left-align">Get started with interactive live streaming</h2>
      <div class="row">
        <div>
          <button onClick={joinChannel}>Join Channel</button>
          <button onClick={leaveChannel}>Leave Channel</button>
          <div>
            <video ref={(node) => (node ? localVideoTrack?.play(node) : "")} />
          </div>
          {remoteUsers.map((user) => (
            <div key={user.uid}>
              <video
                ref={(node) => (node ? user.videoTrack?.play(node) : "")}
              />
            </div>
          ))}
        </div>
        {/* <Livestream /> */}
      </div>
    </div>
  );
};

export default Livenewpage;
