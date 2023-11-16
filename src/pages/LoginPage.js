import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState();

  const handleSubmit = () => {
    const url = "https://studentbackend-qa9o.onrender.com/students/login";
    const loginobj = { email };
    axios
      .post(url, loginobj)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label for="email">Email ID </label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input type="submit" />
      </form>
    </Layout>
  );
}

export default LoginPage;
