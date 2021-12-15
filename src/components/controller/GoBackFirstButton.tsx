import "./GoBackFirstButton.css";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router-dom";

const GoBackFirstButton: React.FC = () => {
  return <button className="GoBackFirstButton-body__background"></button>;
};

export default withRouter(GoBackFirstButton);
