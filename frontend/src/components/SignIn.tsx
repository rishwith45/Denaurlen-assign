import "./Signin.css";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.svg";
import image7 from "../images/image7.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const [username, setusername] = useState<string | null>(null);
  const [password, setpassword] = useState<string | null>(null);
  const navigate = useNavigate();
  const signin = async () => {
    if (username && password) {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        if (responseData.message === "Invalid") {
          alert("invalid username or password");
        } else {
          localStorage.setItem("token", responseData.token);
          navigate("/Addfriend");
        }
      } else {
        alert("something went wrong");
      }
    } else {
      alert("invalid username or password");
    }
  };
  return (
    <div className="Signin-wrapper">
      <div className="form-wrapper">
        <div className="header-wrapper">
          <h1 className="signin-text1">Sign in</h1>
          <h2 className="signin-text2">Connect & Collect..!</h2>
        </div>
        <form className="form">
          <div className="signin-input-wrapper">
            <div className="signin-input-bg">
              <img src={image6} className="img6"></img>
              <input
                className="signin-input"
                type="text"
                placeholder="Username"
                onChange={(e) => setusername(e.target.value)}
              ></input>
            </div>
            <div className="signin-input-bg signin-input-bg1">
              <img src={image5} className="img5"></img>
              <input
                className="signin-input signin-input2"
                type="password"
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
          </div>
          <div className="forgot-div">
            <div className="tick-wrapper">
              <h5>Remember me</h5>
            </div>
            <h5 className="forgot-div-text2">Forgot Password?</h5>
          </div>
          <button
            className="signin-button"
            onClick={(e) => {
              e.preventDefault();
              signin();
            }}
          >
            Sign in
          </button>
          <div className="or">
            <div
              style={{
                height: "0px",
                width: "28%",
                border: "1px solid lightgrey",
                margin: "0px 5px 0px 0px",
              }}
            ></div>
            <h5>OR</h5>
            <div
              style={{
                height: "0px",
                width: "28%",
                border: "1px solid lightgrey",
                margin: "0px 0px 0px 5px",
              }}
            ></div>
          </div>
          <div className="sigin-google">
            <img
              src={image7}
              style={{
                width: "22px",
                height: "22px",
                paddingBottom: "6px",
                paddingRight: "3px",
              }}
            />
            <h5>Signin With Google</h5>
          </div>
          <h5 style={{ width: "62%", textAlign: "center" }}>
            Are you new to DENAURLEN?
            <span
              style={{ color: "#4b0082" }}
              onClick={() => navigate("/Signup")}
            >
              {" "}
              Sign Up
            </span>
          </h5>
        </form>
        <div className="signin-footer">
          <h4 style={{ width: "80%", marginTop: "10%", color: "#4b0082" }}>
            Privacy Policy
          </h4>
          <h4 style={{ width: "80%" }}>
            Denaurlen Copyright @ 2021, All Rights Reserved
          </h4>
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
export default Signin;
