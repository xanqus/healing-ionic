import './ControllerExposure3.css';
import {withRouter} from 'react-router';
import {RouteComponentProps} from 'react-router-dom';
import {History} from 'history';
import {executeCommand} from '../socket/socket';
import Modal from '../components/Modal';
import GoBackFirstButton from '../components/controller/GoBackFirstButton';

interface ControllerExposure3Props extends RouteComponentProps {
  history: History;
}

const ControllerExposure3: React.FC<ControllerExposure3Props> = ({history}) => {
  return (
    <div className="ControllerExposure3-body__background">
      <div className="ControllerExposure3-body__sub1">
        <GoBackFirstButton />
      </div>
      <div className="ControllerExposure3-body__sub2">
        <img src="../assets/controller/hrc-img-23.png" alt="" />
      </div>
      <div className="ControllerExposure3-body__sub3">
        <div>
          <img src="../assets/controller/hrc-gif.gif" alt="" />
        </div>
        <div>
          <div>
            <div>해당 안내 멘트를 듣고 따라 해 주시기 바랍니다.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ControllerExposure3);
