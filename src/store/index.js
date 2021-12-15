// import {createStore} from "redux";

// const initialState = {counter: 0, showCounter: true};

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "incrementBy5") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };

// const store = createStore(counterReducer);
// export default store;

// import {createSlice} from "@reduxjs/toolkit";
// import {configureStore} from "@reduxjs/toolkit";

// const initialState = {counter: 0, showCounter: true};

// const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.counter++;
//     },
//     decrement: (state) => {
//       state.counter--;
//     },
//     increase: (state, action) => {
//       state.counter = state.counter + action.payload;
//     },
//     toggle: (state) => {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const store = configureStore({
//   reducer: counterSlice.reducer,
// });

// export const counterActions = counterSlice.actions;

// export default store;

import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
