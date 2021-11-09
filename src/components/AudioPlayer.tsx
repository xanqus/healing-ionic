import "./AudioPlayer.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const AudioPlayer: any = ({
  isPlaying,
  setIsPlaying,
  audio,
  currentTime,
  durationTime,
}: any) => {
  const start = () => {
    audio.play();
  };

  const stop = () => {
    audio.pause();
  };

  function formatDuration(duration: any): any {
    return moment.duration(duration, "seconds");
  }
  console.log(formatDuration(100)._data.minutes);
  console.log(formatDuration(100)._data.seconds);
  return (
    <div className="AudioPlayer-body__background">
      <div className="AudioPlayer-body__background--wave"></div>
      <div className="AudioPlayer-body__background--timeline">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            color: "white",
            width: "80%",
            height: "30px",
          }}
        >
          조용한 시계소리
        </div>
        <div className="AudioPlayer-body--timeline"></div>
        <div className="AudioPlayer-body--timeline--time-wrapper">
          <div className="AudioPlayer-body--timeline--time-currentTime">
            {formatDuration(currentTime)._data.minutes < 10
              ? "0" + formatDuration(currentTime)._data.minutes
              : formatDuration(currentTime)._data.minutes}
            :
            {formatDuration(currentTime)._data.seconds < 10
              ? "0" + formatDuration(currentTime)._data.seconds
              : formatDuration(currentTime)._data.seconds}
          </div>
          <div className="AudioPlayer-body--timeline--time-maxTime">
            {formatDuration(durationTime)._data.minutes < 10
              ? "0" + formatDuration(durationTime)._data.minutes
              : formatDuration(durationTime)._data.minutes}
            :
            {formatDuration(durationTime)._data.seconds < 10
              ? "0" + formatDuration(durationTime)._data.seconds
              : formatDuration(durationTime)._data.seconds}
          </div>
        </div>
      </div>
      <div className="AudioPlayer-body__background--buttons">
        <div className="AudioPlayer-body__background--buttons-prev">
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src="../assets/healingSounds/h-mp-icon-1.png"
            alt=""
          />
        </div>
        <div className="AudioPlayer-body__background--buttons-playPause">
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src={
              isPlaying
                ? "../assets/healingSounds/h-mp-icon-3.png"
                : "../assets/healingSounds/h-mp-icon-4.png"
            }
            onClick={() => {
              setIsPlaying(!isPlaying);
              if (isPlaying === true) {
                stop();
              } else {
                start();
              }
            }}
            alt=""
          />
        </div>
        <div className="AudioPlayer-body__background--buttons-next">
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src="../assets/healingSounds/h-mp-icon-2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
