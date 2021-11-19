import "./TabMenu.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const TabMenu: any = ({ children, setCurrentIndex }: any) => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: "수면 힐링", content: "Tab menu ONE" },
    { name: "감정 힐링", content: "Tab menu TWO" },
    { name: "피로감 해소", content: "Tab menu THREE" },
    { name: "스트레스 해소", content: "Tab menu FOUR" },
  ];

  const selectMenuHandler = (index: any) => {
    setCurrentTab(index);
  };

  return (
    <div className="TabMenu-body__background">
      <div className="TabMenu-li-wrapper">
        {menuArr.map((ele, index) => {
          return (
            <li
              key={index}
              className={
                currentTab === index
                  ? "TabMenu-submenu TabMenu-focused"
                  : "TabMenu-submenu"
              }
              onClick={() => {
                setCurrentIndex(index);
                selectMenuHandler(index);
              }}
            >
              {ele.name}
            </li>
          );
        })}
      </div>
      <div className="TabMenu-content">
        <div className="TabMenu-block-wrapper">
          {children[0]}
          {children[1]}
          {children[2]}
        </div>
        <div className="TabMenu-block-wrapper">
          {children[3]}
          {children[4]}
          {children[5]}
        </div>
        <div className="TabMenu-block-wrapper">
          {children[6]}
          {children[7]}
          {children[8]}
        </div>
        <div className="TabMenu-block-wrapper">
          {children[9]}
          {children[10]}
          {children[11]}
        </div>
        <div className="TabMenu-block-wrapper">
          {children[12]}
          {children[13]}
          {children[14]}
        </div>
        <div className="TabMenu-block-wrapper">
          {children[15]}
          {children[16]}
          {children[17]}
        </div>
        <div className="TabMenu-block-wrapper">
          {children[18]}
          {children[19]}
          {children[20]}
        </div>
        <div className="TabMenu-block-wrapper">
          {children[21]}
          {children[22]}
          {children[23]}
        </div>
        <div className="TabMenu-block-wrapper">
          {children[24]}
          {children[25]}
          {children[26]}
        </div>
        <div className="TabMenu-block-wrapper">
          {children[27]}
          {children[28]}
          {children[29]}
        </div>
      </div>
    </div>
  );
};

export default TabMenu;
