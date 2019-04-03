import React from 'react';
import styled from 'styled-components';

//======= STYLES =======//
const VideoTitle = styled.p`
  text-transform: uppercase;
  font-family: Helvetica;
`
const PlayerImage = styled.img`
  width: 80%;
`

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false
    }
  }

  handleImgClick() {
    this.setState({
      isClicked: true
    })
  }

  render() {
    //"https://www.youtube.com/watch?v=UMaAF2WTK1A" --> "https://www.youtube.com/embed/UMaAF2WTK1A"
    let youtubeURL = "https://www.youtube.com/embed/";
    let vidID = this.props.video.url.split('=')[1];

    let videoDisplay;

    if (this.state.isClicked) {
      videoDisplay = (
      <iframe width="1200" height="700" src={`${youtubeURL}${vidID}?autoplay=0&controls=0`} frameBorder="0">
      </iframe>
      )
    } else {
      videoDisplay = (
      <PlayerImage src={`http://img.youtube.com/vi/${vidID}/hqdefault.jpg`} onClick={() => {this.handleImgClick()}}/>)
    }

    return (
      <div className="videoPlayer">
      {videoDisplay}
      <VideoTitle>{this.props.movieTitle}: {this.props.video.title}</VideoTitle>
      </div>
    )
  }
}

export default VideoPlayer;