import { createAction, handleActions } from "redux-actions";

// action
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";
const CHANGE_COLOR = "counter/CHANGE_COLOR";

// action creator
export const increment = createAction(INCREMENT, (number) => number);
export const decrement = createAction(DECREMENT, (number) => number);
export const changeColor = createAction(CHANGE_COLOR, (color) => color);

// state
const initialState = {
   number: 0,
   color: "#BFCD7E",
};

export default handleActions(
   {
      [INCREMENT]: (state, action) => ({
         ...state,
         number: state.number + action.payload,
      }),
      [DECREMENT]: (state, action) => ({
         ...state,
         number: state.number - 1,
      }),
      [CHANGE_COLOR]: (state, action) => ({
         ...state,
         color: action.payload,
      }),
   },
   initialState
);

// export default function counter(state = initialState, action) {
//    switch (action.type) {
//       case INCREMENT:
//          return {
//             ...state,
//             number: state.number + 1,
//          };
//       case DECREMENT:
//          return {
//             ...state,
//             number: state.number - 1,
//          };
//       case CHANGE_COLOR:
//          return {
//             ...state,
//             color: action.color,
//          };
//       default:
//          return state;
//    }
// }
