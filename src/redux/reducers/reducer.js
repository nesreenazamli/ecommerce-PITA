import {USER_LOGIN_SUCCESS} from "../types/Types";


export  const UserReducer  =  (
        initialState = {
        user : {}
    },
    action

) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
        return {
            user: action.payload
         }

        default:

            return initialState
    }



}