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
        {/*  eslint-disable-next-line jsx-a11y/iframe-has-title*/}
        <iframe
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          width="100%"
          height="100%"
          src={videoLink}
        ></iframe>
      </div>
    </div>
  );
};

export default HealingVideoPlayer;
