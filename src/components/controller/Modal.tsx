import "./Modal.css";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Contents = styled.div`
  position: absolute;
  width: 80%;
  height: 200px;
  overflow-y: auto;
  background-color: white;
  border-radius: 10px;
`;

const Modal: any = withRouter(
  ({ state, closeModal, setModalState, history }: any) => {
    document.addEventListener("backbutton", (e) => {
      closeModal(e);
    });
    return state ? (
      <Container>
        <Overlay
          onClick={(event) => {
            closeModal(event);
          }}
        ></Overlay>
        <Contents onClick={(event) => {}}>
          <div className="ControllerModal-body">
            <div className="ControllerModal-body__img">
              <div>
                <img src="../assets/controller/hrc-img-icon.png" alt="" />
                <span> 알림</span>
              </div>
            </div>
            <div className="ControllerModal-body__message">
              종료하시겠습니까?
            </div>
            <div className="ControllerModal-body__btn--wrapper">
              <div>
                <button
                  onClick={() => {
                    history.push("/main");
                  }}
                >
                  예
                </button>
              </div>
              <div>
                <button
                  onClick={(event) => {
                    closeModal(event);
                  }}
                >
                  아니오
                </button>
              </div>
            </div>
          </div>
        </Contents>
      </Container>
    ) : (
      <></>
    );
  }
);

export default Modal;
