import axios from "./axios";
import { loadAbort } from "../utils";

export const login = () => {
  const controller = loadAbort();
  return {
    call: axios.get("https://rickandmortyapi.com/api/character/2", {
      signal: controller.signal,
    }),
    controller,
  };
};

export const getMorty = () => {
  return axios.get("https://rickandmortyapi.com/api/character/2");
};

export const getRick = () => {
  return axios.get("https://rickandmortyapi.com/api/character/1");
};

export const getCoolMorty = () => {
  const controller = loadAbort();
  return {
    call: axios.get("https://rickandmortyapi.com/api/character/2", {
      signal: controller.signal,
    }),
    controller,
  };
};

export const getCoolRick = () => {
  const controller = loadAbort();
  return {
    call: axios.get("https://rickandmortyapi.com/api/character/1", {
      signal: controller.signal,
    }),
    controller,
  };
};
