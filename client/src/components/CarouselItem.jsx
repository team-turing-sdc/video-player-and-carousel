import React from 'react';
import styled from 'styled-components';

//======= STYLES =======//
const Wrapper = styled.div`
  position: relative;
  top: 0;
`
const ThumbImage = styled.img`
  width: 100%;
  transition-property: opacity;
  transition-duration: .2s;

  :hover {
    opacity: .3;
  }
`
const TitleOverlay = styled.div`
  visibility: ${(props) => props.vis};
  font-family: Helvetica;
  font-size: 0.75em;
  text-transform: uppercase;
  color: white;
  position: absolute;
  top: 2%;
  z-index: 3;
  pointer-events: none;
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
      <Wrapper>
        <ThumbImage src={this.getThumbFromUrl(video.url)} onClick={() => {
          handleThumbClick(video);
        }} onMouseEnter={() => {
          this.setState({dispTitle: true})
        }} onMouseLeave={() => {
          this.setState({dispTitle: false})
        }}/>
        <TitleOverlay vis={this.state.dispTitle ? 'visible' : 'hidden'}>
          {video.title}
        </TitleOverlay>
      </Wrapper>
    )
  }
}

export default CarouselItem;