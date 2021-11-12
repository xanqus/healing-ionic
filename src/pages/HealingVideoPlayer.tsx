import "./HealingVideoPlayer.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const HealingVideoPlayer: any = ({ location }: any) => {
  const {
    state: { videoLink },
  } = location;
  return (
    <div className="HealingVideoPlayer-body__background">
      <Header />
      <div className="HealingVideoPlayer-body__videoWrapper">
        <video
          autoPlay
          controls
          className="HealingVideoPlayer-body__video"
          src={videoLink}
        ></video>
      </div>
    </div>
  );
};

export default HealingVideoPlayer;
