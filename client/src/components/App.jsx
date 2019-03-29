import React from 'react';
import styled from 'styled-components';

import VideoPlayer from './VideoPlayer.jsx';
import Carousel from './Carousel.jsx';
import sampleData from '../sampleData.js';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movieTitle: sampleData.name,
      videos: sampleData.associatedVideos,
      playerVideo: sampleData.associatedVideos[0]
    }
  }

  getAssocVideos(id) {
    return fetch(`http://localhost:3333/associatedVideos?movieID=${id}`, {
      method: "GET",
      headers: {
        "Content-Type":"application/json"
      }
    })
    .then((response) => {
      response.json();
    })
    .then((videoData) => {
      this.setState({
        movieTitle: videoData.name,
        videos: videoData.associatedVideos,
        playerVideo: videoData.associatedVideos[0]
      })
    })
  }

  render() {
    return (
      <div>
        <VideoPlayer movieTitle={this.state.movieTitle} video={this.state.playerVideo}/>
        <Carousel videos={this.state.videos}/>
      </div>
    )
  }
}

export default App;