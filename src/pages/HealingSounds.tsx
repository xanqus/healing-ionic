import "./HealingSounds.css";
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import TabMenu from "../components/TabMenu";
import AudioBlock from "../components/AudioBlock";
import AudioPlayer from "./../components/AudioPlayer";

const HealingSounds: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlaying, setCurrentPlaying] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [durationTime, setDurationTime] = useState(0);
  const audio = useMemo(() => new Audio("/"), []);

  useEffect(() => {
    return audio.pause();
  }, [audio]);

  const setAudioTime = () => {
    setCurrentTime(audio.currentTime);
  };

  const setAudioData = () => {
    setDurationTime(audio.duration);
  };

  audio.addEventListener("loadeddata", setAudioData);

  audio.addEventListener("timeupdate", setAudioTime);

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
            key={1}
            index={1}
            currentIndex={currentIndex}
            content={{
              0: "조용한 시계소리",
              1: "조용한 시계소리 2",
              2: "조용한 시계소리 3",
              3: "조용한 시계소리 4",
            }}
            imgURL={{
              0: "../assets/healingSounds/h-sub-soc-1.png",
              1: "../assets/healingSounds/h-sub-soc-1.png",
              2: "../assets/healingSounds/h-sub-soc-1.png",
              3: "../assets/healingSounds/h-sub-soc-1.png",
            }}
            soundURL={{ 0: "../assets/healingSounds/sounds/fx_1_01.mp3" }}
            audio={audio}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentPlaying={currentPlaying}
            setCurrentPlaying={setCurrentPlaying}
          ></AudioBlock>
          <AudioBlock
            key={2}
            index={2}
            currentIndex={currentIndex}
            content={{
              0: "동화 속 자장가",
              1: "동화 속 자장가 2",
              2: "동화 속 자장가3",
              3: "동화 속 자장가 4",
            }}
            imgURL={{
              0: "../assets/healingSounds/h-sub-soc-2.png",
              2: "../assets/healingSounds/h-sub-soc-2.png",
              1: "../assets/healingSounds/h-sub-soc-2.png",
              3: "../assets/healingSounds/h-sub-soc-2.png",
            }}
            soundURL={{ 0: "../assets/healingSounds/sounds/fx_1_02.mp3" }}
            audio={audio}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentPlaying={currentPlaying}
            setCurrentPlaying={setCurrentPlaying}
          ></AudioBlock>
          <AudioBlock
            key={3}
            index={3}
            currentIndex={currentIndex}
            content={{
              0: "자장가 힐링",
              1: "자장가 힐링 2",
              2: "자장가 힐링3",
              3: "자장가 힐링 4",
            }}
            imgURL={{
              0: "../assets/healingSounds/h-sub-soc-3.png",
              1: "../assets/healingSounds/h-sub-soc-3.png",
              2: "../assets/healingSounds/h-sub-soc-3.png",
              3: "../assets/healingSounds/h-sub-soc-3.png",
            }}
            soundURL={{ 0: "../assets/healingSounds/sounds/fx_1_03.mp3" }}
            audio={audio}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentPlaying={currentPlaying}
            setCurrentPlaying={setCurrentPlaying}
          ></AudioBlock>
          <AudioBlock
            key={4}
            index={4}
            currentIndex={currentIndex}
            content={{
              0: "조용한 시계소리",
              1: "조용한 시계소리 2",
              2: "조용한 시계소리3",
              3: "조용한 시계소리 4",
            }}
            imgURL={{
              0: "../assets/healingSounds/h-sub-soc-4.png",
              1: "../assets/healingSounds/h-sub-soc-4.png",
              2: "../assets/healingSounds/h-sub-soc-4.png",
              3: "../assets/healingSounds/h-sub-soc-4.png",
            }}
            soundURL={{ 0: "../assets/healingSounds/sounds/fx_1_04.mp3" }}
            audio={audio}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentPlaying={currentPlaying}
            setCurrentPlaying={setCurrentPlaying}
          ></AudioBlock>
          <AudioBlock
            key={5}
            index={5}
            currentIndex={currentIndex}
            content={{
              0: "동화 속 자장가",
              1: "동화 속 자장가 2",
              2: "동화 속 자장가 3",
              3: "동화 속 자장가 4",
            }}
            imgURL={{
              0: "../assets/healingSounds/h-sub-soc-5.png",
              1: "../assets/healingSounds/h-sub-soc-5.png",
              2: "../assets/healingSounds/h-sub-soc-5.png",
              3: "../assets/healingSounds/h-sub-soc-5.png",
            }}
            soundURL={{ 0: "../assets/healingSounds/sounds/fx_1_05.mp3" }}
            audio={audio}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentPlaying={currentPlaying}
            setCurrentPlaying={setCurrentPlaying}
          ></AudioBlock>
          <AudioBlock
            key={6}
            index={6}
            currentIndex={currentIndex}
            content={{
              0: "자장가 힐링",
              1: "자장가 힐링 2",
              2: "자장가 힐링 3",
              3: "자장가 힐링 4",
            }}
            imgURL={{
              0: "../assets/healingSounds/h-sub-soc-6.png",
              1: "../assets/healingSounds/h-sub-soc-6.png",
              2: "../assets/healingSounds/h-sub-soc-6.png",
              3: "../assets/healingSounds/h-sub-soc-6.png",
            }}
            soundURL={{ 0: "../assets/healingSounds/sounds/fx_1_06.mp3" }}
            audio={audio}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentPlaying={currentPlaying}
            setCurrentPlaying={setCurrentPlaying}
          ></AudioBlock>
          <AudioBlock
            key={7}
            index={7}
            currentIndex={currentIndex}
            content={{
              0: "조용한 시계소리",
              1: "조용한 시계소리 2",
              2: "조용한 시계소리 3",
              3: "조용한 시계소리 4",
            }}
            imgURL={{
              0: "../assets/healingSounds/h-sub-soc-7.png",
              1: "../assets/healingSounds/h-sub-soc-7.png",
              2: "../assets/healingSounds/h-sub-soc-7.png",
              3: "../assets/healingSounds/h-sub-soc-7.png",
            }}
            soundURL={{ 0: "../assets/healingSounds/sounds/fx_1_06.mp3" }}
            audio={audio}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentPlaying={currentPlaying}
            setCurrentPlaying={setCurrentPlaying}
          ></AudioBlock>
          <AudioBlock
            key={8}
            index={8}
            currentIndex={currentIndex}
            content={{
              0: "동화 속 자장가",
              1: "동화 속 자장가 2",
              2: "동화 속 자장가 3",
              3: "동화 속 자장가 4",
            }}
            imgURL={{
              0: "../assets/healingSounds/h-sub-soc-8.png",
              1: "../assets/healingSounds/h-sub-soc-8.png",
              2: "../assets/healingSounds/h-sub-soc-8.png",
              3: "../assets/healingSounds/h-sub-soc-8.png",
            }}
            soundURL={{ 0: "../assets/healingSounds/sounds/fx_1_06.mp3" }}
            audio={audio}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentPlaying={currentPlaying}
            setCurrentPlaying={setCurrentPlaying}
          ></AudioBlock>
          <AudioBlock
            key={9}
            index={9}
            currentIndex={currentIndex}
            content={{
              0: "자장가 힐링",
              1: "자장가 힐링 2",
              2: "자장가 힐링",
              3: "자장가 힐링 2",
            }}
            imgURL={{
              0: "../assets/healingSounds/h-sub-soc-9.png",
              1: "../assets/healingSounds/h-sub-soc-9.png",
              2: "../assets/healingSounds/h-sub-soc-9.png",
              3: "../assets/healingSounds/h-sub-soc-9.png",
            }}
            soundURL={{ 0: "../assets/healingSounds/sounds/fx_1_06.mp3" }}
            audio={audio}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentPlaying={currentPlaying}
            setCurrentPlaying={setCurrentPlaying}
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
        <AudioPlayer
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audio={audio}
          currentTime={currentTime}
          durationTime={durationTime}
        />
      </div>
    </div>
  );
};

export default HealingSounds;
