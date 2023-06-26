import { USER_CONST } from "./actionTypes";
import * as base from "./baseActions";
import { AXIOS_INSTANCE, BASE_USER_URL } from "./apiEndpoint";

export function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}
export function parseJSON(response) {
  return response.data;
}

// action for users
export function getUsers() {
  return (dispatch) => {
    dispatch(base.getRequest(USER_CONST.GET_USER_REQUEST));
    AXIOS_INSTANCE.get(BASE_USER_URL)
      .then(checkHttpStatus)
      .then(parseJSON)
      .then((response) => {
          dispatch(
            base.getSuccess(USER_CONST.GET_USER_SUCCESS, {
              response: {
                data: response,
              },
            })
          );
      })
      .catch((error) => {
        dispatch(
          base.getFailure(USER_CONST.GET_USER_FAILURE, {
            error: {
              statusText: error,
              netWorkError: true,
            },
          })
        );
      });
  };
}
