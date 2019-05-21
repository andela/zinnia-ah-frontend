import { http } from '../../api/client';
import {
  SEARCH_SUCCESS,
  SEARCH_INITIALIZED,
  SEARCH_ERROR,
  searchIntialize,
  searchSuccess,
  searchError,
  searchReducer,
  customSearch,
} from './search';
import { setupStore } from '../../utils/testHelpers';

let store;

const initialState = {
  isLoading: false,
  errorResponse: [],
  successResponse: {
    data: {
      articles: [],
      authors: [],
      tags: [],
    },
  },
};

describe('SEARCH ACTIONS AND REDUCER', () => {
  const searchMockData = {
    status: 'success',
    data: {
      keyword: 'football ',
      articles: [
        {
          id: '141f4f05-7d81-4593-ab54-e256c1006210',
          user_id: '5a6fab9c-5849-4be5-973c-5a371165cd57',
          title: 'EMMSDAN article',
          slug: 'Hello-Article-Pionr-hdhdjh',
          description: 'Emmanuel Daniel uses this article',
          body: 'Another Body',
          image_thumbnail:
            'https://res.cloudinary.com/nedy123/image/upload/v1533036618/mb0zefwbaccwnsuwretb.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      authors: [],
      tags: [],
    },
  };

  beforeEach(() => {
    store = setupStore(initialState);
  });

  it('should dispatch an action for a custom search', () => {
    const action = {
      type: SEARCH_INITIALIZED,
    };
    expect(searchIntialize()).toEqual(action);
  });

  it('should dispatch an action for search success', () => {
    const response = {};
    const action = {
      type: SEARCH_SUCCESS,
      response,
    };
    expect(searchSuccess(response)).toEqual(action);
  });

  it('should dispatch an action for search error', () => {
    const error = '';
    const action = {
      type: SEARCH_ERROR,
      error,
    };
    expect(searchError(error)).toEqual(action);
  });
  it('should dispatch a successful search action', () => {
    http.get = jest
      .fn()
      .mockReturnValue(Promise.resolve({ data: searchMockData }));
    const expectedActions = [
      {
        type: 'SEARCH_INITIALIZED',
      },
      {
        type: 'SEARCH_SUCCESS',
        response: searchMockData,
      },
    ];
    return store.dispatch(customSearch('hello')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch a failed signup action', () => {
    http.get = jest
      .fn()
      .mockReturnValue(Promise.reject('what did you do now?'));
    const errorActions = [
      { type: 'SEARCH_INITIALIZED' },
      { type: 'SEARCH_ERROR', error: 'what did you do now?' },
    ];
    store.dispatch(customSearch()).then(() => {
      expect(store.getActions()).toEqual(errorActions);
    });
  });
});

describe('INTEGRATION TESTS', () => {
  beforeEach(() => {
    store = setupStore(initialState);
  });

  it('should return default state', () => {
    const state = searchReducer(initialState, { type: '' });
    expect(state).toEqual(initialState);
  });

  it('should update the store after dispatching search initialized action', () => {
    const action = searchIntialize();
    const state = searchReducer(initialState, action);
    expect(state.isLoading).toBe(true);
  });

  it('should update the store after dispatching a successful search action', () => {
    const action = searchSuccess('Great, your search returned some matches');
    const state = searchReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.successResponse).toEqual(action.response);
  });

  it('hould update the store after dispatching a failed search action', () => {
    const action = searchError('You did something funny');
    const state = searchReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.errorResponse).toEqual(action.error);
  });
});
