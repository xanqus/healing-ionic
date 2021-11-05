import "./HealingSounds.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import TabMenu from "../components/TabMenu";
import AudioBlock from "../components/AudioBlock";
import AudioPlayer from "./../components/AudioPlayer";

const HealingSounds: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="HealingSounds-body__background">
      <Header />
      <div className="HealingSounds-body__search">
        <div
          style={{ backgroundColor: "red" }}
          className="HealingSounds-body__search--category"
        >
          <select
            name=""
            className="HealingSounds-body__search--category-select"
          >
            <option value="">수면 힐링</option>
            <option value="">감정 힐링</option>
            <option value="">피로감 해소</option>
            <option value="">스트레스 해소</option>
          </select>
        </div>
        <div className="HealingSounds-body__search--searchingBar">
          <div className="HealingSounds-body__search--searchingBar-search">
            <input
              className="HealingSounds-body__search--searchingBar-searchInput"
              type="text"
            />
          </div>
          <div className="HealingSounds-body__search--searchingBar-searchIMG">
            <img
              className="HealingSounds-body__search--searchingBar-searchIMG-img"
              src="../assets/healingSounds/h-sub-img-01.png"
              alt=""
              onClick={() => {
                alert("검색");
              }}
            />
          </div>
        </div>
      </div>
      <div className="HealingSounds-body__sounds--background">
        <TabMenu setCurrentIndex={setCurrentIndex}>
          <AudioBlock
            currentIndex={currentIndex}
            content={{ 0: "조용한 시계소리", 1: "조용한 시계소리 2" }}
            imgURL={{ 0: "../assets/healingSounds/h-sub-soc-1.png" }}
            soundURL={{}}
          ></AudioBlock>
          <AudioBlock
            currentIndex={currentIndex}
            content={{ 0: "동화 속 자장가", 1: "동화 속 자장가 2" }}
            imgURL={{ 0: "../assets/healingSounds/h-sub-soc-2.png" }}
          ></AudioBlock>
          <AudioBlock
            currentIndex={currentIndex}
            content={{ 0: "자장가 힐링", 1: "자장가 힐링 2" }}
            imgURL={{ 0: "../assets/healingSounds/h-sub-soc-3.png" }}
          ></AudioBlock>
          <AudioBlock
            currentIndex={currentIndex}
            content={{ 0: "조용한 시계소리", 1: "조용한 시계소리 2" }}
            imgURL={{ 0: "../assets/healingSounds/h-sub-soc-4.png" }}
          ></AudioBlock>
          <AudioBlock
            currentIndex={currentIndex}
            content={{ 0: "동화 속 자장가", 1: "동화 속 자장가 2" }}
            imgURL={{ 0: "../assets/healingSounds/h-sub-soc-5.png" }}
          ></AudioBlock>
          <AudioBlock
            currentIndex={currentIndex}
            content={{ 0: "자장가 힐링", 1: "자장가 힐링 2" }}
            imgURL={{ 0: "../assets/healingSounds/h-sub-soc-6.png" }}
          ></AudioBlock>
          <AudioBlock
            currentIndex={currentIndex}
            content={{ 0: "조용한 시계소리", 1: "조용한 시계소리 2" }}
            imgURL={{ 0: "../assets/healingSounds/h-sub-soc-7.png" }}
          ></AudioBlock>
          <AudioBlock
            currentIndex={currentIndex}
            content={{ 0: "동화 속 자장가", 1: "동화 속 자장가 2" }}
            imgURL={{ 0: "../assets/healingSounds/h-sub-soc-8.png" }}
          ></AudioBlock>
          <AudioBlock
            currentIndex={currentIndex}
            content={{ 0: "자장가 힐링", 1: "자장가 힐링 2" }}
            imgURL={{ 0: "../assets/healingSounds/h-sub-soc-9.png" }}
          ></AudioBlock>
        </TabMenu>
        {/*<div className="HealingSounds-body__sounds--BlockWrapper">
          <AudioBlock imgURL={"hi"} />
          <AudioBlock />
          <AudioBlock />
        </div>
        <div className="HealingSounds-body__sounds--BlockWrapper"></div>
            <div className="HealingSounds-body__sounds--BlockWrapper"></div>*/}
      </div>
      <div className="HealingSounds-body__sounds--ControlBar">
        <AudioPlayer />
      </div>
    </div>
  );
};

export default HealingSounds;
