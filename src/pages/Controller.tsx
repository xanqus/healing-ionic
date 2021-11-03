import "./Controller.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Tab1 from "./../components/controller/Tab1";
import Tab2 from "./../components/controller/Tab2";

const Controller: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const menuArr = [
    { name: "힐링콘텐츠", content: "Tab menu ONE" },
    { name: "노출경험용콘텐츠", content: "Tab menu TWO" },
  ];
  const selectMenuHandler = (index: any) => {
    setCurrentTab(index);
  };
  return (
    <div className="Controller-body__background">
      <button
        onClick={() => {
          const getData = async () => {
            const command: any =
              "SERVER executeCommand {name: :name, command: ‘:start’";
            const data = await axios.get(
              "http://15.165.121.230:3000/api/users/1",
              command
            );
            console.log(data);
          };
          getData();
        }}
      >
        테스트
      </button>
      <div className="Controller-body__header">리모콘</div>

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

export default Controller;
