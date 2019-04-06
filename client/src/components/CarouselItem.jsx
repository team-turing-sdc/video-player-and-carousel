import React from 'react';
import styled from 'styled-components';

//======= STYLES =======//
const ThumbImage = styled.img`
  width: 100%;
  transition-property: opacity;
  transition-duration: .2s;

  :hover {
    opacity: .3;
  }
`

//======= COMPONENT =======//
class CarouselItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      dispTitle: false
    }
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
      <ThumbImage src={this.getThumbFromUrl(video.url)} onClick={() => {
        handleThumbClick(video);
      }} onMouseEnter={() => {
        this.setState({dispTitle: true})
      }} onMouseLeave={() => {
        this.setState({dispTitle: false})
      }}/>
    )
  }
}

export default CarouselItem;