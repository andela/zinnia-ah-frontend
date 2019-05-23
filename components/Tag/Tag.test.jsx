import React from 'react';
import { shallow } from 'enzyme';

import Tag from './Tag';

const props = {
  value: 'News',
  className: 'tag-lg',
};

describe('Article', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Tag {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
