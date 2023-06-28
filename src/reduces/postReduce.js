import { PROFILE_CONST } from "../actions/actionTypes";

export default function profileReducer(state = {}, action) {
  switch (action.type) {
    case PROFILE_CONST.GET_PROFILE_REQUEST:
      return {
        ...state,
        profileRequest: true,
        profileFailure: null,
        profileData: null,
      };
    case PROFILE_CONST.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profileRequest: false,
        profileFailure: null,
        profileData: action.payload.respose.data,
      };
    case PROFILE_CONST.GET_PROFILE_FAILUER:
      return {
        ...state,
        profileRequest: false,
        profileFailure: action.payload,
        profileData: null,
      };
  }
}
