import './ControllerExposure1.css';
import {useState, useEffect} from 'react';
import {setCallback} from '../socket/socket';
import {withRouter} from 'react-router';
import {RouteComponentProps} from 'react-router-dom';
import {History} from 'history';
import {executeCommand} from '../socket/socket';
import Modal from '../components/Modal';
import GoBackFirstButton from '../components/controller/GoBackFirstButton';

interface ControllerExposure1Props extends RouteComponentProps {
  history: History;
}

const ControllerExposure1: React.FC<ControllerExposure1Props> = ({history, location}) => {
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
      if (data.command[0] === 'NOCHUL_FIRST_POPUP') {
        openModal();
      } else if (data.command[0] === 'NOCHUL_POPUP_YES') {
        history.push('/controller/select');
      } else if (data.command[0] === 'NOCHUL_POPUP_NO') {
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
    <div className="ControllerExposure1-body__background">
      <div className="ControllerExposure1-body__sub1">
        <GoBackFirstButton
          exposure
          modalState={modalState}
          setModalState={setModalState}
          openModal={openModal}
          closeModal={closeModal}
        />
      </div>
      <div className="ControllerExposure1-body__sub2">
        <img src="../assets/controller/hrc-img-18.png" alt="" />
      </div>
      <div className="ControllerExposure1-body__sub3">
        <div>
          <img src="../assets/controller/hrc-gif.gif" alt="" />
        </div>
        <div>
          <div>
            <div>
              ??? ???????????? ?????? ??????????????? ?????? ???????????? ????????? ??????????????? ??????????????? ????????? ?????? ????????? ????????? ?????????
              ?????? ??????????????? ?????? ????????? ????????? ??????????????????.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ControllerExposure1);
