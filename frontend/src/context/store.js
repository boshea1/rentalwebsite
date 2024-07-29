import { createStore,action } from "easy-peasy";


const store = createStore({
    loggedIn: false,
    isLoggedIn: action((state, payload) => {
      state.loggedIn = !state.loggedIn;
    }),
  });

export default store;