import React from 'react';
import { shallow } from 'enzyme';

import Image from './Image';

const src = 'https:myImage.jpg';

const snapshot = shallow(<Image src={src} />);

describe('<Image />', () => {
  it('should render correctly', () => {
    expect(snapshot).toMatchSnapshot();
  });

  it('should receive the correct props', () => {
    expect(snapshot.props().src).toBe(src);
  });
});
