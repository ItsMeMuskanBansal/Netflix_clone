import React from "react";
import styled from "styled-components";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { firebaseAuth } from "../utils/firebase-config";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body">
          <div className="text">
            <h1>Unlimited movies , Tv Shows and More</h1>
            <h4>Watch Anywhere, cancel Anytime</h4>
            <h6>
              Ready to watch? Enter your Email to create or restart Membership
            </h6>
          </div>
        </div>
        <div className="form">
          {showPassword ? (
            <input
              type="password"
              placeholder="password"
              name="password"
              value={formValues.password}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
            />
          ) : (
            <input
              type="email"
              placeholder="email address"
              name="email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
            />
          )}

          {!showPassword ? (
            <button onClick={() => setShowPassword(true)}>Get Started</button>
          ) : (
            <button onClick={handleSignUp}>Sign Up</button>
          )}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.79);
    height: 100vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;

    .body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .text {
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size: 1.5rem;
      color: white;
    }
    h1 {
      padding: 0 20rem;
    }
    h4 {
      margin-top: 0.3rem;
    }
    h6 {
      margin-top: 0.1rem;
    }
  }
  .form {
    display: grid;
    grid-template-columns: ${({ showPassword }) =>
      showPassword ? "1fr 1fr" : "2fr 1fr"};
    width: 70%;
    margin: 2px auto;
    padding: 0.5px;

    input {
      color: black;
      padding: 1rem;
      font-size: 1.2rem;
      width: 100%;
      border: 1px solid black;
      border-radius: 4px;
      margin-top: 25px;

      &:focus {
        outline: none;
      }
    }

    button {
      padding: 0.5rem 1rem;
      background-color: red;
      border: none;
      cursor: pointer;
      color: white;
      font-size: 1.05rem;
      width: 70%;
      border-radius: 4px;
      margin-top: 25px;
    }
  }
`;

export default SignupPage;
