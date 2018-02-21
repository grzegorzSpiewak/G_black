export const MENU_OPEN = 'MENU_OPEN';
export const MENU_CLOSED = 'MENU_CLOSED';

export function menuOpen(isOpen) {
  return (dispatch) => {
    dispatch({
      type: MENU_OPEN,
      isOpen
    });
  };
}

export function menuClosed(isOpen) {
  return (dispatch) => {
    dispatch({
      type: MENU_CLOSED,
      isOpen
    });
  };
}
