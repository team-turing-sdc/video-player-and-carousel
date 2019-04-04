import React from 'react';
import styled from 'styled-components';

import VideoPlayer from './VideoPlayer.jsx';
import Carousel from './Carousel.jsx';
import sampleData from '../sampleData.js';

//======= STYLES =======//

const borderImgUrl = "../../imgs/ticket-border.png"

const DarkBG = styled.div`
  background-color:  #4C4C4C;
  width: 50%;
  padding: 10px;
`
const CarouselBox = styled.div`
  /* border-image: url(${borderImgUrl}) 10 10 10 10 repeat round;
  border: 10px; */
  border: 2px solid antiquewhite;
  width: 90%;
  `

//======= COMPONENT =======//

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieTitle: sampleData.name,
      videos: sampleData.associatedVideos,
      playerVideo: sampleData.associatedVideos[0]
    }
  }

  handleThumbClick(video) {
    this.setState({
      playerVideo: video
    })
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
    // const {movieTitle, playerVideo, videos} = this.state;

    return (
      <DarkBG>

        <VideoPlayer movieTitle={this.state.movieTitle} video={this.state.playerVideo}/>

        <CarouselBox>
         <Carousel videos={this.state.videos} handleThumbClick={this.handleThumbClick.bind(this)}/>
        </CarouselBox>
      </DarkBG>
    )
  }
}

export default App;