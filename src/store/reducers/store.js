import { applyMiddleware, combineReducers, createStore } from "redux";
import cartReducer from "./cart";

const reducer = combineReducers({
    items: cartReducer
})

export const store = createStore(reducer);
