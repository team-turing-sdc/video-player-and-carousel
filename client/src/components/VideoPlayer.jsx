import React from 'react';
import styled from 'styled-components';

//======= STYLES =======//
const VideoTitle = styled.p`
  text-transform: uppercase;
  font-family: Helvetica;
`

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.video = this.props.video;
  }

  render() {
    //"https://www.youtube.com/watch?v=UMaAF2WTK1A" --> "https://www.youtube.com/embed/UMaAF2WTK1A"
    let youtubeURL = "https://www.youtube.com/embed/";
    let vidID = this.video.url.split('=')[1];

    return (
      <div className="videoPlayer">
      <iframe width="1200" height="700" src={`${youtubeURL}${vidID}?autoplay=0&controls=0`} frameBorder="0">
      </iframe>
      <VideoTitle>{this.props.movieTitle}: {this.video.title}</VideoTitle>
      </div>
    )
  }
}

export default VideoPlayer;