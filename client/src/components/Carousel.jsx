import React from 'react';
import styled from 'styled-components';

import CarouselItem from './CarouselItem.jsx';

//======= STYLES =======//

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 20px 20px;
  width: 100%;
  height: 30%;
  overflow: hidden;
`
const Thumbnail = styled.div`
  flex: 1 0 100%;
  flex-basis: 20%;
  margin-right: 20px;
  background: black;
`
//======= COMPONENT =======//

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 0
    }
  }

  getOrder(itemIndex) {
    const { position } = this.state
    const { videos } = this.props
    const numItems = videos.length || 1
    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position)
    }
    return itemIndex - position
  }

  render() {
    const {videos, handleThumbClick} = this.props;

    return(

        <ItemContainer>
        {videos.map((vid, idx) => {
          return (
            <Thumbnail key={idx} order={this.getOrder(idx)}>
              <CarouselItem  video={vid} handleThumbClick={handleThumbClick}/>
            </Thumbnail>
          )
        })}
        </ItemContainer>


    )
  }
}

export default Carousel;