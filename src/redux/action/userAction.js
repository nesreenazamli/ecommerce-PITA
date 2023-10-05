import axios from "axios";
import {
  USER_LOGIN_FAILED,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_FAILED, UPDATE_USER_START, UPDATE_USER_SUCCESS, UPDATE_USER_FAILED,
} from "../types/Types";

export const loginAction = (userData, navigate) => {
  return async (dispatch) => {
    dispatch({
      type: USER_LOGIN_START,
    });
    try {
      const response = await axios.post(
        "https://e-commerce-api-dev.onrender.com/api/login",
        userData
      );

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: response.data.user,
      });

      localStorage.setItem("user", JSON.stringify(response.data.user));

      navigate("/");
    } catch (e) {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: e.response.data.error,
      });
    }
  };
};

export const registerAction = (values, navigate) => {
  return async (dispatch) => {
    dispatch({
      type: USER_REGISTER_START,
    });

    try {
      const response = await axios.post(
        "https://e-commerce-api-fylh.onrender.com/api/register",
        values
      );

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: response.data,
      });

      navigate("/login");
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAILED,
        payload: error.response.data.error,
      });
    }
  };
};

export const getUserById = (id) => {
  return async (dispatch) => {
    dispatch({
      type: GET_USER_START,
    });

    try {
      const response = await axios.get(
        `https://e-commerce-api-dev.onrender.com/api/user/${id}`
      );

      dispatch({
        type: GET_USER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_USER_FAILED,
        payload: error.response.data.error,
      });
    }
  };
};


export const updateUserAction = (id, values) => {
  return async (dispatch) => {
    dispatch({
      type: UPDATE_USER_START,
    });

    try {
      const response = await axios.put(`https://e-commerce-api-fylh.onrender.com/api/user/update/${id}`, values);

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: response.data,
      });

    } catch (error) {
      dispatch({
        type: UPDATE_USER_FAILED,
        payload: error.response.data.error,
      });
    }
  };
};

