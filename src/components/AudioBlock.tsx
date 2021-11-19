import "./AudioBlock.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import moment from "moment";
import { Prompt } from "react-router";

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
  currentTime,
  clickedIndex,
  setClickedIndex,
}: any) => {
  function formatDuration(duration: any): any {
    return moment.duration(duration, "seconds");
  }
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

  useEffect(() => {
    return () => setIsPlaying(false); // cleanup function을 이용
  }, [setIsPlaying]);
  if (imgURL[currentIndex] === null) {
    return <></>;
  } else {
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
            setClickedIndex(index);
            e.preventDefault();
            setCurrentPlaying(currentIndex);
            audio.src = soundURL[currentIndex];
            start();
            setIsPlaying(true);
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
                  style={{
                    width: "20px",
                    height: "12px",
                    objectFit: "contain",
                  }}
                  src="../assets/healingSounds/h-sub-icon-01.png"
                  alt=""
                />
              </div>
              <div className="AudioBlock-body__background--status-currentTime">
                {clickedIndex === index
                  ? (formatDuration(currentTime)._data.minutes < 10
                      ? "0" + formatDuration(currentTime)._data.minutes
                      : formatDuration(currentTime)._data.minutes) +
                    ":" +
                    (formatDuration(currentTime)._data.seconds < 10
                      ? "0" + formatDuration(currentTime)._data.seconds
                      : formatDuration(currentTime)._data.seconds)
                  : "00:00"}
              </div>
              <div className="AudioBlock-body__background--status-heart">
                <img
                  style={{
                    width: "20px",
                    height: "12px",
                    objectFit: "contain",
                  }}
                  src="../assets/healingSounds/h-sub-icon-02.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AudioBlock;
