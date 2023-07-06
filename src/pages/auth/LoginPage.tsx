import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { dispatch, useSelector } from "../../redux/store";
import { modifyAuth } from "../../redux/slices/auth";

const LoginPage = () => {
  const token = useSelector((state) => state.auth.token);

  const handleCLickButton = () => {
    dispatch(modifyAuth({ token: "123" }));
  };

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <>
      <h1>LoginPage</h1>

      <Button onClick={handleCLickButton}>Set State</Button>

      <p>Stado del token: {token}</p>
    </>
  );
};

export default LoginPage;
