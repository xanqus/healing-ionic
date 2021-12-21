import './TabMenuVideo.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';

const TabMenuVideo: any = ({children, setCurrentIndex}: any) => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    {name: '동물', content: 'Tab menu ONE'},
    {name: '일상', content: 'Tab menu TWO'},
    {name: '음식', content: 'Tab menu THREE'},
    {name: '자연', content: 'Tab menu FOUR'},
    {name: '파티클', content: 'Tab menu FOUR'},
  ];

  const selectMenuHandler = (index: any) => {
    setCurrentTab(index);
  };

  return (
    <div className="TabMenuVideo-body__background">
      <div className="TabMenuVideo-li-wrapper">
        {menuArr.map((ele, index) => {
          return (
            <li
              key={index}
              className={currentTab === index ? 'TabMenuVideo-submenu TabMenuVideo-focused' : 'TabMenuVideo-submenu'}
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
      <div className="TabMenuVideo-content">
        <div className="TabMenuVideo-body__search">
          <div className="TabMenuVideo-body__search--searchingBar">
            <div className="TabMenuVideo-body__search--searchingBar-search">
              <input className="TabMenuVideo-body__search--searchingBar-searchInput" type="text" />
            </div>
            <div className="TabMenuVideo-body__search--searchingBar-searchIMG">
              <img
                className="TabMenuVideo-body__search--searchingBar-searchIMG-img"
                src="../assets/healingSounds/h-sub-img-01.png"
                alt=""
                onClick={() => {
                  alert('검색');
                }}
              />
            </div>
          </div>
        </div>
        <div className="TabMenuVideo-block-wrapper">
          {children[0]}
          {children[1]}
        </div>
        <div className="TabMenuVideo-block-wrapper">
          {children[2]}
          {children[3]}
        </div>
        <div className="TabMenuVideo-block-wrapper">
          {children[4]}
          {children[5]}
        </div>
        <div className="TabMenuVideo-block-wrapper">
          {children[6]}
          {children[7]}
        </div>
        <div className="TabMenuVideo-block-wrapper">
          {children[8]}
          {children[9]}
        </div>
        <div className="TabMenuVideo-block-wrapper">
          {children[10]}
          {children[11]}
        </div>
        <div className="TabMenuVideo-block-wrapper">
          {children[12]}
          {children[13]}
        </div>
        <div className="TabMenuVideo-block-wrapper">
          {children[14]}
          {children[15]}
        </div>
        <div className="TabMenuVideo-block-wrapper">
          {children[16]}
          {children[17]}
        </div>
        <div className="TabMenuVideo-block-wrapper">
          {children[18]}
          {children[19]}
        </div>
        <div className="TabMenuVideo-block-wrapper">
          {children[20]}
          {children[21]}
        </div>
        <div className="TabMenuVideo-block-wrapper">
          {children[22]}
          {children[23]}
        </div>
        <div className="TabMenuVideo-block-wrapper">
          {children[24]}
          {children[25]}
        </div>
        <div className="TabMenuVideo-block-wrapper">
          {children[26]}
          {children[27]}
        </div>
        <div className="TabMenuVideo-block-wrapper">
          {children[28]}
          {children[29]}
        </div>
        <div className="TabMenuVideo-block-wrapper">
          {children[30]}
          {children[31]}
        </div>
        <div className="TabMenuVideo-block-wrapper">
          {children[32]}
          {children[33]}
        </div>
        <div className="TabMenuVideo-block-wrapper">
          {children[34]}
          {children[35]}
        </div>
        <div className="TabMenuVideo-block-wrapper">
          {children[36]}
          {children[37]}
        </div>
        <div className="TabMenuVideo-block-wrapper">
          {children[38]}
          {children[39]}
        </div>
      </div>
    </div>
  );
};

export default TabMenuVideo;
