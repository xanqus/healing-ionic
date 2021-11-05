import "./Controller.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Tab1 from "./../components/controller/Tab1";
import Tab2 from "./../components/controller/Tab2";
import io from "socket.io-client";
import { withRouter } from "react-router-dom";

const Controller: React.FC = ({ history }: any) => {
  const executeCommand = (name: any, command: any) => {
    socket.emit(
      "executeCommand",
      { name: name, command: command },
      (data: any) => {
        console.log(data);
      }
    );
  };
  const socket = io("ws://15.165.121.230:7770", {
    transports: ["websocket"],
  });

  useEffect(() => {
    socket.on("executeCommand", (data) => {
      console.log("data", data);
    });
  }, []);

  const getCommand = () => {
    socket.emit("getCommand", (data: any) => {
      console.log(data);
    });
  };

  const [currentTab, setCurrentTab] = useState(0);
  const menuArr = [
    { name: "힐링콘텐츠", content: "Tab menu ONE" },
    { name: "노출경험용콘텐츠", content: "Tab menu TWO" },
  ];
  const selectMenuHandler = (index: any) => {
    setCurrentTab(index);
    if (index === 0) {
      executeCommand("page1", "healing");
    } else {
      executeCommand("page1", "nochul");
    }
  };
  return (
    <div className="Controller-body__background">
      {/*<button onClick={getCommand}>명령어 조회</button>
      <button
        onClick={() => {
          executeCommand();
        }}
      >
        명령어 실행
      </button>*/}
      <div className="Controller-body__header">
        <div>
          <img
            onClick={() => {
              history.push("/main");
            }}
            src="../assets/header/h-main-home.png"
            alt=""
          />
        </div>
        <div>리모콘</div>
        <div></div>
      </div>

      <div className="Controller-body__menu">
        {menuArr.map((ele, index) => {
          return (
            <li
              key={index}
              className={
                currentTab === index
                  ? "Controller-body__menu--item Controller-body__menu--item-focused"
                  : "Controller-body__menu--item"
              }
              onClick={() => {
                selectMenuHandler(index);
              }}
            >
              {ele.name}
            </li>
          );
        })}
      </div>
      <div className="Controller-body__mainMenu">
        {currentTab === 0 ? <Tab1 /> : <Tab2 />}
      </div>
    </div>
  );
};

export default withRouter(Controller);
