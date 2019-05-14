import React from 'react';
import { mount } from 'enzyme';

import ArticleLists from './ArticleLists';

const articles = [
  {
    id: 123456789,
  },
];
const emptyArticles = [];

describe('ArticleLists', () => {
  it('should render correctly', () => {
    const component = mount(<ArticleLists articles={articles} />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const component = mount(<ArticleLists articles={emptyArticles} />);
    expect(component).toMatchSnapshot();
  });
});
