import React from 'react';
import styled from 'styled-components';

import CarouselItem from './CarouselItem.jsx';

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30%;
`

class Carousel extends React.Component {
  constructor() {
    super();

    this.state = {
      videos: [1, 2, 3, 4, 5]
    }
  }

  render() {
    return(
      <ItemContainer>
       {this.state.videos.map((vid) => {
         return (<CarouselItem vid={vid}/>)
       })}
      </ItemContainer>
    )
  }
}

export default Carousel;