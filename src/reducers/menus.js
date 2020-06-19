const INITIAL_STATE = {
  menus: [],
};

const applySetMenus = (state, action) => ({
  ...state,
  menus: action.menus,
});

function menuReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "MENUS_SET": {
      return applySetMenus(state, action);
    }
    default:
      return state;
  }
}

export default menuReducer;
