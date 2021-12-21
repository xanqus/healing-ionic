import './ExposureContents.css';
import {useEffect} from 'react';
import {setCallback} from '../socket/socket';
import {withRouter} from 'react-router';
import {RouteComponentProps} from 'react-router-dom';
import {History} from 'history';
import {executeCommand} from '../socket/socket';
import Modal from '../components/Modal';
import GoBackFirstButton from '../components/controller/GoBackFirstButton';

interface ExposureContentsProps extends RouteComponentProps {
  history: History;
}

const ExposureContents: React.FC<ExposureContentsProps> = ({history, location}) => {
  useEffect(() => {
    console.log(location.pathname);

    setCallback(data => {
      if (data.command[0] === 'HEALING') {
        history.push('/controller/healing');
      } else if (data.command[0] === 'NOCHUL_START') {
        history.push('/controller/exposure1');
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
    <div className="ExposureContents-body__background">
      <div className="ExposureContents-body__sub1"></div>
      <div className="ExposureContents-body__sub2">
        <div>
          <img src="../assets/controller/hrc-img-17.png" alt="" />
        </div>
        <div>
          <div>콘텐츠를 실행하시려면</div>
          <div>
            <span>'시작'</span>을 눌러주세요
          </div>
        </div>
      </div>
      <div className="ExposureContents-body__sub3">
        <div
          onClick={() => {
            executeCommand('BB', 'NOCHUL_START');
            history.push('/controller/exposure1');
          }}
        >
          시작
        </div>
      </div>
    </div>
  );
};

export default withRouter(ExposureContents);
