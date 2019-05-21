import React from 'react';
import { shallow } from 'enzyme';

import PopularAuthorItem from './PopularAuthorItem';

describe('<PopularAuthorItem />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PopularAuthorItem />);
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper.find('.auth-card').length).toBe(1);
  });
});
