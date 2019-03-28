import React from 'react';

import VideoPlayer from './VideoPlayer.jsx';
import Carousel from './Carousel.jsx';
import sampleData from '../sampleData.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      videos: sampleData.associatedVideos,
      playerVideo: sampleData.associatedVideos[0]
    }
  }

  render() {
    return (
      <div>
        <h2>APP</h2>
        <VideoPlayer video={this.state.playerVideo}/>
        <Carousel />
      </div>
    )
  }
}

export default App;