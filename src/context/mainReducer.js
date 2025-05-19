const store = JSON.parse(localStorage.getItem("store"));

export const initialState = store || {
  count: 9,
  saved: [],
  wishlist: [],
  token: null,
  name: "Home",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, count: state.count + action.payload };
    case "DEC":
      return { ...state, count: state.count - 1 };
    case "CHANGEHOME":
      return { ...state, name: action.payload };
    case "SAVED":
      let index = state.saved.findIndex(({ id }) => id === action.payload.id);
      let store = null;
      if (index < 0) {
        store = { ...state, saved: [...state.saved, action.payload] };
      } else {
        store = {
          ...state,
          saved: state.saved.filter(({ id }) => id !== action.payload.id),
        };
      }
      localStorage.setItem("store", JSON.stringify(store));
      return store;
    default:
      return state;
  }
};
