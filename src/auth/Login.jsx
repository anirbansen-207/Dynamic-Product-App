

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { userLogInQuery } from "../Hooks/React-Query/userQuery";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();

  const loginSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const { mutate } = userLogInQuery(); // ✅ Hook handles login + redirect

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = (data) => {
    mutate(data); // ✅ Do not dispatch or navigate here
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h2 className="form-title">Login Here</h2>

        <input
          type="email"
          placeholder="Email"
          className="form-input"
          autoComplete="off"
          {...register("email")}
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          className="form-input"
          autoComplete="off"
          {...register("password")}
        />
        {errors.password && <p className="error-message">{errors.password.message}</p>}

        <button type="submit" className="form-button">Login</button>

        <button
          type="button"
          className="form-button signup"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;

