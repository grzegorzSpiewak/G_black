import axios from 'axios';
import { API_BASE_URL, API_SPACE_ID, API_TOKEN } from 'config/client';

export const FETCHING_ASSETS = 'FETCHING_ASSETS';
export const FETCHING_ASSETS_FAILED = 'FETCHING_ASSETS_FAILED';
export const FETCHING_ASSETS_SUCCEED = 'FETCHING_ASSETS_SUCCEED';

export function fetchAssets(id, imageLoaded) {
  return (dispatch) => {
    return axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/assets/${id}?access_token=${API_TOKEN}`).then((images) => {
      dispatch({
        type: FETCHING_ASSETS,
        images,
        imageLoaded
      });
      dispatch({
        type: FETCHING_ASSETS_SUCCEED,
        images,
        imageLoaded
      });
    }).catch((error) => {
      dispatch({
        type: FETCHING_ASSETS_FAILED,
        error,
        imageLoaded
      });
    });
  };
}
