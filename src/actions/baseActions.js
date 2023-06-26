// handle state when request is send and response is awaited
export function getRequest(REQUEST) {
    return {
      type: REQUEST,
    };
  }
  // handle state and redirection if user is successfully logged in
  export function getSuccess(SUCCESS, data) {
    return {
      type: SUCCESS,
      payload: data,
    };
  }
  // handle state in case of failure of user login
  export function getFailure(FAILURE, error) {
    return {
      type: FAILURE,
      payload: error,
    };
  }
  