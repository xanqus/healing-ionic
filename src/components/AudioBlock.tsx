import "./AudioBlock.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const AudioBlock: any = ({
  index,
  content,
  imgURL,
  currentIndex,
  soundURL,
  audio,
  isPlaying,
  setIsPlaying,
  currentPlaying,
  setCurrentPlaying,
}: any) => {
  const firstStart = () => {
    audio.src = soundURL[currentIndex];
    setCurrentPlaying(index);
    console.log("su", soundURL[currentIndex]);
    audio.play();
  };
  const start = () => {
    setCurrentPlaying(index);
    audio.play();
  };
  const stop = () => {
    audio.pause();
    audio.currentTime = 0;
    audio.src = "/";
  };
  const pause = () => {
    audio.pause();
  };
  return (
    <div className="AudioBlock-body__background">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "95%",
          height: "95%",
          borderRadius: "12px",
        }}
        onClick={(e) => {
          e.preventDefault();
          setCurrentPlaying(currentIndex);
          if (isPlaying === false) {
            setIsPlaying(true);
            firstStart();
          } else {
            if (index === currentPlaying) {
              setIsPlaying(false);
              stop();
            } else {
              firstStart();
            }
          }
        }}
      >
        <div className="AudioBlock-body__block--imgCover">
          <img
            className="AudioBlock-body__block--img"
            src={imgURL[currentIndex]}
            alt=""
          />
        </div>
        <div className="AudioBlock-body__background--status">
          <div className="AudioBlock-body__background--status-title">
            {content[currentIndex]}
          </div>
          <div className="AudioBlock-body__background--status-status">
            <div className="AudioBlock-body__background--status-playButton">
              <img
                style={{ width: "20px", height: "12px", objectFit: "contain" }}
                src="../assets/healingSounds/h-sub-icon-01.png"
                alt=""
              />
            </div>
            <div className="AudioBlock-body__background--status-currentTime">
              0:00
            </div>
            <div className="AudioBlock-body__background--status-heart">
              <img
                style={{ width: "20px", height: "12px", objectFit: "contain" }}
                src="../assets/healingSounds/h-sub-icon-02.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioBlock;
