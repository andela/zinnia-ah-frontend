import React from 'react';
import { mount } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import ArticleCard from './ArticleCard';

const articles = {
  author: {
    firstName: 'example',
    lastName: 'purpose',
    image: 'image_url.png',
    username: 'example1',
  },
  slug: 'article-card-title-1234',
  title: 'article card title',
  description: 'article card testing sample, layout',
};

describe('ArticleCard::: ', () => {
  it('should render ArticleCard correctly', () => {
    const component = mount(<ArticleCard article={articles} />);
    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it('should receive props', () => {
    const expectedProps = { article: { slug: 'some-random-title-slug' } };

    const propsError = checkPropTypes(
      ArticleCard.propTypes,
      expectedProps,
      'props',
      ArticleCard.article,
    );
    expect(propsError).toBeUndefined();
  });
});
