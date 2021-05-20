import "./App.css";
import * as handpose from "@tensorflow-models/handpose";
import React, { useRef } from "react";
import { drawHand } from "./utilities.js";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";

function App() {
  const cam = useRef(null);
  const canvas = useRef(null);

  const HandTrack = async () => {
    const neural_net = await handpose.load();
    // console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(neural_net);
    }, 10);
  };

  const detect = async (net) => {
    if (
      typeof cam.current !== "undefined" &&
      cam.current !== null &&
      cam.current.video.readyState === 4
    ) {
      const video = cam.current.video;
      const videoWidth = cam.current.video.videoWidth;
      const videoHeight = cam.current.video.videoHeight;

      //video width
      cam.current.video.width = videoWidth;
      cam.current.video.height = videoHeight;

      //canvas height and width
      canvas.current.width = videoWidth;
      canvas.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      console.log(hand);

      // Draw mesh
      const ctx = canvas.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  HandTrack();

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={cam}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvas}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
      </header>
    </div>
  );
}

export default App;
