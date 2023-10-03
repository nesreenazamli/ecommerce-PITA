import {applyMiddleware, combineReducers, createStore} from "redux";
import {UserReducer} from "./reducers/reducer"
import thunk from "redux-thunk";

const reducers = combineReducers({
 UserReducer,
})

const middlewares = [thunk]

const store = createStore(reducers, applyMiddleware(...middlewares))

export default store;