import React from 'react';
import { shallow } from 'enzyme';

import VerticalCard from './VerticalCard';

const props = {
  article: {
    imageThumbnail: 'fgbjm',
    title: 'wefds',
    description: 'werfderfde',
    author: {
      username: 'sdfgvds',
      image: 'wefdwed',
      id: 'wsvdcwedcwed',
    },
  },
  index: 1,
};
describe('Vertical Card', () => {
  it('should render correctly', () => {
    const component = shallow(<VerticalCard {...props} />);
    expect(component).toMatchSnapshot();
  });
});
