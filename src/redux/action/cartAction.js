import {ADD_TO_CART, DECREASE_ITEMS, INCREASE_ITEMS} from "../types/Types";

export const addToCart = (product, quantity) => {
    return (dispatch, getState) => {
        const state = getState();

      const isExist = state.cart.cart.find((item) => item.id === product.id);

      if (isExist) {
          product.quantity += quantity;

          console.log( product.quantity,  "product.quantity")

          dispatch({
              type: INCREASE_ITEMS,
              payload: [...state.cart.cart]
          })


      }else {


          product.quantity = quantity;

          console.log(product.quantity)

          dispatch({
              type: ADD_TO_CART,
              payload: product

          })

      }
      localStorage.setItem("cart", JSON.stringify(state.cart.cart))
      }



      }



   export  const decreaseQuantity = (product, quantity) => {

    return (dispatch, getState) => {

        const state = getState();


        const isExist = state.cart.cart.find((item) => item.id === product.id);

        if (isExist) {

            if(product.quantity > 1){
            product.quantity -= quantity
        }
            dispatch({
                type: DECREASE_ITEMS,
                payload: [...state.cart.cart]

            })
        }

    }

}





































// import {ADD_TO_CART, DECREASE_COUNT, DELETE_CART_ITEM, INCREASE_COUNT} from "../types/Types";
//
// export const addToCart = (product, quantity) => (dispatch, getState) => {
//
//     const state = getState();
//
//     const isExit = state.cart.cart.find((item)=>  item.id === product.id)
//
//     if (isExit) {
//         product.quantity += quantity;
//         dispatch({
//             type: INCREASE_COUNT,
//             payload: state.cart.cart,
//         });
//
//         console.log(product.quantity, "product.quantity")
//
//
//     } else {
//         product.quantity = quantity;
//
//         dispatch({
//             type: ADD_TO_CART,
//             payload: product,
//         });
//     }
//
//
//
//     localStorage.setItem("cart", JSON.stringify(state.cart.cart));
// }
//
//
// export const decreasequantity  = (product, quantity) => (dispatch, getState) => {
//
//     const state = getState();
//
//     const isExit = state.cart.cart.find((item)=>  item.id === product.id)
//
//     if (isExit) {
//         product.quantity -= quantity;
//
//
//         const index = state.cart.cart.findIndex(
//             (item) => item.id == isExit.id
//         );
//
//         state.cart.cart[index] = isExit;
//
//         dispatch({
//             type: DECREASE_COUNT,
//             payload: state.cart.cart,
//         });
//
//     }
//
//
//     localStorage.setItem("cart", JSON.stringify(state.cart.cart));
// }
//
//
// export const deleteCartItem = (id) => (dispatch, getState) => {
//     dispatch({
//         type: DELETE_CART_ITEM,
//         payload: id,
//     });
//
//     localStorage.setItem("cart", JSON.stringify(getState().cart.cart));
// };
