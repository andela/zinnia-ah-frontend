import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { http } from '../../api/client';
import {
  CREATE_ARTCLE_INITIALIZED,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_ERROR,
  createArticleInitialized,
  createArticleSuccess,
  createArticleError,
  createArticle,
  initialState,
  articleReducer,
} from './article';

const mockStore = configureStore([thunk]);
const store = mockStore(initialState);
const mockData = {
  status: 'success',
  message: 'your article has been created successfully',
  data: {
    id: '52397071-032f-484c-9339-92d9f19c61ce',
    userId: '5a6fab9c-5849-4be5-973c-5a371165cd57',
    title: 'sikdhkdnkdd',
    slug: 'sikdhkdnkdd-ellm6gutjowlghqa',
    description: 'gnfmbfjfjfnfjffnfnffnfn...',
    body: '<p>gnfmbfjfjfnfjffnfnffnfn</p> ',
    imageThumbnail: '',
    readTime: '0',
    subscriptionType: 'FREE',
    status: 'DRAFT',
    updatedAt: '2019-05-17T10:38:03.829Z',
    createdAt: '2019-05-17T10:38:03.829Z',
    tags: null,
  },
};

describe('CREATE ARTICLE ACTIONS', () => {
  it('should dispatch an action for sign up request', () => {
    const action = {
      type: CREATE_ARTCLE_INITIALIZED,
    };
    expect(createArticleInitialized()).toEqual(action);
  });
  it('should dispatch an action for sign up success', () => {
    const response = {};
    const action = {
      type: CREATE_ARTICLE_SUCCESS,
      response,
    };
    expect(createArticleSuccess(response)).toEqual(action);
  });
  it('should dispatch an action for sign up error', () => {
    const error = '';
    const action = {
      type: CREATE_ARTICLE_ERROR,
      error,
    };
    expect(createArticleError(error)).toEqual(action);
  });
  it('should dispatch a successful signup action', () => {
    http.post = jest.fn().mockReturnValue(Promise.resolve({ data: mockData }));
    const expectedActions = [
      {
        type: 'CREATE_ARTCLE_INITIALIZED',
      },
      {
        type: 'CREATE_ARTICLE_SUCCESS',
        response: mockData,
      },
    ];
    return store.dispatch(createArticle()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should dispatch a failed signup action', () => {
    http.post = jest
      .fn()
      .mockReturnValue(Promise.reject(new Error('something bad happened')));
    const errorActions = [
      { type: 'CREATE_ARTCLE_INITIALIZED' },
      { type: 'CREATE_ARTICLE_ERROR' },
    ];
    store.dispatch(createArticle()).then(() => {
      expect(store.getActions()).toEqual(errorActions);
    });
  });
});

describe('article reducer test suite', () => {
  it('should return default state', () => {
    const state = articleReducer(initialState, { type: '' });
    expect(state).toEqual(initialState);
  });

  it('should return signUpIntialize reducer', () => {
    const action = createArticleInitialized();
    const state = articleReducer(initialState, action);
    expect(state.isLoading).toBe(true);
  });

  it('should return signup success reducer', () => {
    const action = createArticleSuccess();
    const state = articleReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.successResponse).toEqual(action.response);
  });

  it('should return signup failure reducer', () => {
    const action = createArticleError();
    const state = articleReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.errorResponse).toEqual(action.error);
  });
});
