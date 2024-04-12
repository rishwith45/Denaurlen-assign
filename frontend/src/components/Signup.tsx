import "./Signup.css";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.svg";
import VerificationModal from "./VerificationModal";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [firstname, setfirstname] = useState<string | null>(null);
  const [lastname, setlastname] = useState<string | null>(null);
  const [email, setemail] = useState<string | null>(null);
  const [location, setlocation] = useState<string | null>(null);
  const [username, setusename] = useState<string | null>(null);
  const [password, setpassword] = useState<string | null>(null);
  const [repassword, setrepassword] = useState<string | null>(null);
  const navigate = useNavigate();
  const Submitfunc = async () => {
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(email);
      if (!isValid) {
        alert("invalid email");
        return;
      }
    }
    if (
      firstname &&
      lastname &&
      email &&
      location &&
      username &&
      password &&
      repassword
    ) {
      if (password !== repassword) {
        alert("password doesn't match");
        return;
      }

      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          email: email,
          location: location,
          username: username,
          password: password,
        }),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        if (responseData.message === "Userexits") {
          console.log("ndskjn");
          alert("username already exists");
        } else {
          localStorage.setItem("token", responseData.token);
          setModal(true);
          setTimeout(() => {
            navigate("/Category");
          }, 5000);
        }
      } else {
        console.error("Error:", response.statusText);
      }
    } else {
      alert("fill all details");
    }
  };

  return (
    <div className="Signin-wrapper">
      {modal && <VerificationModal />}
      <div className="form-wrapper">
        <div className="header-wrapper">
          <h1 className="signin-text1">Sign Up</h1>
          <h2 className="signin-text2">Connect & Collect..!</h2>
        </div>
        <form className="form">
          <div className="signin-input-wrapper">
            <div className="first-name">
              <div className="signup-input-bg">
                <img src={image6} className="img6"></img>
                <input
                  className="signup-input"
                  type="text"
                  placeholder="First name"
                  required
                  onChange={(e) => setfirstname(e.target.value)}
                ></input>
              </div>
              <div className="signup-input-bg signup-bg1">
                <img src={image6} className="img6"></img>
                <input
                  className="signup-input"
                  type="text"
                  placeholder="Last name"
                  onChange={(e) => setlastname(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="signin-input-bg">
              <img src={image6} className="img6"></img>
              <input
                className="signin-input"
                type="email"
                placeholder="Email"
                onChange={(e) => setemail(e.target.value)}
              ></input>
            </div>
            <div className="signin-input-bg">
              <img src={image6} className="img6"></img>
              <input
                className="signin-input"
                type="text"
                placeholder="location"
                onChange={(e) => setlocation(e.target.value)}
              ></input>
            </div>
            <div className="signin-input-bg">
              <img src={image6} className="img6"></img>
              <input
                className="signin-input"
                type="text"
                placeholder="Username"
                onChange={(e) => setusename(e.target.value)}
              ></input>
            </div>
            <div className="first-name">
              <div className="signup-input-bg">
                <img src={image5} className="img5"></img>
                <input
                  className="signup-input"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setpassword(e.target.value)}
                ></input>
              </div>
              <div className="signup-input-bg signup-bg1">
                <img src={image5} className="img5"></img>
                <input
                  className="signup-input"
                  type="password"
                  placeholder="Re-password"
                  onChange={(e) => setrepassword(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
          <div className="forgot-div">
            <div className="tick-wrapper">
              <h5>
                Accept Terms & Conditions.{" "}
                <span style={{ color: "#4b0082" }}>Click Here</span>
              </h5>
            </div>
          </div>
          <button
            className="signin-button"
            onClick={(e) => {
              e.preventDefault();
              Submitfunc();
            }}
          >
            Sign Up
          </button>

          <h5 style={{ width: "62%", textAlign: "center" }}>
            Already a member of Denaurlen?
            <span
              style={{ color: "#4b0082" }}
              onClick={() => navigate("/Signin")}
            >
              {" "}
              Sign In
            </span>
          </h5>
        </form>
        <div className="signin-footer">
          <h5 style={{ width: "80%", marginTop: "20px", color: "#4b0082" }}>
            Privacy Policy
          </h5>
          <h5 style={{ width: "80%", marginTop: "5px" }}>
            Denaurlen Copyright @ 2021, All Rights Reserved
          </h5>
        </div>
      </div>
      <div className="sideframe">
        <h1 className="sffont font1">DENAURLEN</h1>
        <h2 className="sffont ">Every dream has a demand..!</h2>
        <img src={image4} className="image4"></img>
      </div>
    </div>
  );
};
export default Signup;
