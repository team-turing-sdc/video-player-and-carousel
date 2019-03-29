import React from 'react';

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
      <iframe width="420" height="315" src={`${youtubeURL}${vidID}`}>
      </iframe>
    )
  }
}

export default VideoPlayer;