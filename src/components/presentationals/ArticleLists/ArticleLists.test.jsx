import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import ArticleLists from './ArticleLists';

const props = {
  deleteArticle: jest.fn(),
  isDeleting: false,
  articles: [{ id: 1 }, { id: 2 }],
};

describe('ArticleLists', () => {
  it('should render correctly', () => {
    const component = mount(
      <BrowserRouter>
        <ArticleLists {...props} />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
