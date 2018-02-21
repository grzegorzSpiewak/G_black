import { FETCHING_POST_BY_ID, FETCHING_POST_FAILED, FETCHING_POST_SUCCEED, LOAD_INITIAL_STATE } from './actions';

const INITIAL_STATE = {
  post: {},
  isFetching: false,
  postLoaded: ''
};

function blogPostsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCHING_POST_BY_ID:
    return { ...state, isFetching: true, postLoaded: '' };
  case FETCHING_POST_SUCCEED:
    return { ...state, post: action.post.data, isFetching: false, postLoaded: 'SUCCES' };
  case FETCHING_POST_FAILED:
    return { ...state, postLoaded: 'FAILED' };
  case LOAD_INITIAL_STATE:
    return { ...state, post: { }, isFetching: false, postLoaded: '' };
  default:
    return state;
  }
}

export default blogPostsReducer;
