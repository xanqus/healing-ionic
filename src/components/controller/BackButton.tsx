import "./BackButton.css";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router-dom";
import { History } from "history";
import { ComponentState } from "react";

interface BackButtonProps extends RouteComponentProps {
  history: History;
}

const BackButton: React.ComponentClass<ComponentState, BackButtonProps> =
  withRouter(({ history }) => {
    return <button className="BackButton-body__background">이전</button>;
  });

export default BackButton;
