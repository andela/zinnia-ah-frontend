import React from 'react';
import { mount } from 'enzyme';

import PopularAuthorsList from './PopularAuthorsList';

describe('Popular Authors List', () => {
  it('should render correctly', () => {
    const component = mount(<PopularAuthorsList authors={[]} className="" />);
    expect(component).toMatchSnapshot();
  });
});
