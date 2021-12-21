import './ControllerHealingVideoDetail.css';
import {useState, useEffect} from 'react';
import {withRouter} from 'react-router';
import {executeCommand, setCallback} from '../socket/socket';
import Modal from '../components/controller/Modal';
import {RouteComponentProps} from 'react-router-dom';

const ControllerHealingVideoDetail: React.FC = ({location, history}: any) => {
  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    //event.preventDefault();
    setModalState(false);
  };

  useEffect(() => {
    console.log(location.pathname);
    setCallback(data => {
      if (data.command[0] === 'VIDEO_END') {
        history.push('/controller/ControllerSurvey');
      } else if (data.command[0] === 'BEFORE_POPUP') {
        openModal();
      } else if (data.command[0] === 'BEFORE_POPUP_YES') {
        history.push('/controller/healingVideos');
      } else if (data.command[0] === 'BEFORE_POPUP_NO') {
        closeModal();
      }
      console.log('dataFromPC(Contorller) :', data);
    });
  }, []);

  return (
    <div className="ControllerHealingVideoDetail-body__background">
      <div className="ControllerHealingVideoDetail-body__sub1">
        <div className="ControllerHealingVideoDetail-BeforeButton__body">
          <img
            src="../assets/controller/hrc-btn-img-04.png"
            alt=""
            onClick={() => {
              executeCommand('BB', 'BEFORE_POPUP');
              openModal();
            }}
          />
          <div
            className="ControllerHealingVideoDetail-BeforeButton__body--text"
            onClick={() => {
              executeCommand('BB', 'BEFORE_POPUP');
              openModal();
            }}
          >
            이전
          </div>
          <Modal toGo={'before'} state={modalState} setModalState={setModalState} closeModal={closeModal} />
        </div>
      </div>
      <div className="ControllerHealingVideoDetail-body__sub2">
        <div>
          <div>
            <img src="../assets/controller/hrc-gif.gif" alt="" />
          </div>
          <div>[{location.state.category}]카테고리 힐링콘텐츠를 재생중입니다.</div>
        </div>
      </div>
      <div className="ControllerHealingVideoDetail-body__sub3">
        <img src={location.state.imgURL} alt="" />
      </div>
      <div className="ControllerHealingVideoDetail-body__sub4">
        <div>{location.state.content}</div>
      </div>
    </div>
  );
};

export default withRouter(ControllerHealingVideoDetail);
