import initialState from "./initialState";
import { reducer as counterPlusOne } from "./counterPlusOne";
import { reducer as counterMinusOne } from "./counterMinusOne";
import { reducer as counterReset } from "./counterReset";
const reducers = [counterPlusOne, counterMinusOne, counterReset];
export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Put global reducers here
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
