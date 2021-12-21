import './Modal.css';
import {useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import styled from 'styled-components';
import {useRecoilState} from 'recoil';
import {executeCommand, setCallback} from '../../socket/socket';

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
  ({exposure, state, closeModal, openModal, setModalState, history, toGo, location}: any) => {
    document.addEventListener('backbutton', e => {
      closeModal(e);
    });
    useEffect(() => {
      console.log(location.pathname);

      setCallback(data => {
        console.log('dataFromPC(Contorlle/select) :', data);
      });
      history.listen((location: any, action: any) => {
        if (location.pathname !== '/controller/select') {
          //alert("close/select");
        } else {
        }
      });
    }, [location.pathname, history]);
    return state ? (
      <Container>
        <Overlay
          onClick={event => {
            closeModal(event);
          }}
        ></Overlay>
        <Contents onClick={event => {}}>
          <div className="ControllerModal-body">
            <div className="ControllerModal-body__img">
              <div>
                <img src="../assets/controller/hrc-img-icon.png" alt="" />
                <span> 알림</span>
              </div>
            </div>
            <div className="ControllerModal-body__message">
              {toGo === 'first'
                ? '처음으로 가시겠습니까?'
                : toGo === 'before'
                ? '이전으로 가시겠습니까?'
                : '종료하시겠습니까?'}
            </div>
            <div className="ControllerModal-body__btn--wrapper">
              <div>
                <button
                  onClick={() => {
                    if (toGo === 'first') {
                      if (exposure) {
                        executeCommand('BB', 'NOCHUL_POPUP_YES');
                      } else {
                        executeCommand('BB', 'FIRST_POPUP_YES');
                      }

                      history.push('/controller/select');
                    } else if (toGo === 'before') {
                      executeCommand('BB', 'BEFORE_POPUP_YES');
                      history.goBack();
                    } else {
                      executeCommand('BB', 'EXIT');
                      history.push('/main');
                    }
                  }}
                >
                  예
                </button>
              </div>
              <div>
                <button
                  onClick={event => {
                    if (toGo === 'first') {
                      if (exposure) {
                        executeCommand('BB', 'NOCHUL_POPUP_NO');
                      } else {
                        executeCommand('BB', 'FIRST_POPUP_NO');
                      }
                    } else if (toGo === 'before') {
                      executeCommand('BB', 'BEFORE_POPUP_NO');
                    }

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
  },
);

export default Modal;
