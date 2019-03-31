import React from 'react';
import {mount, shallow} from 'enzyme';

import App from './App';

describe('App', () => {
  it('should render correctly', () => {
    const component = shallow(<App/>);

    expect(component).toMatchSnapshot();
  })
})