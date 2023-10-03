import {
  USER_LOGIN_FAILED,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAILED,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
} from "../types/Types";

export const UserReducer = (
  initialState = {
    user: {},
    error: "",
    loading: false,
    success: false,
  },
  action
) => {
  switch (action.type) {
    case USER_LOGIN_START:
      return {
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        success: true,
      };
    case USER_LOGIN_FAILED:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };

    case USER_REGISTER_START:
      return {
        loading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        success: true,
      };
    case USER_REGISTER_FAILED:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return initialState;
  }
};
