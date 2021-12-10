import "./AudioPlayer.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const AudioPlayer: any = ({
  isPlaying,
  setIsPlaying,
  audio,
  currentTime,
  durationTime,
  setCurrentTime,
  playingTitle,
}: any) => {
  const [timeline, setTimeLine] = useState(0);

  useEffect(() => {
    console.log(currentTime);
    isNaN(durationTime)
      ? console.log("test")
      : setTimeLine((currentTime / durationTime) * 100);
  }, [currentTime]);
  const start = () => {
    audio.play();
  };

  const stop = () => {
    audio.pause();
  };

  function formatDuration(duration: any): any {
    return moment.duration(duration, "seconds");
  }

  return (
    <div className="AudioPlayer-body__background">
      <div className="AudioPlayer-body__background--wave"></div>
      <div className="AudioPlayer-body__background--timeline">
        <div
          style={{
            display: "flex",
            position: "relative",
            alignItems: "center",
            justifyContent: "flex-start",
            color: "white",
            width: `80%`,
            height: "30px",
          }}
        >
          {playingTitle}
        </div>

        <input
          onChange={(e) => {
            audio.currentTime = (+e.target.value * durationTime) / 100;
            setCurrentTime((+e.target.value * durationTime) / 100);
            setTimeLine(+e.target.value);
          }}
          value={isNaN(timeline) ? 0 : timeline}
          type="range"
          className="AudioPlayer-body--timeline"
        ></input>
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
