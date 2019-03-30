import React from 'react';
import {mount} from 'enzyme';

import CarouselItem from './CarouselItem';
import { isTSAnyKeyword } from '@babel/types';

describe('Carousel Item', () => {
  it('should mount correctly', () => {
    const component = mount(<CarouselItem/>)

    expect(component).toMatchSnapshot();
  })
})