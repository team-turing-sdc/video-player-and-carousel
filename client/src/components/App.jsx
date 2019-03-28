import React from 'react';

import VideoPlayer from './VideoPlayer.jsx';
import Carousel from './Carousel.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2>APP</h2>
        <VideoPlayer />
        <Carousel />
      </div>
    )
  }
}

export default App;