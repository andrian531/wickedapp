const INITIAL_STATE = {
  pages: [],
};

const applySetPages = (state, action) => ({
  ...state,
  pages: action.pages,
});

function pageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "PAGES_SET": {
      return applySetPages(state, action);
    }
    default:
      return state;
  }
}

export default pageReducer;
