// export function generateToken(userid, roomid, userName) {
//   return fetch(
//     `http://13.233.228.168:8000/user/allchatwithuser/638dcc72ef0c127a0c5a0426`
//   ).then((res) => res.json());
// }

// export function randomID(len) {
//   let result = "";
//   if (result) return result;
//   var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";

//   var maxPos = chars.length;
//   len = len || 5;
//   for (let i = 0; i < len; i++) {
//     result += chars.charAt(Math.floor(Math.random() * maxPos));
//   }
//   console.log(result);
//   return result;
// }

export function getRandomName() {
  const names = [
    "Anjali",
    "Pratima",
    "Sadik",
    "Rohit",
    "Amit",
    "Pranay",
    "Anujesh",
    "Ashish",
  ];
  // return names[Math.round(Math.random() * names.length)];
  return "Prabhat";
}

// // export function getUrlParams(
//   //   url: string = window.location.href
//   // ): URLSearchParams {
//   //   let urlStr = url.split("?")[1];
//   //   return new URLSearchParams(urlStr);
//   // }

//   // export default function Call() {
//   //   const roomID = getUrlParams().get("roomID") || randomID(5);
//   const myMeeting = async (element) => {
//     // generate Kit Token
//     const appID = 117315587;

//     const serverSecret = "7d73c3ebbc300b3863c13e2711a69195";
//     const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//       appID,
//       serverSecret,
//       roomID,
//       Date.now().toString(),
//       "astroDev"
//     );

//     // Create instance object from Kit Token.
//     const zp = ZegoUIKitPrebuilt.create(kitToken);
//     // start the call
//     zp.joinRoom({
//       container: element,
//       // sharedLinks: [
//       //   {
//       //     name: "Personal link",
//       //     url:
//       //       window.location.origin +
//       //       window.location.pathname +
//       //       "?roomID=" +
//       //       roomID,
//       //   },
//       // ],
//       scenario: {
//         mode: ZegoUIKitPrebuilt.GroupRoom, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
//       },
//     });
//   };

//   return (
//     <div
//       className="myRoomContainer"
//       ref={myMeeting}
//       style={{ width: "100vw", height: "100vh" }}
//     ></div>
//   );
// };
// export default Room;
