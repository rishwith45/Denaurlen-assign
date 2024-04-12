import "./WelcomePage.css";
import image1 from "../images/image1.svg";
import image2 from "../images/image2.svg";
import image3 from "../images/image3.svg";
import { useNavigate } from "react-router-dom";
const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="Box-wrapper">
      <h2 className="text1">Welcome to DENAURLEN</h2>
      <h2 className="text2">Gamify with Smart Savvy Social Network</h2>
      <div className="Box">
        <div className="outer-div">
          <div className="inner-div">
            <h1 className="inner-text inner-text1">1</h1>
            <h1 className="inner-text">Activity to infinity</h1>
          </div>
          <img src={image2}></img>
        </div>
        <div className="outer-div">
          <div className="inner-div">
            <h1 className="inner-text inner-text1">2</h1>
            <h1 className="inner-text">One Platform Multiple Persona</h1>
          </div>
          <img src={image3}></img>
        </div>
        <div className="outer-div">
          <div className="inner-div">
            <h1 className="inner-text inner-text1">3</h1>
            <h1 className="inner-text">Real you, rewards for you!</h1>
          </div>
          <img src={image1}></img>
        </div>
      </div>
      <button className="getstarted" onClick={() => navigate("/Signup")}>
        Get Started
      </button>
    </div>
  );
};
export default WelcomePage;
