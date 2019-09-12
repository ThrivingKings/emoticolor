import React from 'react';

import * as faceapi from 'face-api.js';

class Emotion extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    faceapi.loadFaceExpressionModel('/static/weights/')
      .then(async () => {
        await faceapi.nets.tinyFaceDetector.load('/static/weights/');
        setInterval(this.detect, 100);
      });

    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        this.videoRef.current.srcObject = stream;
        this.videoRef.current.play();
      });
  }

  detect = async () => {
    const faceDetectorOptions = new faceapi.TinyFaceDetectorOptions({
      inputSize: 512,
      scoreThreshold: 0.3
    });
    const result = await faceapi.detectSingleFace(this.videoRef.current, faceDetectorOptions).withFaceExpressions();

    if (result) {
      const { expressions } = result;
      const emotion = Object.keys(expressions).reduce((a, b) => {
        return expressions[a] > expressions[b] ? a : b;
      });
      this.props.onEmotion(emotion);
    }
  }

  render() {
    return (
      <div>
        <video
          ref={this.videoRef}
          autoPlay
          muted
          playsInline
        />
        <style jsx>{`
          video { display: none; }
        `}</style>
      </div>
    );
  }
};

export default Emotion;
