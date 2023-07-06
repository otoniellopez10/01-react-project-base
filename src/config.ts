import { PATH_PAGE } from "./routes/paths";

export const PATH_AFTER_LOGIN = PATH_PAGE.home;

// API
// ----------------------------------------------------------------------
// #PROD API URL: PRODUCTION URL HERE
// #DEV API URL: DEVELOPMENT URL HERE

export const HOST_API = import.meta.env.VITE_HOST_API || "";

export const version = "api/v1/";

// export const port = '80';

export const PATH_API = {
  root: HOST_API,
  rootV1: HOST_API + version,
  registerUser: HOST_API + version + "public/user/register",
};
