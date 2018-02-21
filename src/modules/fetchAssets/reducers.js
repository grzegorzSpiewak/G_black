import { FETCHING_ASSETS, FETCHING_ASSETS_FAILED, FETCHING_ASSETS_SUCCEED } from './actions';

const INITIAL_STATE = {
  images: {},
  imageLoaded: ''
};

function getAssets(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCHING_ASSETS:
    return { ...state, imageLoaded: 'START' };
  case FETCHING_ASSETS_SUCCEED:
    return { ...state, imageLoaded: 'SUCCES', images: [...state.images, action.images.data] };
  case FETCHING_ASSETS_FAILED:
    return { ...state, imageLoaded: 'FAILED' };
  default:
    return state;
  }
}

export default getAssets;
