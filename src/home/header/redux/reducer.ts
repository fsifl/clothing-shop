import { InitialState } from "./initialState";
import { Action } from "./signIn-signOut";
import { ActionTypes } from "./types";

export const InitialStateValue: InitialState = {
  isLogin: false
};

export default function loginReducer(
  state = InitialStateValue,
  action: Action
): InitialState {
  switch (action.type) {
    case ActionTypes.SIGNIN:
      return {
        ...state,
        isLogin: true
      };

    case ActionTypes.SIGNOUT:
      return {
        ...state,
        isLogin: false
      };

    default:
      return state;
  }
}
