import LogoutButton from "../components/LogoutButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { userLoginState } from "../recoil/user";
import { withRouter } from "react-router-dom";
import "./Main.css";
import Modal from "./../components/Modal";

const Home: React.FC = ({ history }: any) => {
  const [user, setUser] = useRecoilState<any | null>(userLoginState);

  const logout = () => setUser(null);
  const [modalState, setModalState] = useState(false);
  const [style, setStyle] = useState("");
  const openModal = () => {
    setModalState(true);
  };

  const closeModal = (event: any) => {
    event.preventDefault();
    setModalState(false);
  };
  return (
    <div className="main-body__background">
      <div className="main-body__header">
        <div className="main-header__wrapper">
          <div className="main-header__homeButton">
            <img
              className="main-header__homeButton-img"
              style={{ width: "20px", height: "20px", marginLeft: "10px" }}
              src="../assets/header/h-main-home.png"
              alt=""
              onClick={(e) => {
                history.push("/main");
              }}
            />
          </div>
          <div className="main-header__logo">
            <img
              style={{
                width: "70px",
                height: "30px",
                marginLeft: "20px",
                objectFit: "contain",
              }}
              src="../assets/header/h-main-title.png"
              alt=""
            />
          </div>
          <div className="main-header__menu--wrapper">
            <div className="main-header__controlButton">
              <img
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "10px",
                  objectFit: "contain",
                }}
                className="main-header__controlButton-img"
                src="../assets/header/h-main-control.png"
                alt=""
                onClick={() => {
                  history.push("/controller");
                }}
              />
            </div>
            <div className="main-header__QRButton">
              <img
                className="main-header__QRButton-img"
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
                src="../assets/header/h-main-img-01.png"
                alt=""
                onClick={() => {
                  history.push("/QR");
                }}
              />
            </div>
            <div className="main-header__menuButton">
              <img
                className="main-header__menuButton-img"
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
                src="../assets/header/h-main-img-00.png"
                alt=""
                onClick={() => {
                  openModal();
                }}
              />
              <Modal
                state={modalState}
                setModalState={setModalState}
                closeModal={closeModal}
              />
            </div>
          </div>
        </div>
        <div className="main-header__greeting">{user.name}님! 안녕하세요.</div>
      </div>

      <div className="main-body__graph">
        <div className="main-body__graph--bpm">
          <div className="main-body__graph--bpmNumber">105</div>
          <div className="main-body__graph--bpmUnit">bpm</div>
        </div>
        <div className="main-body__graph--graph">
          <div className="single-chart">
            <svg viewBox="-2 -2 40 40" className="circular-chart orange">
              <path
                className="circle-bg"
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />

              <path
                className="circle2"
                strokeDasharray="50, 100"
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle"
                strokeDasharray="40, 100"
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">
                <tspan x="17.5" y="13.25" className="tspan1">
                  힐링 부족도
                </tspan>
                <tspan x="16.5" y="23.55" className="tspan2">
                  85
                </tspan>
                <tspan x="23.75" y="22.85" className="tspan3">
                  %
                </tspan>
              </text>
            </svg>
          </div>
        </div>
        <div className="main-body__graph--record">
          <div className="main-body__graph--nowRecord">
            <img
              style={{ width: "8px", height: "8px" }}
              src="../assets/main/h-main-img-02.png"
              alt=""
            />{" "}
            현재 이력
          </div>
          <div className="main-body__graph--pastRecord">
            <img
              style={{ width: "8px", height: "8px" }}
              src="../assets/main/h-main-img-03.png"
              alt=""
            />{" "}
            과거 이력
          </div>
        </div>
      </div>
      <div className="main-body__icons">
        <div className="main-body__icons--1">
          <img
            style={{ width: "60px", height: "60px" }}
            src="../assets/main/h-main-icon-05.png"
            alt=""
          />
          <div
            style={{ fontSize: "0.8rem", color: "#7d8ba4", marginTop: "10px" }}
          >
            스트레스
          </div>
          <div style={{ color: "#2385ff", fontWeight: "bold" }}>높음</div>
        </div>
        <div className="main-body__icons--2">
          <img
            style={{ width: "60px", height: "60px" }}
            src="../assets/main/h-main-icon-01.png"
            alt=""
          />
          <div
            style={{ fontSize: "0.8rem", color: "#7d8ba4", marginTop: "10px" }}
          >
            신체 긴장도
          </div>
          <div style={{ color: "#2385ff", fontWeight: "bold" }}>높음</div>
        </div>
        <div className="main-body__icons--3">
          <img
            style={{ width: "60px", height: "60px" }}
            src="../assets/main/h-main-icon-02.png"
            alt=""
          />
          <div
            style={{ fontSize: "0.7rem", color: "#7d8ba4", marginTop: "10px" }}
          >
            육체 피로도
          </div>
          <div style={{ color: "#2385ff", fontWeight: "bold" }}>높음</div>
        </div>
        <div className="main-body__icons--4">
          <img
            style={{ width: "60px", height: "60px" }}
            src="../assets/main/h-main-icon-03.png"
            alt=""
          />
          <div
            style={{ fontSize: "0.7rem", color: "#7d8ba4", marginTop: "10px" }}
          >
            스트레스 저항도
          </div>
          <div style={{ color: "#2385ff", fontWeight: "bold" }}>부족</div>
        </div>
      </div>
      <div className="main-body__nav">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100vw",
            height: "140px",
          }}
        >
          <div className="main-body__nav--1">
            <img
              style={{
                width: "45vw",
                height: "130px",
                objectFit: "cover",
                borderRadius: "10px",
                marginRight: "5px",
                marginBottom: "4px",
              }}
              src="../assets/main/h-main-menu-0.png"
              alt=""
              className="main-body__nav--1"
              onClick={() => {
                history.push("/healingSounds");
              }}
            />
          </div>
          <div className="main-body__nav--2">
            <img
              className="main-body__nav--2"
              style={{
                width: "45vw",
                height: "130px",
                objectFit: "cover",
                borderRadius: "10px",
                marginLeft: "5px",
                marginBottom: "4px",
              }}
              src="../assets/main/h-main-menu-1.png"
              alt=""
              onClick={() => {
                history.push("/selfDiagnosis");
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100vw",
            height: "140px",
          }}
        >
          <div className="main-body__nav--3">
            <img
              className="main-body__nav--3"
              style={{
                width: "45vw",
                height: "130px",
                objectFit: "cover",
                borderRadius: "10px",
                marginRight: "5px",
                marginTop: "4px",
              }}
              src="../assets/main/h-main-menu-2.png"
              alt=""
              onClick={() => {
                history.push("/healingVideos");
              }}
            />
          </div>
          <div className="main-body__nav--4">
            <img
              className="main-body__nav--4"
              style={{
                width: "45vw",
                height: "130px",
                objectFit: "cover",
                borderRadius: "10px",
                marginLeft: "5px",
                marginTop: "4px",
              }}
              src="../assets/main/h-main-menu-3.png"
              alt=""
              onClick={() => {
                history.push("/HistoryManagement");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Home);
