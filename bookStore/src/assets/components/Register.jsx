import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { regFunction } from "../redux/regAction";
import { useNavigate } from "react-router";
const Register = () => {
  const [userData, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const InputRef = useRef();
  useEffect(() => {
    InputRef.current.focus();
  }, []);
  function handleChange(event) {
    const { name, value } = event.target;

    setUser({ ...userData, [name]: value });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(regFunction(userData));
    navigate("/");
    setUser({ name: "", email: "", password: "" });
  };
  return (
    <div>
      <h2>Register Here</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={userData.name}
          placeholder="Enter Your Name"
          ref={InputRef}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={userData.email}
          placeholder="Enter Your Email"
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

export default Register;
