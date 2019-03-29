import React from 'react';
import styled from 'styled-components';

import CarouselItem from './CarouselItem.jsx';

//======= STYLES =======//
const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`

//======= COMPONENT =======//

class Carousel extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <ItemContainer>
       {this.props.videos.map((vid, idx) => {
         return (<CarouselItem key={idx} video={vid}/>)
       })}
      </ItemContainer>
    )
  }
}

export default Carousel;