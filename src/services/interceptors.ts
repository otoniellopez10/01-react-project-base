import { PATH_AUTH } from "../routes/paths";

const interceptorSuccess = (response: any) => response;

const interceptorErros = (error: any) => {
  if (error.response) {
    const { status } = error.response;

    switch (status) {
      case 401:
        console.log("Error 401: Unauthorized");
        window.location.href = PATH_AUTH.login;
    }
  }

  console.log("DATOS DE ERRROR", JSON.stringify(error.response.data, null, 2));
  return Promise.reject(error);
};

export { interceptorSuccess, interceptorErros };
