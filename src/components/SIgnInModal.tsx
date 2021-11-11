import "./SignInModal.css";
import styled from "styled-components";

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
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 90%;
  height: 500px;

  overflow-y: auto;
`;

const SignInModal: any = ({ state, closeModal, setModalState }: any) => {
  return state ? (
    <Container>
      <Overlay onClick={(event) => closeModal(event)}></Overlay>
      <Contents>
        <div className="Modal-body__background">
          <div className="Modal-body__background--title">
            <div></div>
            <div>회원가입</div>
            <div>
              <img
                onClick={(event) => {
                  closeModal(event);
                }}
                src="../assets/modal/h-intro-m-img-01.png"
                alt=""
              />
            </div>
          </div>
          <div className="Modal-body__background--hr-wrapper">
            <hr className="Modal-body__background--hr" />
          </div>
          <div className="Modal-body__background--inputs">
            <input placeholder="이메일" type="text" />
            <input placeholder="비밀번호입력" type="text" />
            <input placeholder="비밀번호확인" type="text" />
            <input placeholder="이름" type="text" />
            <input placeholder="핸드폰번호" type="text" />
          </div>
          <div className="Modal-body__background--submit">
            <div
              onClick={(event) => {
                closeModal(event);
              }}
            >
              {" "}
              회원가입
            </div>
          </div>
        </div>
      </Contents>
    </Container>
  ) : (
    <></>
  );
};

export default SignInModal;
