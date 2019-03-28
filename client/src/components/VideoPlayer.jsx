import React from 'react';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>Current video url: {this.props.video.url}</p>
    )
  }
}

export default VideoPlayer;