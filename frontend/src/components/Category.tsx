import "./Category.css";
import image9 from "../images/image9.png";
import imagec1 from "../categoryimages/imagec1.svg";
import imagec2 from "../categoryimages/imagec2.png";
import imagec3 from "../categoryimages/imagec3.png";
import imagec4 from "../categoryimages/imagec4.png";
import imagec5 from "../categoryimages/imagec5.png";
import imagec6 from "../categoryimages/imagec6.png";
import imagec7 from "../categoryimages/imagec7.png";
import imagec8 from "../categoryimages/imagec8.png";
import imagec9 from "../categoryimages/imagec9.png";
import imagec10 from "../categoryimages/imagec10.png";
import imagec11 from "../categoryimages/imagec11.png";
import imagec12 from "../categoryimages/imagec12.png";
import imagec13 from "../categoryimages/imagec13.png";
import imagec14 from "../categoryimages/imagec14.png";
import imagec15 from "../categoryimages/imagec15.png";
import imagec16 from "../categoryimages/imagec16.png";
import imagec17 from "../categoryimages/imagec17.svg";
import imagec18 from "../categoryimages/imagec18.png";
import imagec19 from "../categoryimages/imagec19.png";
import imagec20 from "../categoryimages/imagec20.png";
import imagec21 from "../categoryimages/imagec21.png";
import imagec22 from "../categoryimages/imagec22.png";
import imagec23 from "../categoryimages/imagec23.png";
import imagec24 from "../categoryimages/imagec24.svg";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Category: React.FC = () => {
  const [cateArray, setCateArray] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const navigate = useNavigate();
  const next = () => {
    const maxe = Math.max(...cateArray);
    if (maxe < 10) {
      return alert("select atleast 10 Categories");
    }
    navigate("/AddFriend");
  };
  return (
    <div className="category-wrapper">
      <div className="top-bar">
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
          <li style={{ fontSize: "1.2rem", fontWeight: "600" }}>Category</li>
          <li
            style={{
              fontSize: "1.2rem",
              float: "right",
              backgroundColor: "#4b0082",
              borderRadius: "20px",
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
      <div className="cate-header">Choose your top @ 10 categories</div>
      <div className="cat-box">
        <>
          {!cateArray[0] ? (
            <div
              className="card"
              onClick={() => {
                setCateArray((prevArray) => {
                  const newArray = [...prevArray];
                  const maxElement = Math.max(...newArray);
                  newArray[0] = maxElement + 1;
                  return newArray;
                });
              }}
            >
              <img src={imagec1} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Books</h5>
            </div>
          ) : (
            <div className="card1">
              <h5
                style={{
                  backgroundColor: "#4b0082",
                  color: "white",
                  borderRadius: "25px",
                  height: "10%",
                  width: "15%",
                  textAlign: "center",
                  marginLeft: "80%",
                  marginBottom: "2%",
                  marginTop: "6%",
                }}
              >
                {cateArray[0]}
              </h5>
              <img src={imagec1} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Books</h5>
            </div>
          )}

          {!cateArray[1] ? (
            <div
              className="card"
              onClick={() => {
                setCateArray((prevArray) => {
                  const newArray = [...prevArray];
                  const maxElement = Math.max(...cateArray);
                  newArray[1] = maxElement + 1;
                  return newArray;
                });
              }}
            >
              <img src={imagec2} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Cars</h5>
            </div>
          ) : (
            <div className="card1">
              <h5
                style={{
                  backgroundColor: "#4b0082",
                  color: "white",
                  borderRadius: "25px",
                  height: "10%",
                  width: "15%",
                  textAlign: "center",
                  marginLeft: "80%",
                  marginBottom: "2%",
                  marginTop: "6%",
                }}
              >
                {cateArray[1]}
              </h5>
              <img src={imagec2} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Cars</h5>
            </div>
          )}
          {!cateArray[2] ? (
            <div
              className="card"
              onClick={() => {
                setCateArray((prevArray) => {
                  const newArray = [...prevArray];
                  const maxElement = Math.max(...cateArray);
                  newArray[2] = maxElement + 1;
                  return newArray;
                });
              }}
            >
              <img src={imagec3} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>
                Celebreties
              </h5>
            </div>
          ) : (
            <div className="card1">
              <h5
                style={{
                  backgroundColor: "#4b0082",
                  color: "white",
                  borderRadius: "25px",
                  height: "10%",
                  width: "15%",
                  textAlign: "center",
                  marginLeft: "80%",
                  marginBottom: "2%",
                  marginTop: "6%",
                }}
              >
                {cateArray[2]}
              </h5>
              <img src={imagec3} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>
                Celebreties
              </h5>
            </div>
          )}
          {!cateArray[3] ? (
            <div
              className="card"
              onClick={() => {
                setCateArray((prevArray) => {
                  const newArray = [...prevArray];
                  const maxElement = Math.max(...cateArray);
                  newArray[3] = maxElement + 1;
                  return newArray;
                });
              }}
            >
              <img src={imagec4} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Colors</h5>
            </div>
          ) : (
            <div className="card1">
              <h5
                style={{
                  backgroundColor: "#4b0082",
                  color: "white",
                  borderRadius: "25px",
                  height: "10%",
                  width: "15%",
                  textAlign: "center",
                  marginLeft: "80%",
                  marginBottom: "2%",
                  marginTop: "6%",
                }}
              >
                {cateArray[3]}
              </h5>
              <img src={imagec4} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Colors</h5>
            </div>
          )}
          {!cateArray[4] ? (
            <div
              className="card"
              onClick={() => {
                setCateArray((prevArray) => {
                  const newArray = [...prevArray];
                  const maxElement = Math.max(...cateArray);
                  newArray[4] = maxElement + 1;
                  return newArray;
                });
              }}
            >
              <img src={imagec5} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Games</h5>
            </div>
          ) : (
            <div className="card1">
              <h5
                style={{
                  backgroundColor: "#4b0082",
                  color: "white",
                  borderRadius: "25px",
                  height: "10%",
                  width: "15%",
                  textAlign: "center",
                  marginLeft: "80%",
                  marginBottom: "2%",
                  marginTop: "6%",
                }}
              >
                {cateArray[4]}
              </h5>
              <img src={imagec5} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Games</h5>
            </div>
          )}
          {!cateArray[5] ? (
            <div
              className="card"
              onClick={() => {
                setCateArray((prevArray) => {
                  const newArray = [...prevArray];
                  const maxElement = Math.max(...cateArray);
                  newArray[5] = maxElement + 1;
                  return newArray;
                });
              }}
            >
              <img src={imagec6} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Health</h5>
            </div>
          ) : (
            <div className="card1">
              <h5
                style={{
                  backgroundColor: "#4b0082",
                  color: "white",
                  borderRadius: "25px",
                  height: "10%",
                  width: "15%",
                  textAlign: "center",
                  marginLeft: "80%",
                  marginBottom: "2%",
                  marginTop: "6%",
                }}
              >
                {cateArray[5]}
              </h5>
              <img src={imagec6} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Health</h5>
            </div>
          )}
          {!cateArray[6] ? (
            <div
              className="card"
              onClick={() => {
                setCateArray((prevArray) => {
                  const newArray = [...prevArray];
                  const maxElement = Math.max(...cateArray);
                  newArray[6] = maxElement + 1;
                  return newArray;
                });
              }}
            >
              <img src={imagec7} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Food</h5>
            </div>
          ) : (
            <div className="card1">
              <h5
                style={{
                  backgroundColor: "#4b0082",
                  color: "white",
                  borderRadius: "25px",
                  height: "10%",
                  width: "15%",
                  textAlign: "center",
                  marginLeft: "80%",
                  marginBottom: "2%",
                  marginTop: "6%",
                }}
              >
                {cateArray[6]}
              </h5>
              <img src={imagec7} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Foods</h5>
            </div>
          )}
          {!cateArray[7] ? (
            <div
              className="card"
              onClick={() => {
                setCateArray((prevArray) => {
                  const newArray = [...prevArray];
                  const maxElement = Math.max(...cateArray);
                  newArray[7] = maxElement + 1;
                  return newArray;
                });
              }}
            >
              <img src={imagec8} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Memes</h5>
            </div>
          ) : (
            <div className="card1">
              <h5
                style={{
                  backgroundColor: "#4b0082",
                  color: "white",
                  borderRadius: "25px",
                  height: "10%",
                  width: "15%",
                  textAlign: "center",
                  marginLeft: "80%",
                  marginBottom: "2%",
                  marginTop: "6%",
                }}
              >
                {cateArray[7]}
              </h5>
              <img src={imagec8} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Memes</h5>
            </div>
          )}
          {!cateArray[8] ? (
            <div
              className="card"
              onClick={() => {
                setCateArray((prevArray) => {
                  const newArray = [...prevArray];
                  const maxElement = Math.max(...cateArray);
                  newArray[8] = maxElement + 1;
                  return newArray;
                });
              }}
            >
              <img src={imagec9} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>
                Role Models
              </h5>
            </div>
          ) : (
            <div className="card1">
              <h5
                style={{
                  backgroundColor: "#4b0082",
                  color: "white",
                  borderRadius: "25px",
                  height: "10%",
                  width: "15%",
                  textAlign: "center",
                  marginLeft: "80%",
                  marginBottom: "2%",
                  marginTop: "6%",
                }}
              >
                {cateArray[8]}
              </h5>
              <img src={imagec9} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>
                Role Models
              </h5>
            </div>
          )}
          {!cateArray[9] ? (
            <div
              className="card"
              onClick={() => {
                setCateArray((prevArray) => {
                  const newArray = [...prevArray];
                  const maxElement = Math.max(...cateArray);
                  newArray[9] = maxElement + 1;
                  return newArray;
                });
              }}
            >
              <img src={imagec10} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Photos</h5>
            </div>
          ) : (
            <div className="card1">
              <h5
                style={{
                  backgroundColor: "#4b0082",
                  color: "white",
                  borderRadius: "25px",
                  height: "10%",
                  width: "15%",
                  textAlign: "center",
                  marginLeft: "80%",
                  marginBottom: "2%",
                  marginTop: "6%",
                }}
              >
                {cateArray[9]}
              </h5>
              <img src={imagec10} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Photos</h5>
            </div>
          )}
          {!cateArray[10] ? (
            <div
              className="card"
              onClick={() => {
                setCateArray((prevArray) => {
                  const newArray = [...prevArray];
                  const maxElement = Math.max(...cateArray);
                  newArray[10] = maxElement + 1;
                  return newArray;
                });
              }}
            >
              <img src={imagec11} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Movies</h5>
            </div>
          ) : (
            <div className="card1">
              <h5
                style={{
                  backgroundColor: "#4b0082",
                  color: "white",
                  borderRadius: "25px",
                  height: "10%",
                  width: "15%",
                  textAlign: "center",
                  marginLeft: "80%",
                  marginBottom: "2%",
                  marginTop: "6%",
                }}
              >
                {cateArray[10]}
              </h5>
              <img src={imagec11} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Movies</h5>
            </div>
          )}
          {!cateArray[11] ? (
            <div
              className="card"
              onClick={() => {
                setCateArray((prevArray) => {
                  const newArray = [...prevArray];
                  const maxElement = Math.max(...cateArray);
                  newArray[11] = maxElement + 1;
                  return newArray;
                });
              }}
            >
              <img src={imagec12} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>
                Interested
              </h5>
            </div>
          ) : (
            <div className="card1">
              <h5
                style={{
                  backgroundColor: "#4b0082",
                  color: "white",
                  borderRadius: "25px",
                  height: "10%",
                  width: "15%",
                  textAlign: "center",
                  marginLeft: "80%",
                  marginBottom: "2%",
                  marginTop: "6%",
                }}
              >
                {cateArray[11]}
              </h5>
              <img src={imagec12} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>
                Interested
              </h5>
            </div>
          )}

          {!cateArray[12] ? (
            <div
              className="card"
              onClick={() => {
                setCateArray((prevArray) => {
                  const newArray = [...prevArray];
                  const maxElement = Math.max(...cateArray);
                  newArray[12] = maxElement + 1;
                  return newArray;
                });
              }}
            >
              <img src={imagec13} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Species</h5>
            </div>
          ) : (
            <div className="card1">
              <h5
                style={{
                  backgroundColor: "#4b0082",
                  color: "white",
                  borderRadius: "25px",
                  height: "10%",
                  width: "15%",
                  textAlign: "center",
                  marginLeft: "80%",
                  marginBottom: "2%",
                  marginTop: "6%",
                }}
              >
                {cateArray[12]}
              </h5>
              <img src={imagec13} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Species</h5>
            </div>
          )}
          {!cateArray[13] ? (
            <div
              className="card"
              onClick={() => {
                setCateArray((prevArray) => {
                  const newArray = [...prevArray];
                  const maxElement = Math.max(...cateArray);
                  newArray[13] = maxElement + 1;
                  return newArray;
                });
              }}
            >
              <img src={imagec14} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Fashion</h5>
            </div>
          ) : (
            <div className="card1">
              <h5
                style={{
                  backgroundColor: "#4b0082",
                  color: "white",
                  borderRadius: "25px",
                  height: "10%",
                  width: "15%",
                  textAlign: "center",
                  marginLeft: "80%",
                  marginBottom: "2%",
                  marginTop: "6%",
                }}
              >
                {cateArray[13]}
              </h5>
              <img src={imagec14} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Fashion</h5>
            </div>
          )}
          {!cateArray[14] ? (
            <div
              className="card"
              onClick={() => {
                setCateArray((prevArray) => {
                  const newArray = [...prevArray];
                  const maxElement = Math.max(...cateArray);
                  newArray[14] = maxElement + 1;
                  return newArray;
                });
              }}
            >
              <img src={imagec15} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Quotes</h5>
            </div>
          ) : (
            <div className="card1">
              <h5
                style={{
                  backgroundColor: "#4b0082",
                  color: "white",
                  borderRadius: "25px",
                  height: "10%",
                  width: "15%",
                  textAlign: "center",
                  marginLeft: "80%",
                  marginBottom: "2%",
                  marginTop: "6%",
                }}
              >
                {cateArray[14]}
              </h5>
              <img src={imagec15} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Quotes</h5>
            </div>
          )}
          {!cateArray[15] ? (
            <div
              className="card"
              onClick={() => {
                setCateArray((prevArray) => {
                  const newArray = [...prevArray];
                  const maxElement = Math.max(...cateArray);
                  newArray[15] = maxElement + 1;
                  return newArray;
                });
              }}
            >
              <img src={imagec16} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Bikes</h5>
            </div>
          ) : (
            <div className="card1">
              <h5
                style={{
                  backgroundColor: "#4b0082",
                  color: "white",
                  borderRadius: "25px",
                  height: "10%",
                  width: "15%",
                  textAlign: "center",
                  marginLeft: "80%",
                  marginBottom: "2%",
                  marginTop: "6%",
                }}
              >
                {cateArray[15]}
              </h5>
              <img src={imagec16} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Bikes</h5>
            </div>
          )}
          {!cateArray[16] ? (
            <div
              className="card"
              onClick={() => {
                setCateArray((prevArray) => {
                  const newArray = [...prevArray];
                  const maxElement = Math.max(...cateArray);
                  newArray[16] = maxElement + 1;
                  return newArray;
                });
              }}
            >
              <img src={imagec17} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Brands</h5>
            </div>
          ) : (
            <div className="card1">
              <h5
                style={{
                  backgroundColor: "#4b0082",
                  color: "white",
                  borderRadius: "25px",
                  height: "10%",
                  width: "15%",
                  textAlign: "center",
                  marginLeft: "80%",
                  marginBottom: "2%",
                  marginTop: "6%",
                }}
              >
                {cateArray[16]}
              </h5>
              <img src={imagec17} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Brands</h5>
            </div>
          )}

          {!cateArray[17] ? (
            <div
              className="card"
              onClick={() => {
                setCateArray((prevArray) => {
                  const newArray = [...prevArray];
                  const maxElement = Math.max(...cateArray);
                  newArray[17] = maxElement + 1;
                  return newArray;
                });
              }}
            >
              <img src={imagec18} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Music</h5>
            </div>
          ) : (
            <div className="card1">
              <h5
                style={{
                  backgroundColor: "#4b0082",
                  color: "white",
                  borderRadius: "25px",
                  height: "10%",
                  width: "15%",
                  textAlign: "center",
                  marginLeft: "80%",
                  marginBottom: "2%",
                  marginTop: "6%",
                }}
              >
                {cateArray[17]}
              </h5>
              <img src={imagec18} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Music</h5>
            </div>
          )}
          {!cateArray[18] ? (
            <div
              className="card"
              onClick={() => {
                setCateArray((prevArray) => {
                  const newArray = [...prevArray];
                  const maxElement = Math.max(...cateArray);
                  newArray[18] = maxElement + 1;
                  return newArray;
                });
              }}
            >
              <img src={imagec19} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>sports</h5>
            </div>
          ) : (
            <div className="card1">
              <h5
                style={{
                  backgroundColor: "#4b0082",
                  color: "white",
                  borderRadius: "25px",
                  height: "10%",
                  width: "15%",
                  textAlign: "center",
                  marginLeft: "80%",
                  marginBottom: "2%",
                  marginTop: "6%",
                }}
              >
                {cateArray[18]}
              </h5>
              <img src={imagec19} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Sports</h5>
            </div>
          )}
          {!cateArray[19] ? (
            <div
              className="card"
              onClick={() => {
                setCateArray((prevArray) => {
                  const newArray = [...prevArray];
                  const maxElement = Math.max(...cateArray);
                  newArray[19] = maxElement + 1;
                  return newArray;
                });
              }}
            >
              <img src={imagec20} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>
                Technology
              </h5>
            </div>
          ) : (
            <div className="card1">
              <h5
                style={{
                  backgroundColor: "#4b0082",
                  color: "white",
                  borderRadius: "25px",
                  height: "10%",
                  width: "15%",
                  textAlign: "center",
                  marginLeft: "80%",
                  marginBottom: "2%",
                  marginTop: "6%",
                }}
              >
                {cateArray[19]}
              </h5>
              <img src={imagec20} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>
                Technology
              </h5>
            </div>
          )}
          {!cateArray[20] ? (
            <div
              className="card"
              onClick={() => {
                setCateArray((prevArray) => {
                  const newArray = [...prevArray];
                  const maxElement = Math.max(...cateArray);
                  newArray[20] = maxElement + 1;
                  return newArray;
                });
              }}
            >
              <img src={imagec21} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>
                Web Series
              </h5>
            </div>
          ) : (
            <div className="card1">
              <h5
                style={{
                  backgroundColor: "#4b0082",
                  color: "white",
                  borderRadius: "25px",
                  height: "10%",
                  width: "15%",
                  textAlign: "center",
                  marginLeft: "80%",
                  marginBottom: "2%",
                  marginTop: "6%",
                }}
              >
                {cateArray[20]}
              </h5>
              <img src={imagec21} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>
                Web Series
              </h5>
            </div>
          )}
          {!cateArray[21] ? (
            <div
              className="card"
              onClick={() => {
                setCateArray((prevArray) => {
                  const newArray = [...prevArray];
                  const maxElement = Math.max(...cateArray);
                  newArray[21] = maxElement + 1;
                  return newArray;
                });
              }}
            >
              <img src={imagec22} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>
                Art/Design
              </h5>
            </div>
          ) : (
            <div className="card1">
              <h5
                style={{
                  backgroundColor: "#4b0082",
                  color: "white",
                  borderRadius: "25px",
                  height: "10%",
                  width: "15%",
                  textAlign: "center",
                  marginLeft: "80%",
                  marginBottom: "2%",
                  marginTop: "6%",
                }}
              >
                {cateArray[21]}
              </h5>
              <img src={imagec22} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>
                Art?Design
              </h5>
            </div>
          )}
          {!cateArray[22] ? (
            <div
              className="card"
              onClick={() => {
                setCateArray((prevArray) => {
                  const newArray = [...prevArray];
                  const maxElement = Math.max(...cateArray);
                  newArray[22] = maxElement + 1;
                  return newArray;
                });
              }}
            >
              <img src={imagec23} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Videos</h5>
            </div>
          ) : (
            <div className="card1">
              <h5
                style={{
                  backgroundColor: "#4b0082",
                  color: "white",
                  borderRadius: "25px",
                  height: "10%",
                  width: "15%",
                  textAlign: "center",
                  marginLeft: "80%",
                  marginBottom: "2%",
                  marginTop: "6%",
                }}
              >
                {cateArray[22]}
              </h5>
              <img src={imagec23} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Videos</h5>
            </div>
          )}
          {!cateArray[23] ? (
            <div
              className="card"
              onClick={() => {
                setCateArray((prevArray) => {
                  const newArray = [...prevArray];
                  const maxElement = Math.max(...cateArray);
                  newArray[23] = maxElement + 1;
                  return newArray;
                });
              }}
            >
              <img src={imagec24} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Travel</h5>
            </div>
          ) : (
            <div className="card1">
              <h5
                style={{
                  backgroundColor: "#4b0082",
                  color: "white",
                  borderRadius: "25px",
                  height: "10%",
                  width: "15%",
                  textAlign: "center",
                  marginLeft: "80%",
                  marginBottom: "2%",
                  marginTop: "6%",
                }}
              >
                {cateArray[23]}
              </h5>
              <img src={imagec24} className="imgc"></img>
              <h5 style={{ marginTop: "15px", fontWeight: "300" }}>Travel</h5>
            </div>
          )}
        </>
      </div>
      <button className="next-button" onClick={next}>
        Next
      </button>
    </div>
  );
};
export default Category;
