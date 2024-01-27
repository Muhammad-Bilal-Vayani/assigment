import {Button, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import Input from "../Components/Input";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user_data, setUserData] = useState({});

  const navigate = useNavigate();

  const onChangeHandle = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    setUserData({ ...user_data, [id]: value });
  };

  const submit_handle = (e) => {
    e.preventDefault();
    console.log("data", user_data);
    navigate("/");
  };

  return (
    <Container>
      <Stack spacing={2}>
        <form onSubmit={submit_handle}>
          <Input
            placeholder={"Email address"}
            type={"email"}
            id={"email"}
            required={true}
            onChange={onChangeHandle}
            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
          />
          <Input
            required={true}
            placeholder={"Password"}
            type={"password"}
            id={"password"}
            onChange={onChangeHandle}
            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
          />

<Button 
          type="submit"
          style={{ width: "100%", padding: "10px", borderRadius: "5px", background: "#4CAF50", color: "white" }}
        //   onClick={submit_handle}
          >Submit Details</Button>
        </form>
      </Stack>
    </Container>
  );
};

export default Login;
