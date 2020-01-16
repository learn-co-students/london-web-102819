import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import API from "./adapters/API";
import PostForm from "./components/PostForm";
import SignupForm from "./components/SignupForm";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);
  const [validatedUser, setValidatedUser] = useState(false);

  const logout = () => {
    setUser(null);
    API.clearToken();
  };
  const handleUser = user => {
    setUser(user);
  };

  const handlePost = post => {
    setPost(post);
  };

  useEffect(() => {
    if (API.hasToken()) {
      API.validate()
        .then(handleUser)
        .then(() => setValidatedUser(true))
        .catch(errorPromise => {
          errorPromise.then(data => {
            setError(data);
          });
        });
    } else {
      setValidatedUser(true);
    }
  }, []);

  if (!validatedUser && !error)
    return <div>please wait while we validate your user</div>;

  return (
    <div className="App">
      {error && <div style={{ color: "red" }}>{JSON.stringify(error)}</div>}
      {!user && <LoginForm onSuccess={handleUser} />}
      {!user && <SignupForm onSuccess={handleUser} />}
      {user && (
        <div>
          welcome back {user.email}!<button onClick={logout}>log out</button>
        </div>
      )}
      {user && <PostForm onSuccess={handlePost} />}
      {post && (
        <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <p>by - {post.user.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
