// import classes from "./Counter.module.css";
// import {useSelector, useDispatch} from "react-redux";
// import {toggle} from "../store/index";

// const Counter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector((state) => state.counter);
//   const show = useSelector((state) => state.showCounter);

//   const toggleCounterHandler = () => {
//     dispatch({type: "toggle"});
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {show && <div className={classes.value}>{counter}</div>}
//       <button
//         onClick={() => {
//           dispatch({type: "increment"});
//         }}>
//         Increment
//       </button>
//       <button
//         onClick={() => {
//           dispatch({type: "decrement"});
//         }}>
//         decrement
//       </button>
//       <button
//         onClick={() => {
//           dispatch({type: "incrementBy5", amount: 24});
//         }}>
//         Increment By 5
//       </button>

//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;

// import classes from "./Counter.module.css";
// import {useSelector, useDispatch} from "react-redux";
// import {counterActions} from "../store/index";

// const Counter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector((state) => state.counter);
//   const show = useSelector((state) => state.showCounter);

//   const toggleCounterHandler = () => {
//     dispatch(counterActions.toggle());
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {show && <div className={classes.value}>{counter}</div>}
//       <button
//         onClick={() => {
//           dispatch(counterActions.increment());
//         }}>
//         Increment
//       </button>
//       <button
//         onClick={() => {
//           dispatch(counterActions.decrement());
//         }}>
//         decrement
//       </button>
//       <button
//         onClick={() => {
//           dispatch(counterActions.increase(5));
//         }}>
//         Increment By 5
//       </button>

//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;

import classes from "./Counter.module.css";
import {useSelector, useDispatch} from "react-redux";
import {counterActions} from "../store/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button
        onClick={() => {
          dispatch(counterActions.increment());
        }}>
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(counterActions.decrement());
        }}>
        decrement
      </button>
      <button
        onClick={() => {
          dispatch(counterActions.increase(5));
        }}>
        Increment By 5
      </button>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
