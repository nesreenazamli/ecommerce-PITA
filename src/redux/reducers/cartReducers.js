import {ADD_TO_CART, DECREASE_ITEMS, INCREASE_ITEMS} from "../types/Types";


export const cartReducer = (
    initialState= {
        cart:[]

}, action) => {

    switch (action.type) {

        case ADD_TO_CART:
            return {
                cart : [...initialState.cart, action.payload]
            }
        case INCREASE_ITEMS:
            return {
                cart: action.payload
            }

        case DECREASE_ITEMS:
            return {
                cart: action.payload
            }


        default:
            return initialState
    }




}
















// import {ADD_TO_CART, DECREASE_COUNT, DELETE_CART_ITEM, INCREASE_COUNT} from "../types/Types";
//
// export const cartReducer = (
//     initialState = {
//         cart: [],
//     },
//     action
// ) => {
//     switch (action.type) {
//         case ADD_TO_CART:
//             return {
//                 cart: [...initialState.cart, action.payload],
//             };
//
//          case INCREASE_COUNT:
//              return {
//                 ...initialState,
//                cart: action.payload,
//              };
//          case DECREASE_COUNT:
//             return {
//                 ...initialState,
//                  cart: action.payload,
//              };
//
//         case DELETE_CART_ITEM:
//             return {
//
//                 cart: initialState.cart.filter((item) => item.id !== action.payload),
//             };
//
//         default:
//             return initialState;
//     }
// };
