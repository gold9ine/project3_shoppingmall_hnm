import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
// import productReducer from "./reducers/productReducer";
// let store = createStore(productReducer, applyMiddleware(thunk));
// import rootReducer from "./reducers/index";
import rootReducer from "./reducers";
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
