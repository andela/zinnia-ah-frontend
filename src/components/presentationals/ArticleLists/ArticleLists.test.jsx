import React from 'react';
import { shallow } from 'enzyme';

import ArticleLists from './ArticleLists';

const props = {
  deleteArticle: jest.fn(),
  isDeleting: false,
  articles: [{}, {}],
};

describe('ArticleLists', () => {
  it('should render correctly', () => {
    const component = shallow(<ArticleLists {...props} />);
    expect(component).toMatchSnapshot();
  });
});
