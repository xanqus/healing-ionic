import "./RecentHistory.css";
import { withRouter } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import { History } from "history";

interface RecentHistoryProps extends RouteComponentProps {
  history: History;
}

const RecentHistory: React.FC<RecentHistoryProps> = ({ history }) => {
  return (
    <div className="RecentHistory-body__background">
      <div className="RecentHistory-body__sub1"></div>
      <div className="RecentHistory-body__sub2"></div>
      <div className="RecentHistory-body__sub3">
        <div></div>
      </div>
      <div className="RecentHistory-body__sub4">
        <div></div>
      </div>
      <div className="RecentHistory-body__sub5">
        <div
          onClick={() => {
            history.push("/controller/healingVideos");
          }}
        >
          다음
        </div>
      </div>
    </div>
  );
};

export default withRouter(RecentHistory);
