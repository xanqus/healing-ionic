import './SignalMeasurement.css';
import {useEffect} from 'react';
import {withRouter} from 'react-router';
import {setCallback} from '../socket/socket';

const SignalMeasurement: React.FC = ({history, location}: any) => {
  useEffect(() => {
    console.log(location.pathname);
    setCallback(data => {
      if (data.command[0] === 'SIGNEND' && data.name === 'AA') {
        history.push('/controller/recentHistory');
      } else if (data.command) {
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

    history.listen((location: Location, action: any) => {
      if (location.pathname !== '/signalMeasurement') {
      }
    });
  }, [location.pathname, history]);
  return (
    <div className="SignalMeasurement-body__background">
      <div className="SignalMeasurement-body__sub1"></div>
      <div className="SignalMeasurement-body__sub2">
        <div>
          <div>
            <img src="../assets/controller/hrc-gif.gif" alt="" />
          </div>
          <div>생리신호를 측정중입니다.</div>
        </div>
      </div>
      <div className="SignalMeasurement-body__sub3">
        <div>
          <img src="../assets/controller/hrc-git-02.gif" alt="" />
        </div>
      </div>
      <div className="SignalMeasurement-body__sub4"></div>
    </div>
  );
};

export default withRouter(SignalMeasurement);
