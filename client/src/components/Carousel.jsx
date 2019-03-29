import React from 'react';

import CarouselItem from './CarouselItem.jsx';

class Carousel extends React.Component {
  constructor() {
    super();

    this.state = {
      videos: [1, 2, 3, 4, 5]
    }
  }

  render() {
    return(
      <div>
       {this.state.videos.map((vid) => {
         return (<CarouselItem vid={vid}/>)
       })}
      </div>
    )
  }
}

export default Carousel;