import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
const LoginPage = () => {
  // console.log(login);
  return (
    <div className="login">
      <div className="site-name">
        <h2>
          {" "}
          <span className="red"> Gifted</span>{" "}
          <span className="white"> Brainz</span>
        </h2>

        <h1>Login</h1>
        <p>Sign in And Explore Gifted Brainz.</p>

        <h2 className="gift-brainz">
          {" "}
          <span className="red"> Gifted</span>{" "}
          <span className="white"> Brainz</span>
        </h2>
      </div>
      <div className="login-details">
        <h1>Enter your email and password below</h1>

        <form action="">
          <label htmlFor="name"></label>
          <input type="text" placeholder="Email" className="details" />
          <input type="text" placeholder="Password" className="details" />
          <input type="checkbox" className="checkbox" /> Keep me logged in to
          this device
        </form>

        <div className="btn">
          <button>
            {" "}
            <Link to="/Firstpage" >
              Login
            </Link>
          </button>
          <p>Or</p>
          <p>
            {" "}
            <Link to="/signup"> Create Account </Link>
          </p>
        </div>

        <div className="access">
          <p>
            {" "}
            <Link to=""> Can't access your account ? </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
