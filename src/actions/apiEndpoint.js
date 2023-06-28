import axios from "axios";

export const AXIOS_INSTANCE = axios.create();
AXIOS_INSTANCE.defaults.headers.common["Content-Type"] = "application/json";

export const BASE_DETAIL_URL = process.env.REACT_APP_PROFILE_URL;
export const BASE_USER_URL = process.env.REACT_APP_USER_URL;
