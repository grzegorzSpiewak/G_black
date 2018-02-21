export const INTRO_DISABLED = 'INTRO_DISABLED';

export function disableIntro(off) {
  return (dispatch) => {
    dispatch({
      type: INTRO_DISABLED,
      off
    });
  };
}
