import {
  FETCHING_CONTENT,
  FETCHING_CONTENT_SUCCEED,
  FETCHING_CONTENT_FAILED,
  PAGE_CHANGE
} from './actions';

const INITIAL_STATE = {
  content: false,
  contentLoaded: false,
  isFetching: false,
};

function pageContentReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCHING_CONTENT:
    return { ...state, content: false, contentLoaded: false, isFetching: true };
  case FETCHING_CONTENT_SUCCEED:
    return { ...state, content: action.content.data.items[0], contentLoaded: true, isFetching: false };
  case FETCHING_CONTENT_FAILED:
    return { ...state, content: false, isFetching: false, contentLoaded: false };
  case PAGE_CHANGE:
    return { ...state, content: false, contentLoaded: false, isFetching: false };
  default:
    return state;
  }
}

export default pageContentReducer;
