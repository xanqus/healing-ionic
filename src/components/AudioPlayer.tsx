import "./AudioPlayer.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const AudioPlayer: React.FC = () => {
  return (
    <div className="AudioPlayer-body__background">
      <div className="AudioPlayer-body__background--wave"></div>
      <div className="AudioPlayer-body__background--timeline">
        <div className="AudioPlayer-body--timeline"></div>
        <div className="AudioPlayer-body--timeline--time-wrapper">
          <div className="AudioPlayer-body--timeline--time-currentTime">
            00:30
          </div>
          <div className="AudioPlayer-body--timeline--time-maxTime">01:30</div>
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
            src="../assets/healingSounds/h-mp-icon-3.png"
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
