import { AnyAction } from "redux";
import { signInSuccess, signOutSuccess, signInFailed,signOutFailed, signUpFailed } from "./userAction";
import { UserData } from "../../utils/firebase/firebase";


export type UserState = {
  readonly currentUser: UserData | null,
  readonly isLoading: boolean,
  readonly error: Error | null,
}

const INITIAL_STATE: UserState = {
  currentUser: null,
  // redux thunk
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction): UserState => {
  if(signInSuccess.match(action)){
    return {
      ...state,
      currentUser: action.payload ?? null,
    };
  }

  if(signOutSuccess.match(action)){
    return {
      ...state,
      currentUser: null,
    };
  }

  if(signInFailed.match(action) || signUpFailed.match(action) || signOutFailed.match(action)){
    return {
      ...state,
      error: action.payload ?? null,
    };
  }
  
  return state
  // switch (type) {
  //   case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      // return {
      //   ...state,
      //   currentUser: payload,
      // };
  //   case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      // return {
      //   ...state,
      //   currentUser: null,
      // };
  //   case USER_ACTION_TYPES.SIGN_IN_FAILED:
      // return {
      //   ...state,
      //   error: payload,
      // };
  //   case USER_ACTION_TYPES.SIGN_OUT_FAILED:
  //     return {
  //       ...state,
  //       error: payload,
  //     };
  //   case USER_ACTION_TYPES.SIGN_UP_FAILED:
  //     return {
  //       ...state,
  //       error: payload,
  //     };
  //   default:
  //     return state;
  // }
};
