import "./Header.css";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";
import { dismissOverlay } from "@ionic/core/dist/types/utils/overlays";

const Header: any = withRouter(({ history, goHome }: any) => {
  const [style, setStyle] = useState("");

  const [modalState, setModalState] = useState(false);
  const openModal = () => {
    setModalState(true);
  };

  const closeModal = (event: any) => {
    event.preventDefault();
    setModalState(false);
  };
  return (
    <div className="Header-body__background">
      <div className="Header-body__homeButton">
        <img
          className="Header-body__homeButton--img"
          src="../assets/header/h-sub-prev.png"
          alt=""
          onClick={() => {
            if (goHome === true) {
              history.push("/main");
            } else {
              history.goBack();
            }
          }}
        />
      </div>
      <div className="Header-body__logo">
        <img
          className="Header-body__logo--img"
          src="../assets/header/h-main-title.png"
          alt=""
        />
      </div>
      <div className="Header-body__menuWrapper">
        <div className="Header-body__controller">
          <img
            className="Header-body__controller--img"
            src="../assets/header/h-main-control.png"
            alt=""
            onClick={() => {
              history.push("/controller");
            }}
          />
        </div>
        <div className="Header-body__QRButton">
          <img
            className="Header-body__QRButton--img"
            src="../assets/header/h-main-img-01.png"
            alt=""
            onClick={() => {
              history.push("/QR");
            }}
          />
        </div>
        <div className="Header-body__menuButton">
          <img
            className="Header-body__menuButton--img"
            src="../assets/header/h-main-img-00.png"
            alt=""
            onClick={() => {
              openModal();
            }}
          />
          <Modal state={modalState} closeModal={closeModal} />
        </div>
      </div>
    </div>
  );
});

export default Header;
