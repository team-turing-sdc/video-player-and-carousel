import React from 'react';
import styled from 'styled-components';

//======= STYLES =======//


//======= COMPONENT =======//
class CarouselItem extends React.Component {
  constructor(props){
    super(props);
  }

  getThumbFromUrl(url) {
    let vidID = url.split('=')[1];
    return `http://img.youtube.com/vi/${vidID}/mqdefault.jpg`;
  }

  render(){
    return (
        <img src={this.getThumbFromUrl(this.props.video.url)} style={{width: "100%"}}/>
    )
  }
}

export default CarouselItem;