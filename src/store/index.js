import {
    createStore,
    applyMiddleware,
    combineReducers
} from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducer/UserReducer";
import imageReducer from './reducer/imageReducer';

const rootReducer = combineReducers({
    user: userReducer,
    image: imageReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.warn("cek state store", store.getState());
});
export default store;