import { createAction, handleActions } from "redux-actions";

// action
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";
const MINUS = "counter/MINUS";
const CHANGE_COLOR = "counter/CHANGE_COLOR";
const COLOR_BOX = "counter/COLOR_BOX";

// action creator
export const increment = createAction(INCREMENT, (number) => number);
export const decrement = createAction(DECREMENT, (number) => number);
export const minus = createAction(MINUS, (num) => num);
export const changeColor = createAction(CHANGE_COLOR, (color) => color);
export const colorBox = createAction(COLOR_BOX, (colorName) => colorName);

// state
const initialState = {
   number: 0,
   color: "#BFCD7E",
   colorName: "",
   num: 1,
};

export default handleActions(
   {
      [INCREMENT]: (state, action) => ({
         ...state,
         number: state.number + 1,
      }),
      [DECREMENT]: (state, action) => ({
         ...state,
         number: state.number - 1,
      }),
      [MINUS]: (state, action) => ({
         ...state,
         num: state.num - 0.2,
      }),
      [CHANGE_COLOR]: (state, action) => ({
         ...state,
         color: action.payload,
      }),
      [COLOR_BOX]: (state, action) => ({
         ...state,
         colorName: action.payload,
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
