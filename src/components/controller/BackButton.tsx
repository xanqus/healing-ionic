import "./BackButton.css";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router-dom";

const BackButton = withRouter(({ history }) => {
  return <button className="BackButton-body__background"></button>;
});

export default BackButton;
