import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.img`
  height: 100px;
`

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
        <Thumbnail src={this.getThumbFromUrl(this.props.video.url)}/>
    )
  }
}

export default CarouselItem;