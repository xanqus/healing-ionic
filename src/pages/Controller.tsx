import './Controller.css';
import {useEffect, useCallback, useState} from 'react';
import {withRouter} from 'react-router';
import {setCallback} from '../socket/socket';
import {RouteComponentProps} from 'react-router-dom';
import {LocationListener, Location, History, Action} from 'history';
import BackButton from './../components/controller/BackButton';
import Modal from './../components/controller/Modal';

interface ControllerProps extends RouteComponentProps {
  history: History;
  location: Location;
}

const Controller: React.FC<ControllerProps> = ({history, location}) => {
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
    setCallback(data => {
      if (data.command[0] === 'HEALING') {
        history.push('/controller/healing');
      } else if (data.command[0] === 'NOCHUL') {
        history.push('/controller/exposure');
      } else if (data.command[0] === 'EXIT') {
        history.push('/main');
      }
      console.log('dataFromPC(Contorller) :', data);
    });

    /*const listener: LocationListener = (location, action) => {
      if (location.pathname !== "/controller") {
        socket.close();
        alert("close");
      }
    };
    history.listen(listener);*/

    history.listen((location: Location, action: Action) => {
      if (location.pathname !== '/controller') {
        //alert("close");
      }
    });
  }, [location.pathname, history]);
  return (
    <div className="Controller-body__background">
      <div className="Controller-main__1">
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
          <Modal state={modalState} setModalState={setModalState} closeModal={closeModal} />
        </div>
      </div>
      <div className="Controller-main__2">
        <div>
          <img src="../assets/controller/hrc-img-00.png" alt="" />
        </div>
      </div>
      <div className="Controller-main__3">
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div className="Controller-main__4">
        <div
          onClick={() => {
            history.push('/controller/select');
          }}
        >
          <img src="../assets/controller/hrc-btn-img-01.png" alt="" />
          <div className="Controller-main__4--text">시작</div>
        </div>
      </div>
      {/*
      <button
        onClick={() => {
          //executeCommand("page8", "before");
        }}
      >
        test
      </button>
      <button
        onClick={() => {
          //socket.close();
          //console.log(socket);
        }}
      >
        close
      </button>*/}
    </div>
  );
};

export default withRouter(Controller);
