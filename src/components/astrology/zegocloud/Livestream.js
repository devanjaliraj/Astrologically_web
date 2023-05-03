import React, { useContext, useEffect, useState } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import {
  PropsContext,
  GridVideo,
  layout,
  LocalControls,
  PinnedVideo,
  RtcConfigure,
  TracksConfigure,
} from "agora-react-uikit";
import RTMP from "./RTMP";

function Livestream() {
  const [videocall, setVideocall] = useState(false);
  const [isHost, setHost] = useState(true);
  const [isPinned, setPinned] = useState(false);

  let options = {
    // Pass your App ID here.
    appId: "7d1f07c76f9d46be86bc46a791884023",
    // Set the channel name.
    channel: "anujesh",
    // Pass your temp token here.
    token:
      "007eJxTYGDa4maqVP+s4+G3uCl1Ajd6budsjz63fv9KUYPn7F+ispcoMJinGKYZmCebm6VZppiYJaVamCUlm5glmlsaWliYGBgZf5zmn9IQyMhwbqo3IyMDBIL47AyJeaVZqcUZDAwAEmUiBQ==",
    // Set the user ID.
    uid: 0,
    // Set the user role
    role: "",
  };

  let channelParameters = {
    // A variable to hold a local audio track.
    localAudioTrack: null,
    // A variable to hold a local video track.
    localVideoTrack: null,
    // A variable to hold a remote audio track.
    remoteAudioTrack: null,
    // A variable to hold a remote video track.
    remoteVideoTrack: null,
    // A variable to hold the remote user id.s
    remoteUid: null,
  };
  function startBasicCall() {
    console.log("object");
    // Create an instance of the Agora Engine
    const agoraEngine = AgoraRTC.createClient({ mode: "live", codec: "vp8" });
    // Dynamically create a container in the form of a DIV element to play the remote video track.
    const remotePlayerContainer = document.createElement("div");
    // Dynamically create a container in the form of a DIV element to play the local video track.
    const localPlayerContainer = document.createElement("div");
    // Specify the ID of the DIV container. You can use the uid of the local user.
    localPlayerContainer.id = options.uid;
    // Set the textContent property of the local video container to the local user id.
    localPlayerContainer.textContent = "Local user " + options.uid;
    // Set the local video container size.
    localPlayerContainer.style.width = "640px";
    localPlayerContainer.style.height = "480px";
    localPlayerContainer.style.padding = "15px 5px 5px 5px";
    // Set the remote video container size.
    remotePlayerContainer.style.width = "640px";
    remotePlayerContainer.style.height = "480px";
    remotePlayerContainer.style.padding = "15px 5px 5px 5px";
    // Listen for the "user-published" event to retrieve a AgoraRTCRemoteUser object.
    agoraEngine.on("user-published", async (user, mediaType) => {
      // Subscribe to the remote user when the SDK triggers the "user-published" event.
      await agoraEngine.subscribe(user, mediaType);
      console.log("subscribe success");
      // Subscribe and play the remote video in the container If the remote user publishes a video track.
      if (mediaType == "video") {
        // Retrieve the remote video track.
        channelParameters.remoteVideoTrack = user.videoTrack;
        // Retrieve the remote audio track.
        channelParameters.remoteAudioTrack = user.audioTrack;
        // Save the remote user id for reuse.
        channelParameters.remoteUid = user.uid.toString();
        // Specify the ID of the DIV container. You can use the uid of the remote user.
        remotePlayerContainer.id = user.uid.toString();
        channelParameters.remoteUid = user.uid.toString();
        remotePlayerContainer.textContent =
          "Remote user " + user.uid.toString();
        // Append the remote container to the page body.
        document.body.append(remotePlayerContainer);
        if (options.role != "host") {
          // Play the remote video track.
          channelParameters.remoteVideoTrack.play(remotePlayerContainer);
        }
      }
      // Subscribe and play the remote audio track If the remote user publishes the audio track only.
      if (mediaType == "audio") {
        // Get the RemoteAudioTrack object in the AgoraRTCRemoteUser object.
        channelParameters.remoteAudioTrack = user.audioTrack;
        // Play the remote audio track. No need to pass any DOM element.
        channelParameters.remoteAudioTrack.play();
      }
      // Listen for the "user-unpublished" event.
      agoraEngine.on("user-unpublished", (user) => {
        console.log(user.uid + "has left the channel");
      });
    });
    window.onload = function () {
      // Listen to the Join button click event.
      document.getElementById("join").onclick = async function () {
        if (options.role == "") {
          window.alert("Select a user role first!");
          return;
        }

        // Join a channel.
        await agoraEngine.join(
          options.appId,
          options.channel,
          options.token,
          options.uid
        );
        // Create a local audio track from the audio sampled by a microphone.
        channelParameters.localAudioTrack =
          await AgoraRTC.createMicrophoneAudioTrack();
        // Create a local video track from the video captured by a camera.
        channelParameters.localVideoTrack =
          await AgoraRTC.createCameraVideoTrack();
        // Append the local video container to the page body.
        document.body.append(localPlayerContainer);

        // Publish the local audio and video track if the user joins as a host.
        if (options.role == "host") {
          // Publish the local audio and video tracks in the channel.
          await agoraEngine.publish([
            channelParameters.localAudioTrack,
            channelParameters.localVideoTrack,
          ]);
          // Play the local video track.
          channelParameters.localVideoTrack.play(localPlayerContainer);
          console.log("publish success!");
        }
      };
      // Listen to the Leave button click event.
      document.getElementById("leave").onclick = async function () {
        // Destroy the local audio and video tracks.
        channelParameters.localAudioTrack.close();
        channelParameters.localVideoTrack.close();
        // Remove the containers you created for the local video and remote video.
        removeVideoDiv(remotePlayerContainer.id);
        removeVideoDiv(localPlayerContainer.id);
        // Leave the channel
        await agoraEngine.leave();
        console.log("You left the channel");
        // Refresh the page for reuse
        window.location.reload();
      };
      document.getElementById("host").onclick = async function () {
        if (document.getElementById("host").checked) {
          // Save the selected role in a variable for reuse.
          options.role = "host";
          // Call the method to set the role as Host.
          await agoraEngine.setClientRole(options.role);
          if (channelParameters.localVideoTrack != null) {
            // Publish the local audio and video track in the channel.
            await agoraEngine.publish([
              channelParameters.localAudioTrack,
              channelParameters.localVideoTrack,
            ]);
            // Stop playing the remote video.
            channelParameters.remoteVideoTrack.stop();
            // Start playing the local video.
            channelParameters.localVideoTrack.play(localPlayerContainer);
          }
        }
      };
      document.getElementById("Audience").onclick = async function () {
        if (document.getElementById("Audience").checked) {
          // Save the selected role in a variable for reuse.
          options.role = "audience";
          if (
            channelParameters.localAudioTrack != null &&
            channelParameters.localVideoTrack != null
          ) {
            if (channelParameters.remoteVideoTrack != null) {
              // Replace the current video track with remote video track
              await channelParameters.localVideoTrack.replaceTrack(
                channelParameters.remoteVideoTrack,
                true
              );
            }
          }
          // Call the method to set the role as Audience.
          await agoraEngine.setClientRole(options.role);
        }
      };
    };
  }
  startBasicCall();
  // Remove the video stream from the container.
  function removeVideoDiv(elementId) {
    console.log("Removing " + elementId + "Div");
    let Div = document.getElementById(elementId);
    if (Div) {
      Div.remove();
    }
  }

  const VideocallUI = () => {
    const { rtcProps } = useContext(PropsContext);
    return (
      <RtcConfigure callActive={rtcProps.callActive}>
        <div style={styles.containerInner}>
          <RTMP />
        </div>
        {rtcProps?.layout === layout.grid ? <GridVideo /> : <PinnedVideo />}
        <LocalControls />
      </RtcConfigure>
    );
  };

  const styles = {
    container: {
      width: "100vw",
      height: "100vh",
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
    containerInner: {
      display: "flex",
      flex: 1,
      alignContent: "center",
      alignItems: "center",
      marginBottom: 10,
    },
  };

  return (
    <div>
      <h2 class="left-align">Get started with interactive live streaming</h2>
      <input type="radio" id="host" name="joinAs" value="host" />
      <label>Host</label>
      <br />
      <input type="radio" id="Audience" name="joinAs" value="audience" />
      <label>Audience</label>
      <br />
      <button type="button" id="join">
        Join
      </button>
      <button type="button" id="leave">
        Leave
      </button>

      <div style={styles.container}>
        {videocall === true ? (
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
            {/* render livestream here */}
            <PropsContext.Provider
              value={{
                rtcProps: {
                  appId: "7d1f07c76f9d46be86bc46a791884023",
                  channel: "anujesh",
                  token:
                    "lYz7lKdqXeZi3fF5YTjzOzYFBvMUwzQD82RzszTLFBOzpFQLs6RkE7NEc0tDCwsTAyPj6W52KQ2BjAxGJiFMjAwQCOKzMyTmlWalFmcwMAAAxZEdCQ",
                  role: isHost ? "host" : "audience",
                  layout: isPinned ? layout.pin : layout.grid,
                },
                styleProps: {
                  gridVideoContainer: { height: "90%" },
                  pinnedVideoContainer: { height: "90%" },
                },
                callbacks: {
                  EndCall: () => setVideocall(false),
                },
              }}
            >
              <div>
                {isHost === false ? (
                  <VideocallUI />
                ) : (
                  <TracksConfigure>
                    <VideocallUI />
                  </TracksConfigure>
                )}
              </div>
            </PropsContext.Provider>
          </>
        ) : (
          <div style={styles.nav}>
            <div>
              <input type="radio" id="host" name="joinAs" value="host" />
              <label>Host</label>
              <br />
              <input
                type="radio"
                id="Audience"
                name="joinAs"
                value="audience"
              />
              <label>Audience</label>
              <br />
              <button onClick={startBasicCall} type="button" id="join">
                Join
              </button>
              <button type="button" id="leave">
                Leave
              </button>
            </div>
            <h3 style={styles.btn} onClick={() => setVideocall(true)}>
              Start Call
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Livestream;
