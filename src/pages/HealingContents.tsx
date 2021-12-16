import "./HealingContents.css";
import { withRouter } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import { History } from "history";

interface HealingContentsProps extends RouteComponentProps {
  history: History;
}

const HealingContents: React.FC<HealingContentsProps> = ({ history }) => {
  return (
    <div className="HealingContents-body__background">
      <div className="HealingContents-body__sub1"></div>
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
            history.push("/controller/signalMeasurement");
          }}
        >
          시작
        </div>
      </div>
    </div>
  );
};

export default withRouter(HealingContents);
