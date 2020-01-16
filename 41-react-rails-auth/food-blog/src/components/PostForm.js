import React, { useState, useEffect } from "react";
import API from "../adapters/API";

const PostForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: ""
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    API.postPost(formData).then(post => onSuccess(post));
  };

  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <input
        type="title"
        name="title"
        placeholder="Post title"
        value={formData.title}
      />
      <textarea
        name="content"
        placeholder="Post content"
        value={formData.content}
      />
      <input type="submit" value="Create post" />
    </form>
  );
};

export default PostForm;
