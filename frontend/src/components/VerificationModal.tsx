import image8 from "../images/image8.svg";
import "./VerificationModal.css";
const VerificationModal = () => {
  return (
    <div className="verify-wrapper">
      <div className="modal-wrapper">
        <img src={image8} style={{ width: "30%", height: "30%" }}></img>
        <h1>Congratulations</h1>
        <h3 style={{ color: "darkgrey" }}>You have earned 5000 U-Coins</h3>
      </div>
    </div>
  );
};
export default VerificationModal;
