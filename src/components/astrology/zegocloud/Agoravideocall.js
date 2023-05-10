import React from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import { AgoraRTCStats } from "agora-rtc-sdk-ng";

function Agoravideocall() {
  let options = {
    // Pass your App ID here.
    appId: "7d1f07c76f9d46be86bc46a791884023",
    // Set the channel name.
    channel: "anujesh",
    // Pass your temp token here.
    token:
      "0067d1f07c76f9d46be86bc46a791884023IAB8XZD16tOryzZlXroWrQqHgEVRCc8a9ZiBubdNn/CNtUlEne4AAAAAEADE5kO9ez9bZAEAAQAAAAAA",
    // Set the user ID.
    uid: 0,
  };

  let channelParameters = {
    // A variable to hold a local audio track.
    localAudioTrack: null,
    // A variable to hold a remote audio track.
    remoteAudioTrack: null,
    // A variable to hold the remote user id.
    remoteUid: null,
  };
  async function startBasicCall() {
    // Create an instance of the Agora Engine
    const agoraEngine = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
    const agoratimer = AgoraRTCStats;
    // const data = Client.getSessionStats().Duration;
    console.log("dfddf", agoratimer);
    // Listen for the "user-published" event to retrieve an AgoraRTCRemoteUser object.
    agoraEngine.on("user-published", async (user, mediaType) => {
      // Subscribe to the remote user when the SDK triggers the "user-published" event.
      await agoraEngine.subscribe(user, mediaType);
      console.log("subscribe success");
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
      // Subscribe and play the remote audio track.
      if (mediaType == "audio") {
        channelParameters.remoteUid = user.uid;
        // Get the RemoteAudioTrack object from the AgoraRTCRemoteUser object.
        channelParameters.remoteAudioTrack = user.audioTrack;
        // Play the remote audio track.
        channelParameters.remoteAudioTrack.play();
        showMessage("Remote user connected: " + user.uid);
      }

      // Listen for the "user-unpublished" event.
      agoraEngine.on("user-unpublished", (user) => {
        console.log(user.uid + "has left the channel");
        showMessage("Remote user has left the channel");
      });
    });

    window.onload = function () {
      // Listen to the Join button click event.
      document.getElementById("join").onclick = async function () {
        // Join a channel.
        await agoraEngine.join(
          options.appId,
          options.channel,
          options.token,
          options.uid
        );
        showMessage("Joined channel: " + options.channel);
        // Create a local audio track from the microphone audio.
        channelParameters.localAudioTrack =
          await AgoraRTC.createMicrophoneAudioTrack();
        // Publish the local audio track in the channel.
        await agoraEngine.publish(channelParameters.localAudioTrack);
        console.log("Publish success!");
      };

      // Listen to the Leave button click event.
      document.getElementById("leave").onclick = async function () {
        // Destroy the local audio track.
        channelParameters.localAudioTrack.close();
        // Leave the channel
        await agoraEngine.leave();
        console.log("You left the channel");
        // Client.getSessionStats();
        // Refresh the page for reuse
        window.location.reload();
      };
    };
  }

  function showMessage(text) {
    document.getElementById("message").textContent = text;
  }

  startBasicCall();
  return (
    <div>
      <h2 class="left-align">Get started with Voice Calling</h2>
      <div class="row">
        <div>
          <button type="button" id="join">
            Join
          </button>
          <button type="button" id="leave">
            Leave
          </button>
        </div>
      </div>
    </div>
  );
}

export default Agoravideocall;
