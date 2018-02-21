import { MENU_OPEN, MENU_CLOSED } from './actions';

const INITIAL_STATE = {
  isOpen: false
};

function handleMenu(state = INITIAL_STATE, action) {
  switch (action.type) {
  case MENU_OPEN:
    return { ...state, isOpen: true };
  case MENU_CLOSED:
    return { ...state, isOpen: false };
  default:
    return state;
  }
}

export default handleMenu;
