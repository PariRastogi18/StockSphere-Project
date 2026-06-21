import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "../../index.css";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
    try {
      const { data } = await axios.post(
        "http://localhost:5000/login",
        {
          ...inputValue,
        },
        { withCredentials: true },
      );

      console.log("Full Response:", data);
      console.log("User Data:", data.user);

      const { success, message } = data;
      console.log("Response:", data);
      console.log("Success:", success);
      if (success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        handleSuccess(message);
        setTimeout(() => {
          window.location.replace("http://localhost:3001");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log("LOGIN ERROR:", error);
      console.log(error.response);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <section className="container my-5">
      <div className="row justify-content-center px-2 px-sm-3">
        <div
          className="form_container"
          style={{
            width: "100%",
            margin: "auto",
            padding: "clamp(1.25rem, 5vw, 2rem) clamp(1rem, 6vw, 3rem)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.5rem, 5vw, 2rem)",
              lineHeight: "1.3",
            }}
          >
            Login Account
          </h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
                autoComplete="email"
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
                autoComplete="current-password"
                required
              />
            </div>
            <button type="submit" style={{ width: "100%" }}>
              Submit
            </button>
            <span className="text-center">
              Already have an account? <Link to={"/signup"}>Signup</Link>
            </span>
          </form>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default Login;
