import "./HealingVideos.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import TabMenuVideo from "../components/TabMenuVideo";
import VideoBlock from "../components/VideoBlock";

const HealingVideos: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="HealingVideos-body__background">
      <Header />

      <div className="HealingVideos-body__tabMenu">
        <TabMenuVideo setCurrentIndex={setCurrentIndex}>
          <VideoBlock content="test1" imgURL="" />
          <VideoBlock content="test2" imgURL="" />
          <VideoBlock content="test3" imgURL="" />
          <VideoBlock content="test4" imgURL="" />
          <VideoBlock content="test5" imgURL="" />
          <VideoBlock content="test6" imgURL="" />
          <VideoBlock content="test7" imgURL="" />
          <VideoBlock content="test8" imgURL="" />
        </TabMenuVideo>
      </div>
    </div>
  );
};

export default HealingVideos;
