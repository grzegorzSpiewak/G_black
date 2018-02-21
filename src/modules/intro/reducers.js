import { INTRO_DISABLED } from './actions';

const INITIAL_STATE = {
  showIntro: true
};

function handleMenu(state = INITIAL_STATE, action) {
  switch (action.type) {
  case INTRO_DISABLED:
    return { ...state, showIntro: false };
  default:
    return state;
  }
}

export default handleMenu;
