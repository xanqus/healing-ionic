import './ControllerTabMenu.css';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {executeCommand, setCallback} from '../../socket/socket';

const ControllerTabMenu: any = ({
  children,
  currentIndex,
  setCurrentIndex,
  selectMenuHandler,
  currentTab,
  setCurrentTab,
}: any) => {
  const menuArr = [
    {name: '동물', content: 'Tab menu ONE'},
    {name: '일상', content: 'Tab menu TWO'},
    {name: '음식', content: 'Tab menu THREE'},
    {name: '자연', content: 'Tab menu FOUR'},
    {name: '파티클', content: 'Tab menu FOUR'},
  ];

  useEffect(() => {
    setCallback(data => {});
  }, []);
  return (
    <div className="ControllerTabMenu-body__background">
      <div className="ControllerTabMenu-li-wrapper">
        {menuArr.map((ele, index) => {
          return (
            <li
              key={index}
              className={
                currentTab === index
                  ? 'ControllerTabMenu-submenu ControllerTabMenu-focused'
                  : 'ControllerTabMenu-submenu'
              }
              onClick={() => {
                setCurrentIndex(index); // 내용 결정
                selectMenuHandler(index); // 탭 결정
                executeCommand('BB', `TAB${index + 1}`);
              }}
            >
              {ele.name}
            </li>
          );
        })}
      </div>
      <div className="ControllerTabMenu-content">
        <div className="ControllerTabMenu-block-wrapper">
          {children[0]}
          {children[1]}
          {children[2]}
          {children[3]}
          {children[4]}
          {children[5]}
          {children[6]}
          {children[7]}
          {children[8]}
          {children[9]}
          {children[10]}
          {children[11]}
        </div>
      </div>
    </div>
  );
};

export default ControllerTabMenu;
