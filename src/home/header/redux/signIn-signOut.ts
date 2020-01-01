import { ActionTypes } from "./types";

export interface SignInAction {
  type: ActionTypes.SIGNIN;
}

export interface SignOutAction {
  type: ActionTypes.SIGNOUT;
}

export type Action = SignInAction | SignOutAction;

export function signIn(): SignInAction {
  return {
    type: ActionTypes.SIGNIN
  };
}
export function signOut(): SignOutAction {
  return {
    type: ActionTypes.SIGNOUT
  };
}
