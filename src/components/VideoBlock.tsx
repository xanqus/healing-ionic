import "./VideoBlock.css";
import { Link } from "react-router-dom";

const VideoBlock: any = ({
  content,
  imgURL,
  currentIndex,
  videoLink,
  index,
}: any) => {
  console.log(videoLink[currentIndex]);
  return (
    <div className="VideoBlock-body__background">
      <Link
        className="videoLink"
        to={{
          pathname: "/healingVideoPlayer",
          state: {
            videoLink: videoLink[currentIndex],
          },
        }}
      >
        <div className="VideoBlock-body__block--wrapper" onClick={() => {}}>
          <div className="VideoBlock-body__block--imgCover">
            <img
              className="VideoBlock-body__block--img"
              src={imgURL[currentIndex]}
              alt=""
            />
          </div>
          <div className="VideoBlock-body__background--status">
            <div className="VideoBlock-body__background--status-title">
              {content}
            </div>
            <div className="VideoBlock-body__background--status-status">
              <div className="VideoBlock-body__background--status-playButton">
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
              <div className="VideoBlock-body__background--status-currentTime">
                0:00
              </div>
              <div className="VideoBlock-body__background--status-heart">
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
      </Link>
    </div>
  );
};

export default VideoBlock;
