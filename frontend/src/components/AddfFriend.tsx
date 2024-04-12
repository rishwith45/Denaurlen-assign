import image9 from "../images/image9.png";
import "./AddFriend.css";
import image10 from "../images/image10.png";
import emmamywatson from "../images/emmamywatson.png";
const AddFriend = () => {
  return (
    <div className="addfriend-wrpper">
      <div className="navbar">
        <ul className="navbar" style={{ paddingLeft: "0px" }}>
          <li
            style={{
              fontSize: "1.5rem",
              paddingRight: "0px",
              color: "#4b0082",
              fontWeight: "700",
            }}
          >
            DENAURLEN
          </li>
          <li style={{ fontSize: "1.2rem", fontWeight: "600" }}>
            Suggestions for you
          </li>
          <li
            style={{
              fontSize: "1.2rem",
              float: "right",
              backgroundColor: "#4b0082",
              borderRadius: "7px",
              width: "90px",
              color: "white",
              marginRight: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "700",
                marginRight: "5px",
              }}
            >
              <img src={image9}></img>5000
            </div>
          </li>
        </ul>
      </div>
      <div className="main-wrapper">
        <div className="leftpart">
          <img
            src={image10}
            style={{ width: "300px", height: "300px", marginTop: "15%" }}
          ></img>
          <h3>“Good company in a journey makes the way seems shorter.”</h3>
          <h3>- Izzak Walton</h3>
        </div>
        <div className="rightpart">
          <div className="follow-div">
            <img
              src={emmamywatson}
              style={{ width: "45px", height: "45px" }}
            ></img>
            <div style={{ marginLeft: "4px" }}>
              <h5 style={{ marginBottom: "2px", fontWeight: "300" }}>
                emma_watson
              </h5>
              <h5
                style={{
                  marginTop: "2px",
                  fontWeight: "300",
                  color: "darkgray",
                }}
              >
                Emma Watson
              </h5>
            </div>
            <h5
              style={{
                marginLeft: "50%",
                backgroundColor: "#4b0082",
                color: "white",
                borderRadius: "7px",
                width: "150px",
                height: "30px",
                textAlign: "center",
                paddingTop: "8px",
              }}
            >
              Follow
            </h5>
          </div>
          <div className="follow-div">
            <img
              src={emmamywatson}
              style={{ width: "45px", height: "45px" }}
            ></img>
            <div style={{ marginLeft: "4px" }}>
              <h5 style={{ marginBottom: "2px", fontWeight: "300" }}>
                emma_watson
              </h5>
              <h5
                style={{
                  marginTop: "2px",
                  fontWeight: "300",
                  color: "darkgray",
                }}
              >
                Emma Watson
              </h5>
            </div>
            <h5
              style={{
                marginLeft: "50%",
                backgroundColor: "#4b0082",
                color: "white",
                borderRadius: "7px",
                width: "150px",
                height: "30px",
                textAlign: "center",
                paddingTop: "8px",
              }}
            >
              Follow
            </h5>
          </div>
          <div className="follow-div">
            <img
              src={emmamywatson}
              style={{ width: "45px", height: "45px" }}
            ></img>
            <div style={{ marginLeft: "4px" }}>
              <h5 style={{ marginBottom: "2px", fontWeight: "300" }}>
                emma_watson
              </h5>
              <h5
                style={{
                  marginTop: "2px",
                  fontWeight: "300",
                  color: "darkgray",
                }}
              >
                Emma Watson
              </h5>
            </div>
            <h5
              style={{
                marginLeft: "50%",
                backgroundColor: "#4b0082",
                color: "white",
                borderRadius: "7px",
                width: "150px",
                height: "30px",
                textAlign: "center",
                paddingTop: "8px",
              }}
            >
              Follow
            </h5>
          </div>
          <div className="follow-div">
            <img
              src={emmamywatson}
              style={{ width: "45px", height: "45px" }}
            ></img>
            <div style={{ marginLeft: "4px" }}>
              <h5 style={{ marginBottom: "2px", fontWeight: "300" }}>
                emma_watson
              </h5>
              <h5
                style={{
                  marginTop: "2px",
                  fontWeight: "300",
                  color: "darkgray",
                }}
              >
                Emma Watson
              </h5>
            </div>
            <h5
              style={{
                marginLeft: "50%",
                backgroundColor: "#4b0082",
                color: "white",
                borderRadius: "7px",
                width: "150px",
                height: "30px",
                textAlign: "center",
                paddingTop: "8px",
              }}
            >
              Follow
            </h5>
          </div>
          <div className="follow-div">
            <img
              src={emmamywatson}
              style={{ width: "45px", height: "45px" }}
            ></img>
            <div style={{ marginLeft: "4px" }}>
              <h5 style={{ marginBottom: "2px", fontWeight: "300" }}>
                emma_watson
              </h5>
              <h5
                style={{
                  marginTop: "2px",
                  fontWeight: "300",
                  color: "darkgray",
                }}
              >
                Emma Watson
              </h5>
            </div>
            <h5
              style={{
                marginLeft: "50%",
                backgroundColor: "#4b0082",
                color: "white",
                borderRadius: "7px",
                width: "150px",
                height: "30px",
                textAlign: "center",
                paddingTop: "8px",
              }}
            >
              Follow
            </h5>
          </div>
          <h3
            style={{
              backgroundColor: "#4b0082",
              color: "white",
              width: "100px",
              height: "30px",
              paddingTop: "10px",
              textAlign: "center",
              borderRadius: "7px",
            }}
          >
            Next
          </h3>
          <h3>Skip</h3>
        </div>
      </div>
    </div>
  );
};
export default AddFriend;
