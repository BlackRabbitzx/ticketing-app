// src/components/SignIn.tsx
import React, { useEffect, useState } from "react";
import "./SignIn.css";
import User from "../models/user";
import setCookie from "../util/setCookie";
import signin from "../api/signin";
import { useNavigate } from "react-router-dom";
import Link from "next/link";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useNavigate();

  useEffect(() => {
    const backgroundTimer = setInterval(changeBackground, 5000);

    return () => clearInterval(backgroundTimer);
  }, []);

  const changeBackground = () => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    const backgroundImage = `url('/images/background${randomNumber}.png')`;

    const backgroundContainer = document.getElementById("backgroundContainer");

    if (backgroundContainer) {
      backgroundContainer.style.background = `
      linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      ${backgroundImage}
    `;
      backgroundContainer.style.backgroundSize = "cover";
      backgroundContainer.style.marginTop = "50px";
      backgroundContainer.style.transition = "1s ease";
    }
  };

  const onFormSubmitted = async (e: any) => {
    e.preventDefault();
    const user: User = {
      Email: email,
      Password: password,
    };
    const response: any = await signin(user);
    console.log(response);
    if (response === -2) {
      alert("Email Not Found");
    } else if (response != -2) {
      if (response === -1)
        alert("Server Error, Couldn't Sign You In Right Now");
      else if (response === -3) alert("Incorrect Password");
      else if (response === -4) alert("Token Generation Failed");
      else if (response === -5) {
        setCookie("Auth", "", 1);
        alert("You Are Banned");
      } else {
        setCookie("Auth", response, 1);
        route("/");
      }
    }
  };

  return (
    <form className="signin-container" onSubmit={onFormSubmitted}>
      <div id="backgroundContainer" className="register-background"></div>
      <div className="brand">
        <Link href="/">
          <strong className="log">Trick</strong>
          <strong className="ogo">Tix</strong>
        </Link>
      </div>
      <div className="form-signin">
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </div>
    </form>
  );
};

export default SignIn;
