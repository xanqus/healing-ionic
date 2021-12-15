import "./ControllerHealingVideos.css";
import { withRouter } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import { History } from "history";

interface ControllerHealingVideosProps extends RouteComponentProps {
  history: History;
}

const ControllerHealingVideos: React.FC<ControllerHealingVideosProps> = ({
  history,
}) => {
  return (
    <div className="ControllerHealingVideos-body__background">
      <div className="ControllerHealingVideos-body__sub1"></div>
      <div className="ControllerHealingVideos-body__sub2">
        <div>
          <div>
            <img src="../assets/controller/hrc-gif.gif" alt="" />
          </div>
          <div>생리신호를 측정중입니다.</div>
        </div>
      </div>
      <div className="ControllerHealingVideos-body__sub3"></div>
    </div>
  );
};

export default withRouter(ControllerHealingVideos);
