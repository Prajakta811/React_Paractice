import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginUser } from "../redux/actionType";

const Login = () => {
  const [userData, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const InputRef = useRef();
  useEffect(() => {
    InputRef.current.focus();
  }, []);
  function handleChange(event) {
    const { name, value } = event.target;
    setUser({ ...userData, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(loginUser(userData));
    navigate("/");
    setUser({ email: "", password: "" });
  }
  return (
    <div>
      <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={userData.email}
          placeholder="Enter Your Email"
          ref={InputRef}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={userData.password}
          placeholder="Enter Your Password"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
