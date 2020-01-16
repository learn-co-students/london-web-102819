import React, { useState, useEffect } from "react";
import API from "../adapters/API";

const LoginForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    API.login(formData).then(user => onSuccess(user));
  };

  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <input
        type="email"
        name="email"
        placeholder="E mail"
        value={formData.email}
      />
      <input
        type="password"
        name="password"
        placeholder="Pass word"
        value={formData.password}
      />
      <input type="submit" value="Log in" />
    </form>
  );
};

export default LoginForm;
