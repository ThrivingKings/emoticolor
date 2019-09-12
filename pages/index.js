import React from 'react'
import Head from 'next/head'

import Emotion from '../components/Emotion'
import Color from '../components/Color'
import Tally from '../components/Tally'

class Home extends React.Component {
  state = {
    emotion: null,
    emotions: {}
  };

  handleOnEmotion = emotion => {
    const emotionValue = this.state.emotions[emotion] || 0
    const emotions = {
      ...this.state.emotions,
      [emotion]: emotionValue + 1
    }
    this.setState({ emotion, emotions })
  }

  render () {
    return (
      <div>
        <Head>
          <title>emoticolor</title>
        </Head>
        <Emotion onEmotion={this.handleOnEmotion} />
        <Color emotion={this.state.emotion} />
        <Tally emotions={this.state.emotions} />
        <style global jsx>{`
          body {
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
            color: #333;
            margin: 0;
          }
        `}
        </style>
      </div>
    )
  }
}

export default Home
