import React from 'react';
import { mount } from 'enzyme';

import ArticleLists from './ArticleLists';

const props = {
  deleteArticle: jest.fn(),
  isDeleting: false,
  articles: [{}, {}],
};

describe('ArticleLists', () => {
  it('should render correctly', () => {
    const component = mount(<ArticleLists {...props} />);
    expect(component).toMatchSnapshot();
  });
});
