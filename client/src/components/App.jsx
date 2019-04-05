import React from 'react';
import styled from 'styled-components';

import VideoPlayer from './VideoPlayer.jsx';
import Carousel from './Carousel.jsx';
import sampleData from '../sampleData.js';

//======= STYLES =======//
const DarkBG = styled.div`
  background-color:  #4C4C4C;
  width: 60%;
  padding: 10px;
`
// const CarouselBox = styled.div`
//   /*border: 2px solid antiquewhite;*/
//   width: 80%;
//   background-image: url("/imgs/ticket-border.png");
//   background-size: 100% 100%;
//   padding: 2.5% 10%;
//   `

const CarouselBox = styled.div`
  /*border: 2px solid antiquewhite;*/
  width: 76%;
  height: 20%;
  border: solid teal;
  border-width: 10px 50px;
  border-image: url("/imgs/ticket-border.png") 10% repeat;
  padding: 1% 2%;
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
    const {movieTitle, playerVideo, videos} = this.state;

    return (
      <DarkBG>

        <VideoPlayer movieTitle={movieTitle} video={playerVideo}/>

        <CarouselBox>
         <Carousel videos={videos} handleThumbClick={this.handleThumbClick.bind(this)}/>
        </CarouselBox>
      </DarkBG>
    )
  }
}

export default App;