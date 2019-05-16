import React, { Component } from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import InfinitScroller from './InfinitScroller';
import { articleReducer, fetchArticlePagination, fetchArticleError,fetchArticleSuccess } from '../../../store/modules/article';
import thunk from 'redux-thunk';
// import { fetchArticlePagination } from '../../../store/modules/article';

let store;

const articles = {
  publications: [
    {
      slug: 'sample-slug-testing',
      title: 'sample title testing',
      description:
        'a very long sample description testing, text content, which is not correct grammatically',
      imageThumbnail: 'the_url_to_image_thumbnail.png',
      author: {
        username: 'sampleusername',
        image: 'sample_user_image.png',
        firstName: 'sample firstname',
        lastName: 'sample lastName',
      },
    },
  ],
};
const props = {
  fetchArticlePagination: jest.fn(),
  articles,
  isFetching: false,
  error: {},
};

describe('InfinitScroller', () => {
  const eventMapper = {};
  window.addEventListener = jest.fn((event, callback) => {
    eventMapper[event] = callback;
  });

  beforeEach(() => {
    const mockStore = configureMockStore([thunk]);
    store = mockStore({ articles });
  });

  it('should render correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <InfinitScroller {...props} />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const wrapper = mount(<InfinitScroller store={store} {...props} />);
    const renderArticle = wrapper.find('.articles');
    expect(renderArticle).toMatchSnapshot();
    console.log(fetchArticlePagination());
    expect(wrapper.props().isFetching).toEqual(false);
  });

  it('should simulate scroll correctly', () => {
    const wrapper = mount(<InfinitScroller store={store} {...props} />);
    expect(wrapper.props().articles.pagination).toEqual(
      props.articles.pagination,
    );
  });

  it('returns initial reducer state', () => {
    const reducer = articleReducer(undefined, {});
    expect(reducer).toEqual({
      publications: [],
      errorResponse: {},
      isLoading: true,
    });
  });

  it('returns fetch success Message correctly', () => {
    const response = 'server error';
    const fetchSuccess = fetchArticleSuccess(response);
    expect(fetchSuccess).toEqual({
      type: 'FETCH_ARTICLE_SUCCESS',
      response,
    });
  });

  it('returns error Message correctly', () => {
    const errorMessage = 'server error';
    const fetchError = fetchArticleError(errorMessage);
    expect(fetchError).toEqual({
      type: 'FETCH_ARTICLE_ERROR',
      error: errorMessage,
    });
  });
});
