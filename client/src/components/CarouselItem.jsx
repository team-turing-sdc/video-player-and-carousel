import React from 'react';

class CarouselItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <p>video: {this.props.vid}</p>
    )
  }
}

export default CarouselItem;