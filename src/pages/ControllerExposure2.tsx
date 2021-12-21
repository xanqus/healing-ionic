import './ControllerExposure2.css';
import {withRouter} from 'react-router';
import {RouteComponentProps} from 'react-router-dom';
import {History} from 'history';
import {executeCommand} from '../socket/socket';
import Modal from '../components/Modal';
import GoBackFirstButton from '../components/controller/GoBackFirstButton';

interface ControllerExposure2Props extends RouteComponentProps {
  history: History;
}

const ControllerExposure2: React.FC<ControllerExposure2Props> = ({history}) => {
  return (
    <div className="ControllerExposure2-body__background">
      <div className="ControllerExposure2-body__sub1">
        <GoBackFirstButton />
      </div>
      <div className="ControllerExposure2-body__sub2">
        <img src="../assets/controller/hrc-img-22.png" alt="" />
      </div>
      <div className="ControllerExposure2-body__sub3">
        <div>
          <img src="../assets/controller/hrc-gif.gif" alt="" />
        </div>
        <div>
          <div>
            <div>본 콘텐츠는 복식호흡, 근육이완, 노출경험 상기, 복식호흡, 근육이완 순서로 실행됩니다.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ControllerExposure2);
