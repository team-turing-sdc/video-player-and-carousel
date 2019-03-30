import React from 'react';
import styled from 'styled-components';

import VideoPlayer from './VideoPlayer.jsx';
import Carousel from './Carousel.jsx';
import sampleData from '../sampleData.js';

const DarkBG = styled.div`
  background-color: darkslategrey;
`


class App extends React.Component {
  constructor(props) {
    super(props);

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
        "Content-Type":"application/json",
        "Cache-Control":"no-cache"
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let videoData = data[0];
      this.setState({
        movieTitle: videoData.name,
        videos: videoData.associatedVideos,
        playerVideo: videoData.associatedVideos[0]
      })
    })
  }

  componentDidMount() {
    this.getAssocVideos(this.props.movieID);
  }

  render() {
    return (
      <DarkBG>
        <VideoPlayer movieTitle={this.state.movieTitle} video={this.state.playerVideo}/>
        <Carousel videos={this.state.videos}/>
      </DarkBG>
    )
  }
}

export default App;