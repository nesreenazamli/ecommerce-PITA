import axios from "axios";
import { USER_LOGIN_FAILED, USER_LOGIN_START, USER_LOGIN_SUCCESS, USER_REGISTER_START,USER_REGISTER_SUCCESS,USER_REGISTER_FAILED} from "../types/Types";

export const loginAction = (userData, navigate) => {
    return async (dispatch) => {
        dispatch({
            type: USER_LOGIN_START,
        })
        try {
            const response = await axios.post(
                "https://e-commerce-api-dev.onrender.com/api/login", userData);
            
                dispatch({
                    type: USER_LOGIN_SUCCESS,
                    payload: response.data.user
                });  
                
                
                localStorage.setItem("user", JSON.stringify(response.data.user));

                navigate("/")

            
        } catch (e) {

            dispatch({
                type: USER_LOGIN_FAILED,
                payload: e.response.data.error
            })

            
        }
    }
}

export const registerAction =(values, navigate) => {
    return async(dispatch) => {

        dispatch({
            type: USER_REGISTER_START,
        })

        try {
            const response = await axios.post(
                "https://e-commerce-api-fylh.onrender.com/api/register",
                values
              );

              dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: response.data
              })

              navigate("/login")
            
        } catch (error) {

            dispatch({
                type:USER_REGISTER_FAILED,
                payload: error.response.data.error
              })

        }


    }

}