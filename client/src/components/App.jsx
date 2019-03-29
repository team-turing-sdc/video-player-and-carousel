import React from 'react';
import styled from 'styled-components';

import VideoPlayer from './VideoPlayer.jsx';
import Carousel from './Carousel.jsx';
import sampleData from '../sampleData.js';

const HeaderTest = styled.h2`
  color: red;
  font-family: Papyrus;
`

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movieTitle: sampleData.name,
      videos: sampleData.associatedVideos,
      playerVideo: sampleData.associatedVideos[0]
    }
  }

  render() {
    return (
      <div>
        <HeaderTest>
          <h2>APP</h2>
        </HeaderTest>
        <VideoPlayer movieTitle={this.state.movieTitle} video={this.state.playerVideo}/>
        <Carousel />
      </div>
    )
  }
}

export default App;