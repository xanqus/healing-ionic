import "./TabMenu.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const TabMenu: any = ({ children, setCurrentIndex }: any) => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: "Tab1", content: "Tab menu ONE" },
    { name: "Tab2", content: "Tab menu TWO" },
    { name: "Tab3", content: "Tab menu THREE" },
    { name: "Tab4", content: "Tab menu FOUR" },
  ];

  const selectMenuHandler = (index: any) => {
    setCurrentTab(index);
  };

  return (
    <div className="TabMenu-body__background">
      <div className="li-wrapper">
        {menuArr.map((ele, index) => {
          return (
            <li
              key={index}
              className={currentTab === index ? "submenu focused" : "submenu"}
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
      <div className="content">
        <div className="block-wrapper">
          {children[0]}
          {children[1]}
          {children[2]}
        </div>
        <div className="block-wrapper">
          {children[3]}
          {children[4]}
          {children[5]}
        </div>
        <div className="block-wrapper">
          {children[6]}
          {children[7]}
          {children[8]}
        </div>
      </div>
    </div>
  );
};

export default TabMenu;
