import './GoBackFirstButton.css';
import {useState, useEffect} from 'react';
import {executeCommand} from '../../socket/socket';
import {setCallback} from '../../socket/socket';
import {RouteComponentProps} from 'react-router';
import {withRouter} from 'react-router-dom';
import Modal from '../controller/Modal';

const GoBackFirstButton: React.FC = ({
  modalState,
  setModalState,
  openModal,
  closeModal,
  history,
  location,
  healing,
  exposure,
}: any) => {
  useEffect(() => {
    console.log(location.pathname);
    setCallback(data => {
      console.log('dataFromPC(Contorller/GOBACKFIRSTBUTTON) :', data);
    });
    history.listen((location: any, action: any) => {
      if (location.pathname !== '/controller/select') {
        //alert("close/select");
      } else {
      }
    });
  }, [location.pathname, history]);
  return (
    <div className="GoBackFirstButton-body">
      <img
        src="../assets/controller/hrc-btn-img-05.png"
        alt=""
        onClick={e => {
          e.preventDefault();
          if (exposure) {
            executeCommand('BB', 'NOCHUL_FIRST_POPUP');
          } else {
            executeCommand('BB', 'FIRST_POPUP');
          }

          openModal();
        }}
      />
      <div
        className="GoBackFirstButton-body--text"
        onClick={e => {
          e.preventDefault();
          if (exposure) {
            executeCommand('BB', 'NOCHUL_FIRST_POPUP');
          } else {
            executeCommand('BB', 'FIRST_POPUP');
          }
          openModal();
        }}
      >
        처음으로
      </div>
      <Modal
        healing
        exposure
        openModal={openModal}
        toGo={'first'}
        state={modalState}
        setModalState={setModalState}
        closeModal={closeModal}
        modalState={modalState}
      />
    </div>
  );
};

export default withRouter<any, any>(GoBackFirstButton);
