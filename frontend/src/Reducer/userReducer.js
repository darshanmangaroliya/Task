import {
  ALL_USER_FETCH_FAIL,
  ALL_USER_FETCH_START,
  ALL_USER_FETCH_SUCCESS,
  CREATE_USER_FAIL,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  USER_SIGNOUT,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_RESET,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_RESET,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_RESET,
  USER_DELETE_SUCCESS,
} from "../Constant/userConstant";

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
   
    case CREATE_USER_START:
      return { loading: true };
    
      case CREATE_USER_SUCCESS:
      return { loading: false, userinfo: action.payload };
   
      case CREATE_USER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userloginreducer =(state={},action)=>{
  switch (action.type) {
    case LOGIN_USER_START:
      return { loading: true };
    case LOGIN_USER_SUCCESS:
      return { loading: false, userinfo: action.payload };
    case LOGIN_USER_FAIL:
      return { loading: false, error: action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
}}

export const Alluserfetchreducer=(state={loading:true},action)=>{
  switch (action.type) {
    case ALL_USER_FETCH_START:
      return { loading: true };
    case ALL_USER_FETCH_SUCCESS:
      return { loading: false, users: action.payload };
    case ALL_USER_FETCH_FAIL:
      return { loading: false, error: action.payload };
    
    default:
      return state;
}}

export const userDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case USER_DETAILS_RESET:
      return { loading: true };
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true };
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    case USER_UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};
export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case USER_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { loading: true };
    case USER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case USER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case USER_DELETE_RESET:
      return {};
    default:
      return state;
  }
};