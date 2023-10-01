import {USER_LOGIN_SUCCESS} from "../types/Types";

export const loginAction = (userData) => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: userData
    }
}