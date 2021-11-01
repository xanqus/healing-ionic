import "./AudioBlock.css";
import { Link } from "react-router-dom";

const AudioBlock: any = ({ content, imgURL, currentIndex }: any) => {
  console.log(imgURL);

  return (
    <div
      className="AudioBlock-body__background"
      onClick={() => {
        alert("clicked");
      }}
    >
      <div className="AudioBlock-body__block--imgCover">
        <img
          className="AduioBlock-body__block--img"
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
  );
};

export default AudioBlock;
