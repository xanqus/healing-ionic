import "./HealingSounds.css";
import { useState, useEffect, useMemo } from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "../components/Header";
import TabMenu from "../components/TabMenu";
import AudioBlock from "../components/AudioBlock";
import AudioPlayer from "./../components/AudioPlayer";

const HealingSounds: any = ({ history }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlaying, setCurrentPlaying] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [durationTime, setDurationTime] = useState(0);
  const audio = useMemo(() => new Audio("/"), []);
  const [clickedIndex, setClickedIndex] = useState(-1);

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

  useEffect(() => {
    history.listen((location: any, action: any) => {
      if (location.pathname !== "/healingSounds") {
        audio.pause();
      }
    });
  }, [history, audio]);

  return (
    <>
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
        <div className="HealingSounds-body__sounds--background ">
          <TabMenu setCurrentIndex={setCurrentIndex}>
            <AudioBlock
              key={1}
              index={1}
              currentIndex={currentIndex}
              content={[
                "For Perfect Wedding",
                "Emotinal Cinematice Wedding",
                "Hopeful Freedom",
                "ParisianCafe",
              ]}
              imgURL={[
                "../assets/healingSounds/h-sub-soc-1.png",
                "../assets/healingSounds/h-sub-soc-2.png",
                "../assets/healingSounds/h-sub-soc-3.png",
                "../assets/healingSounds/h-sub-soc-4.png",
              ]}
              soundURL={[
                "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingSounds/bgm_01.mp3",
                "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingSounds/bgm_02.mp3",
                "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingSounds/bgm_03.mp3",
                "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingSounds/bgm_04.mp3",
              ]}
              audio={audio}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              currentPlaying={currentPlaying}
              setCurrentPlaying={setCurrentPlaying}
              currentTime={currentTime}
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
            ></AudioBlock>

            <AudioBlock
              key={2}
              index={2}
              currentIndex={currentIndex}
              content={[
                "The Curious Kitten",
                "Christmas Village",
                "Seaside Piazza",
                "English Country Garden",
              ]}
              imgURL={[
                "../assets/healingSounds/h-sub-soc-5.png",
                "../assets/healingSounds/h-sub-soc-6.png",
                "../assets/healingSounds/h-sub-soc-7.png",
                "../assets/healingSounds/h-sub-soc-8.png",
              ]}
              soundURL={[
                "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingSounds/bgm_05.mp3",
                "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingSounds/bgm_06.mp3",
                "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingSounds/bgm_07.mp3",
                "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingSounds/bgm_08.mp3",
              ]}
              audio={audio}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              currentPlaying={currentPlaying}
              setCurrentPlaying={setCurrentPlaying}
              currentTime={currentTime}
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
            ></AudioBlock>

            <AudioBlock
              key={3}
              index={3}
              currentIndex={currentIndex}
              content={[
                "Romantic Emotional Wedding Music",
                "Is Sadness Piano 1",
                "Is Sadness Piano 2",
                "Mellow and Inspiring Piano",
              ]}
              imgURL={[
                "../assets/healingSounds/h-sub-soc-9.png",
                "../assets/healingSounds/h-sub-soc-10.png",
                "../assets/healingSounds/h-sub-soc-11.png",
                "../assets/healingSounds/h-sub-soc-12.png",
              ]}
              soundURL={[
                "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingSounds/bgm_09.mp3",
                "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingSounds/bgm_10.mp3",
                "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingSounds/bgm_11.mp3",
                "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingSounds/bgm_12.mp3",
              ]}
              audio={audio}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              currentPlaying={currentPlaying}
              setCurrentPlaying={setCurrentPlaying}
              currentTime={currentTime}
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
            ></AudioBlock>

            <AudioBlock
              key={4}
              index={4}
              currentIndex={currentIndex}
              content={[
                "Ambient Beauty",
                "Be Meditation",
                "This is Meditation",
                "Documentary Nature",
              ]}
              imgURL={[
                "../assets/healingSounds/h-sub-soc-13.png",
                "../assets/healingSounds/h-sub-soc-14.png",
                "../assets/healingSounds/h-sub-soc-15.png",
                "../assets/healingSounds/h-sub-soc-16.png",
              ]}
              soundURL={[
                "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingSounds/bgm_13.mp3",
                "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingSounds/bgm_14.mp3",
                "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingSounds/bgm_15.mp3",
                "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingSounds/bgm_16.mp3",
              ]}
              audio={audio}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              currentPlaying={currentPlaying}
              setCurrentPlaying={setCurrentPlaying}
              currentTime={currentTime}
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
            ></AudioBlock>
            <AudioBlock
              key={5}
              index={5}
              currentIndex={currentIndex}
              content={[
                "Meditation",
                "Meditation Music",
                "sunset",
                "waterfall",
              ]}
              imgURL={[
                "../assets/healingSounds/h-sub-soc-17.png",
                "../assets/healingSounds/h-sub-soc-18.png",
                "../assets/healingSounds/h-sub-soc-19.png",
                "../assets/healingSounds/h-sub-soc-20.png",
              ]}
              soundURL={[
                "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingSounds/bgm_17.mp3",
                "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingSounds/bgm_18.mp3",
                "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingSounds/bgm_19.mp3",
                "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingSounds/bgm_20.mp3",
              ]}
              audio={audio}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              currentPlaying={currentPlaying}
              setCurrentPlaying={setCurrentPlaying}
              currentTime={currentTime}
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
            ></AudioBlock>
            <AudioBlock
              key={6}
              index={6}
              currentIndex={currentIndex}
              content={["rain", "forest", "space", "ocean"]}
              imgURL={[
                "../assets/healingSounds/h-sub-soc-21.png",
                "../assets/healingSounds/h-sub-soc-22.png",
                "../assets/healingSounds/h-sub-soc-23.png",
                "../assets/healingSounds/h-sub-soc-24.png",
              ]}
              soundURL={[
                "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingSounds/bgm_21.mp3",
                "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingSounds/bgm_22.mp3",
                "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingSounds/bgm_23.mp3",
                "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingSounds/bgm_24.mp3",
              ]}
              audio={audio}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              currentPlaying={currentPlaying}
              setCurrentPlaying={setCurrentPlaying}
              currentTime={currentTime}
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
            ></AudioBlock>

            <AudioBlock
              key={7}
              index={7}
              currentIndex={currentIndex}
              content={["animal", "flower", null, null]}
              imgURL={[
                "../assets/healingSounds/h-sub-soc-25.png",
                "../assets/healingSounds/h-sub-soc-26.png",
                null,
                null,
              ]}
              soundURL={[
                "../assets/healingSounds/sounds/fx_1_01.mp3",
                "../assets/healingSounds/sounds/fx_1_02.mp3",
                null,
                null,
              ]}
              audio={audio}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              currentPlaying={currentPlaying}
              setCurrentPlaying={setCurrentPlaying}
              currentTime={currentTime}
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
            ></AudioBlock>
            <AudioBlock
              key={8}
              index={8}
              currentIndex={currentIndex}
              content={[
                "natural",
                "Thera Waves Binaural Meditation",
                null,
                null,
              ]}
              imgURL={[
                "../assets/healingSounds/h-sub-soc-27.png",
                "../assets/healingSounds/h-sub-soc-28.png",
                null,
                null,
              ]}
              soundURL={[
                "../assets/healingSounds/sounds/fx_1_03.mp3",
                "../assets/healingSounds/sounds/fx_1_04.mp3",
                null,
                null,
              ]}
              audio={audio}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              currentPlaying={currentPlaying}
              setCurrentPlaying={setCurrentPlaying}
              currentTime={currentTime}
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
            ></AudioBlock>
            <AudioBlock
              key={9}
              index={9}
              currentIndex={currentIndex}
              content={[
                "Relax Ambient Calm Background",
                "Relax Background",
                null,
                null,
              ]}
              imgURL={[
                "../assets/healingSounds/h-sub-soc-29.png",
                "../assets/healingSounds/h-sub-soc-30.png",
                null,
                null,
              ]}
              soundURL={[
                "../assets/healingSounds/sounds/fx_1_05.mp3",
                "../assets/healingSounds/sounds/fx_1_06.mp3",
                null,
                null,
              ]}
              audio={audio}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              currentPlaying={currentPlaying}
              setCurrentPlaying={setCurrentPlaying}
              currentTime={currentTime}
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
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
            setCurrentTime={setCurrentTime}
          />
        </div>
      </div>
    </>
  );
};

export default withRouter(HealingSounds);
