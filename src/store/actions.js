// action - customization reducer
export const SET_MENU = '@customization/SET_MENU';
export const MENU_TOGGLE = '@customization/MENU_TOGGLE';
export const MENU_OPEN = '@customization/MENU_OPEN';
export const SET_FONT_FAMILY = '@customization/SET_FONT_FAMILY';
export const SET_BORDER_RADIUS = '@customization/SET_BORDER_RADIUS';

//actionType - user reducer

export const SET_USER = '@user/SET_USER';
export const CLEAR_USER = '@user/CLEAR_USER';

// actions.js

export const setUser = (userData) => ({
  type: SET_USER,
  user: userData
});
