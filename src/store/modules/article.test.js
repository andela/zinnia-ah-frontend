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
  getArticleStart,
  getArticleSuccess,
  getArticleFailure,
  FETCH_ARTICLE_FAILURE,
  FETCH_ARTICLE_START,
  FETCH_ARTICLE_SUCCESS,
  getSingleArticle,
} from './article';

import { setupStore } from '../../utils/testHelpers';

describe('ARTICLES', () => {
  describe('CREATE ARTICLE ACTIONS', () => {
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
    let store;
    beforeEach(() => {
      store = setupStore();
    });

    it('should create an action for article creation initialization', () => {
      const action = {
        type: CREATE_ARTCLE_INITIALIZED,
      };
      expect(createArticleInitialized()).toEqual(action);
    });
    it('should create a success action for article creation', () => {
      const response = {};
      const action = {
        type: CREATE_ARTICLE_SUCCESS,
        response,
      };
      expect(createArticleSuccess(response)).toEqual(action);
    });
    it('should create an error action for article creation error', () => {
      const error = '';
      const action = {
        type: CREATE_ARTICLE_ERROR,
        error,
      };
      expect(createArticleError(error)).toEqual(action);
    });
    it('should dispatch a successful article creation action', () => {
      http.post = jest
        .fn()
        .mockReturnValue(Promise.resolve({ data: mockData }));
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

    it('should dispatch a failed article creation action', () => {
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

    it('should return createArticlestart reducer', () => {
      const action = createArticleInitialized();
      const state = articleReducer(initialState, action);
      expect(state.isLoading).toBe(true);
    });

    it('should return createarticle success reducer', () => {
      const action = createArticleSuccess();
      const state = articleReducer(initialState, action);
      expect(state.isLoading).toBe(false);
      expect(state.successResponse).toEqual(action.response);
    });

    it('should return createarticle error reducer', () => {
      const action = createArticleError();
      const state = articleReducer(initialState, action);
      expect(state.isLoading).toBe(false);
      expect(state.errorResponse).toEqual(action.error);
    });

    it('updates the store for a fetch begin action', () => {
      const action = getArticleStart();
      const state = articleReducer(initialState, action);
      expect(state.isLoading).toBe(true);
    });

    it('updates the store when article success action', () => {
      const article = { id: 1, title: 'hello' };
      const action = getArticleSuccess(article);
      const state = articleReducer(initialState, action);
      expect(state.isLoading).toBe(false);
      expect(state.article).toEqual(article);
    });

    it('updates the store correctly when the article fetch action fails', () => {
      const error = { statusCode: 404, error: 'Article does not exist' };
      const action = getArticleFailure(error);
      const state = articleReducer(initialState, action);
      expect(state.isLoading).toBe(false);
      expect(state.article).toEqual(undefined);
      expect(state.error).toEqual(error);
    });
  });
  describe('ARTICLE ACTIONS', () => {
    it('returns the right data on fetch start', () => {
      const expectedAction = {
        type: FETCH_ARTICLE_START,
      };
      expect(getArticleStart()).toEqual(expectedAction);
    });

    it('returns the right data on fetch success', () => {
      const article = {};
      const expectedAction = {
        type: FETCH_ARTICLE_SUCCESS,
        article: {},
      };
      expect(getArticleSuccess(article)).toEqual(expectedAction);
    });

    it('returns the right data on fetch failure', () => {
      const error = {};
      const expectedAction = {
        type: FETCH_ARTICLE_FAILURE,
        error: {},
      };
      expect(getArticleFailure(error)).toEqual(expectedAction);
    });
  });

  describe('INTEGRATION TESTS', () => {
    let store;
    beforeEach(() => {
      store = setupStore(initialState);
    });

    it('fetches an article successfully', () => {
      const article = {
        id: '47d790b9-9995-40df-a1e6-c3ad634253ef',
        userId: '34745e2c-772c-41df-916c-375958882184',
        slug: 'How-to-live-long-d4004916-5f3c-4c2a-a6fd-ebac1278d7d2',
        title: 'How to live long',
        description: 'Lorem ipsum dolor sit, amet consectetur.',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        imageThumbnail:
          'https://res.cloudinary.com/nedy123/image/upload/v1531499267/zfzagvwapebjvr5tzxbt.svg',
        subscriptionType: 'FREE',
        status: 'DRAFT',
        readTime: null,
        createdAt: '2019-05-18T20:34:19.638Z',
        updatedAt: '2019-05-18T20:34:19.638Z',
        author: {
          firstName: null,
          lastName: null,
          username: 'emmsdance',
        },
        comments: [],
      };

      http.get = jest.fn().mockReturnValue(Promise.resolve({ data: article }));

      const expectedActions = [
        {
          type: 'FETCH_ARTICLE_START',
        },
        {
          type: 'FETCH_ARTICLE_SUCCESS',
          article,
        },
      ];

      store.dispatch(getSingleArticle('article')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('fails to fetch an article', () => {
      const error = {
        status: 'error',
        message: 'Article does not exist',
      };

      http.get = jest.fn().mockReturnValue(Promise.reject(error));

      const expectedActions = [
        {
          type: 'FETCH_ARTICLE_START',
        },
        {
          type: 'FETCH_ARTICLE_FAILURE',
          error,
        },
      ];

      store.dispatch(getSingleArticle('article')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
