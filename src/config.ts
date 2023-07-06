import { PATH_PAGE } from "./routes/paths";

export const PATH_AFTER_LOGIN = PATH_PAGE.home;

// API
// ----------------------------------------------------------------------
// #PROD API URL: PRODUCTION URL HERE
// #DEV API URL: DEVELOPMENT URL HERE

const HOST_API = "YOUR API URL HERE";
// export const HOST_API = process.env.REACT_APP_HOST_API_KEY || "";

const version = "api/v1/";
// const port = '80';

export const PATH_API = {
  root: HOST_API,
  rootV1: HOST_API + version,
  registerUser: HOST_API + version + "public/user/register",
};
