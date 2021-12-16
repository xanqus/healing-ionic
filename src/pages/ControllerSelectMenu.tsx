import "./ControllerSelectMenu.css";
import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { setCallback } from "../socket/socket";
import { History, Location } from "history";
import Modal from "./../components/controller/Modal";

interface ControllerSelectMenuProps {
  history: History;
  location: Location;
}

const ControllerSelectMenu: React.FC<ControllerSelectMenuProps> = ({
  history,
  location,
}) => {
  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = (event: any) => {
    event.preventDefault();
    setModalState(false);
  };
  useEffect(() => {
    console.log(location.pathname);

    setCallback((data) => {
      console.log("dataFromPC(Contorlle/select) :", data);
    });
    history.listen((location: any, action: any) => {
      if (location.pathname !== "/controller/select") {
        //alert("close/select");
      } else {
      }
    });
  }, [location.pathname, history]);
  return (
    <div className="ControllerSelectMenu-body__background">
      <div className="ControllerSelectMenu__sub-1">
        <div>
          <img
            src="../assets/controller/hrc-btn-img-00.png"
            alt=""
            onClick={() => {
              openModal();
            }}
          />
          <div
            className="Controller-main__1--text"
            onClick={() => {
              openModal();
            }}
          >
            종료
          </div>
          <Modal
            state={modalState}
            setModalState={setModalState}
            closeModal={closeModal}
          />
        </div>
      </div>
      <div className="ControllerSelectMenu__sub-2">
        원하시는 메뉴를 눌러주세요.
      </div>
      <div className="ControllerSelectMenu__sub-3">
        <div className="ControllerSelectMenu__sub-3--img">
          <img src="../assets/controller/hrc-img-03.png" alt="" />
        </div>
        <button
          className="ControllerSelectMenu__sub-3--btn"
          onClick={() => {
            history.push("/controller/healing");
          }}
        >
          힐링콘텐츠
        </button>
      </div>
      <div className="ControllerSelectMenu__sub-4">
        <div className="ControllerSelectMenu__sub-4--img">
          <img src="../assets/controller/hrc-img-04.png" alt="" />
        </div>
        <button
          className="ControllerSelectMenu__sub-4--btn"
          onClick={() => {
            history.push("/controller/exposure");
          }}
        >
          노출경험용콘텐츠
        </button>
      </div>
    </div>
  );
};

export default withRouter(ControllerSelectMenu);
