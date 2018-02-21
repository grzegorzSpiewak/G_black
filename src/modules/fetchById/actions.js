import axios from 'axios';
import { API_BASE_URL, API_SPACE_ID, API_TOKEN } from 'config/client';

export const FETCHING_POST_BY_ID = 'FETCHING_POST_BY_ID';
export const FETCHING_POST_FAILED = 'FETCHING_POST_FAILED';
export const FETCHING_POST_SUCCEED = 'FETCHING_POST_SUCCEED';
export const LOAD_INITIAL_STATE = 'LOAD_INITIAL_STATE';

export function fetchById(id, isFetching, postLoaded) {
  return (dispatch) => {
    return axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries/${id}?access_token=${API_TOKEN}`).then((post) => {
      dispatch({
        type: FETCHING_POST_BY_ID,
        isFetching,
        postLoaded
      });
      dispatch({
        type: FETCHING_POST_SUCCEED,
        post,
        isFetching,
        postLoaded
      });
    }).catch((error) => {
      dispatch({
        type: FETCHING_POST_FAILED,
        postLoaded,
        error
      });
    });
  };
}

export function loadInitialState(isFetching, postLoaded) {
  return (dispatch) => {
    dispatch({
      type: LOAD_INITIAL_STATE,
      isFetching,
      postLoaded
    });
  };
}
