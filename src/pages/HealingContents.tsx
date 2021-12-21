import './HealingContents.css';
import {useState, useEffect} from 'react';
import {setCallback} from '../socket/socket';
import {withRouter} from 'react-router';
import {RouteComponentProps} from 'react-router-dom';
import {History} from 'history';
import {executeCommand} from '../socket/socket';
import Modal from '../components/Modal';
import GoBackFirstButton from '../components/controller/GoBackFirstButton';

interface HealingContentsProps extends RouteComponentProps {
  history: History;
}

const HealingContents: React.FC<HealingContentsProps> = ({history, location}) => {
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
      if (data.command[0] === 'HEALING_START') {
        history.push('/controller/signalMeasurement');
      } else if (data.command[0] === 'FIRST_POPUP_YES') {
        history.push('/controller/select');
      } else if (data.command[0] === 'FIRST_POPUP_NO') {
        closeModal();
      }
      console.log('dataFromPC(Contorlle/select) :', data);
    });
    history.listen((location: any, action: any) => {
      if (location.pathname !== '/controller/select') {
        //alert("close/select");
      } else {
      }
    });
  }, [location.pathname, history]);
  return (
    <div className="HealingContents-body__background">
      <div className="HealingContents-body__sub1">
        <GoBackFirstButton
          healing="healing"
          modalState={modalState}
          setModalState={setModalState}
          openModal={openModal}
          closeModal={closeModal}
        />
      </div>
      <div className="HealingContents-body__sub2">
        <div>
          <img src="../assets/controller/hrc-img-06.png" alt="" />
        </div>
        <div>
          <div>콘텐츠를 실행하시려면</div>
          <div>
            <span>'시작'</span>을 눌러주세요
          </div>
        </div>
      </div>
      <div className="HealingContents-body__sub3">
        <div
          onClick={() => {
            executeCommand('BB', 'HEALING_START');
            history.push('/controller/signalMeasurement');
          }}
        >
          시작
        </div>
      </div>
    </div>
  );
};

export default withRouter(HealingContents);
