import {applyMiddleware, combineReducers, createStore} from "redux";
import {UserReducer} from "./reducers/userReducer"
import thunk from "redux-thunk";
import {cartReducer} from "./reducers/cartReducers";

const reducers = combineReducers({
 UserReducer,
 cart: cartReducer
})

const middlewares = [thunk]

const store = createStore(reducers, applyMiddleware(...middlewares))

export default store;