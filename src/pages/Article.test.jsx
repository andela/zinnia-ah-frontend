import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import { Article } from './Article';

const props = {
  match: {
    params: {
      articleId: '',
    },
  },
  getSingleArticle: jest.fn(),
  isLoading: false,
  article: {},
};

const loadingProps = {
  match: {
    params: {
      articleId: '',
    },
  },
  getSingleArticle: jest.fn(),
  isLoading: true,
  article: {},
};

describe('Article', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Article {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without errors', () => {
    const wrapper = shallow(<Article {...loadingProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should receive props', () => {
    const expectedProps = { ...props };

    const propsError = checkPropTypes(
      Article.propTypes,
      expectedProps,
      'props',
      Article,
    );

    expect(propsError).toBeUndefined();
  });
});
