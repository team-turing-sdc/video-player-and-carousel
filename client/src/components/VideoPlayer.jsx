import React from 'react';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <iframe width="420" height="315" src={this.props.video.url}>
      </iframe>
    )
  }
}

export default VideoPlayer;