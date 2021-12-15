import "./Controller.css";
import { useEffect, useCallback } from "react";
import { withRouter } from "react-router";
import { setCallback } from "../socket/socket";
import { RouteComponentProps } from "react-router-dom";
import { LocationListener, Location, History, Action } from "history";
import BackButton from "./../components/controller/BackButton";

interface ControllerProps extends RouteComponentProps {
  history: History;
  location: Location;
}

const Controller: React.FC<ControllerProps> = ({ history, location }) => {
  useEffect(() => {
    console.log(location.pathname);
    setCallback((data) => {
      if (data.command[0] === "page1" && data.name === "page1") {
        history.push("/controller/select");
      } else if (data.command) {
      }
      console.log("dataFromPC(Contorller) :", data);
    });

    /*const listener: LocationListener = (location, action) => {
      if (location.pathname !== "/controller") {
        socket.close();
        alert("close");
      }
    };
    history.listen(listener);*/

    history.listen((location: Location, action: Action) => {
      if (location.pathname !== "/controller") {
        //alert("close");
      }
    });
  }, [location.pathname, history]);
  return (
    <div className="Controller-body__background">
      <div className="Controller-main__1">
        <div>
          <img src="../assets/controller/hrc-btn-img-00.png" alt="" />
          <div className="Controller-main__1--text">종료</div>
        </div>
      </div>
      <div className="Controller-main__2">
        <div>
          <img src="../assets/controller/hrc-img-00.png" alt="" />
        </div>
      </div>
      <div className="Controller-main__3">
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div className="Controller-main__4">
        <div
          onClick={() => {
            history.push("/controller/select");
          }}
        >
          <img src="../assets/controller/hrc-btn-img-01.png" alt="" />
          <div className="Controller-main__4--text">시작</div>
        </div>
      </div>
      {/*
      <button
        onClick={() => {
          //executeCommand("page8", "before");
        }}
      >
        test
      </button>
      <button
        onClick={() => {
          //socket.close();
          //console.log(socket);
        }}
      >
        close
      </button>*/}
    </div>
  );
};

export default withRouter(Controller);
