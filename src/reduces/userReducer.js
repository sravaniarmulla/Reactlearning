import { USER_CONST } from "../actions/actionTypes";
export default function reducer(state = {}, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case USER_CONST.GET_USER_REQUEST:
    console.log('user request case')
      return {
        ...state,
        userRequest: true,
        userFailure: null,
        userData: null,
      };
    case USER_CONST.GET_USER_SUCCESS:
        console.log('user success case')
      return {
        ...state,
        userRequest: false,
        userFailure: null,
        userData: action.payload.response.data,
      };
    case USER_CONST.GET_USER_FAILURE:
        console.log('user failure case')
      return {
        ...state,
        userRequest: false,
        userFailure: action.payload,
        userData: null,
      };
  }
  return state;
}
