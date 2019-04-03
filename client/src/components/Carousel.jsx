import React from 'react';
import styled from 'styled-components';

import CarouselItem from './CarouselItem.jsx';

//======= STYLES =======//

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 30%;
  padding: 1em 0em;
  overflow: hidden;
`
const Thumbnail = styled.div`
  width: 15%;
  margin: 1%;
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
          return (
            <Thumbnail>
              <CarouselItem key={idx} video={vid}/>
            </Thumbnail>
          )
        })}
        </ItemContainer>


    )
  }
}

export default Carousel;