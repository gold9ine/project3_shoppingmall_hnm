
// Reducer 합치기 전
// import productReducer from "./reducers/productReducer";
// let store = createStore(productReducer, applyMiddleware(thunk));

// Reducer 합치기 후
// 구버전 : createStore version
// - combinereducer
// - thunk
// - applyMiddleware
// - composeWithDevTools
// import rootReducer from "./reducers/index";
// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers";
// let store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// 신버전 : configureStore version
// - reducers > index.js (combineReducers) 쓸 필요 없음
import authenticateReducer from "./reducers/authenticateReducer";
import productReducer from "./reducers/productReducer";
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
    reducer:{
        auth: authenticateReducer,
        product: productReducer,
    }
})

export default store;
