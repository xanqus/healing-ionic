import "./SignalMeasurement.css";
import { withRouter } from "react-router";

const SignalMeasurement: React.FC = () => {
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
