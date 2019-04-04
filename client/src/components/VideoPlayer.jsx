import React from 'react';
import styled from 'styled-components';

//======= STYLES =======//
const VideoTitle = styled.p`
  text-transform: uppercase;
  font-family: Helvetica;
`
const PlayerImageBox = styled.div`
  width: 90%;
  height: 51%;
  position: relative;
  overflow: hidden;
  background: black;
`
const PlayerImage = styled.img`
  width: 100%;

  :hover {
    opacity: .6;
  }
`
const VideoPlayerBox = styled.div`
  width: 90%;
  height: 51%;
  padding-top:  56.25%;
  position: relative;
  overflow: hidden;
`
const IFrame = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border: 0;
`

//======= COMPONENT =======//
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
        <VideoPlayerBox>
          <IFrame src={`${youtubeURL}${vidID}?autoplay=0&controls=0`}/>
        </VideoPlayerBox>
      )
    } else {
      videoDisplay = (
        <PlayerImageBox>
          <PlayerImage src={`http://img.youtube.com/vi/${vidID}/hqdefault.jpg`} onClick={() => {this.handleImgClick()}}/>
        </PlayerImageBox>
      )
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