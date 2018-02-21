import axios from 'axios';
import { API_BASE_URL, API_SPACE_ID, API_TOKEN } from 'config/client';

export const FETCHING_CONTENT = 'FETCHING_CONTENT';
export const FETCHING_CONTENT_FAILED = 'FETCHING_CONTENT_FAILED';
export const FETCHING_CONTENT_SUCCEED = 'FETCHING_CONTENT_SUCCEED';
export const PAGE_CHANGE = 'PAGE_CHANGE';

export function fetchContent(type, isFetching, contentLoaded) {
  return (dispatch) => {
    return axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=${type}&order=sys.createdAt`).then((content) => {
      dispatch({
        type: FETCHING_CONTENT,
        contentLoaded,
        isFetching
      });
      dispatch({
        type: FETCHING_CONTENT_SUCCEED,
        content,
        contentLoaded,
        isFetching
      });
    }).catch((error) => {
      dispatch({
        type: FETCHING_CONTENT_FAILED,
        error,
        isFetching,
        contentLoaded,
      });
    });
  };
}

export function pageChange(isFetching, contentLoaded, content) {
  return (dispatch) => {
    dispatch({
      type: PAGE_CHANGE,
      isFetching,
      content,
      contentLoaded
    });
  };
}
