import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  Alluserfetchreducer,
  userDetailsReducer,
  userloginreducer,
  userRegisterReducer,
  userUpdateReducer,
  userDeleteReducer,
  userUpdateProfileReducer
} from "./Reducer/userReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  userLogin: {
    userinfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};
console.log(initialState);
const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userloginreducer,
  userList: Alluserfetchreducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  userDelete: userDeleteReducer,
  userUpdateProfile: userUpdateProfileReducer,

});

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
