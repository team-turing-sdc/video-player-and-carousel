import React from 'react';
import styled from 'styled-components';

//======= STYLES =======//
const ThumbImage = styled.img`
  width: 100%;
  :hover {
    opacity: .3;
  }
`

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
    const {
      handleThumbClick,
      video
    } = this.props;

    return (
      <ThumbImage src={this.getThumbFromUrl(this.props.video.url)} onClick={() => {
        handleThumbClick(video);
      }}/>
    )
  }
}

export default CarouselItem;