import "./Modal.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { userLoginState } from "./../recoil/user";

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
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Contents = styled.div`
  position: absolute;
  width: 90%;
  height: 95%;
`;

const Modal: any = ({ state, closeModal, setModalState, history }: any) => {
  const [user, setUser] = useRecoilState<any | null>(userLoginState);
  const logout = () => setUser(null);
  return state ? (
    <Container>
      <Overlay onClick={(event) => closeModal(event)}></Overlay>
      <Contents onClick={(event) => closeModal(event)}>
        <div className="Modal-body__btn">
          <Link to="/main">
            <img src="../assets/modal/h-qm-0.png" alt="" />
          </Link>
          <div className="Modal-body__message">메인으로</div>
        </div>
        <div className="Modal-body__btn">
          <Link to="/healingSounds">
            <img src="../assets/modal/h-qm-1.png" alt="" />
          </Link>
          <div className="Modal-body__message">힐링음원</div>
        </div>
        <div className="Modal-body__btn">
          <Link to="/selfDiagnosis">
            <img src="../assets/modal/h-qm-2.png" alt="" />
          </Link>
          <div className="Modal-body__message">자가진단</div>
        </div>
        <div className="Modal-body__btn">
          <Link to="/healingVideos">
            <img src="../assets/modal/h-qm-3.png" alt="" />
          </Link>
          <div className="Modal-body__message">힐링영상</div>
        </div>
        <div className="Modal-body__btn">
          <Link to="/historyManagement">
            <img src="../assets/modal/h-qm-4.png" alt="" />
          </Link>
          <div className="Modal-body__message">이력관리</div>
        </div>
        <div className="Modal-body__btn">
          <Link to="/">
            <img
              onClick={() => {
                logout();
              }}
              src="../assets/modal/h-qm-6.png"
              alt=""
            />
          </Link>
          <div className="Modal-body__message">로그아웃</div>
        </div>
        <div className="Modal-body__btn">
          <img
            onClick={() => {
              setModalState(false);
            }}
            src="../assets/modal/h-qm-5.png"
            alt=""
          />
        </div>
      </Contents>
    </Container>
  ) : (
    <></>
  );
};

export default Modal;
