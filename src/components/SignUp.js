import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signUp">
      <div className="site-name">
        <h2>
          {" "}
          <span className="red"> Gifted</span>{" "}
          <span className="white"> Brainz</span>
        </h2>

        <h1>
          Join <span className="red"> Gifted</span>{" "}
          <span className="white"> Brainz</span>
        </h1>
        <p>Sign Up And Explore Gifted Brainz.</p>

        <h2 className="gift-brainz">
          {" "}
          <span className="red"> Gifted</span>{" "}
          <span className="white"> Brainz</span>
        </h2>
      </div>

      <div className="signUp-details">
        <h1>Create Account</h1>

        <form action="">
          <div className="name">
            <label htmlFor="name"></label>

            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>

          <div className="email">
            <label htmlFor="email"></label>

            <input type="text" placeholder="Email" />
          </div>

          <div className="password">
            <label htmlFor="password"></label>
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Confirm Password" />
          </div>

          <div className="referral-code">
            <label htmlFor="Referral Code"></label>
            <input placeholder="Referral Code" />
          </div>
        </form>

        <div className="signUp-checkbox">
          <input type="checkbox" />

          <p>
            I agree to <span className="red">Gifted</span>{" "}
            <span className="white">Brainz</span>{" "}
            <p> Privacy Policy & Terms of service</p>{" "}
          </p>
        </div>
        <div className="boton">
          <button className="btn-boton">
            {" "}
            <p> create account</p>
          </button>
          <p>Or</p>
          <p>
            {" "}
            <Link to="/login"> Login </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
