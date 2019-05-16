import React from 'react';
import { mount } from 'enzyme';

import ArticleLists from './ArticleLists';

const deleteArticle = jest.fn();
const isDeleting = false;
const articleId = '1q2345t6y7u8iokjhbvfr43wsdfghyuikjnbgvfrt56yh';
const articles = [{}, {}];
describe('ArticleLists', () => {
  it('should render correctly', () => {
    const component = mount(
      <ArticleLists
        articles={articles}
        deleteArticle={() => deleteArticle(articleId, articles)}
        isDeleting={isDeleting}
        key={articleId}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
