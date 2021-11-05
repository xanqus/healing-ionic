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
          <VideoBlock
            currentIndex={currentIndex}
            content="녹음이 어린 폭포"
            imgURL={{ 0: "../assets/healingVideos/h-sub-2-soc-0.png" }}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="연인과 걷는 푸른 추억"
            imgURL={{ 0: "../assets/healingVideos/h-sub-2-soc-1.png" }}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="상쾌한 나들이"
            imgURL={{ 0: "../assets/healingVideos/h-sub-2-soc-3.png" }}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="푸른 하늘 아래"
            imgURL={{ 0: "../assets/healingVideos/h-sub-2-soc-6.png" }}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="별빛이 내리는 밤"
            imgURL={{ 0: "../assets/healingVideos/h-sub-2-soc-7.png" }}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="붉게 물든 시간"
            imgURL={{ 0: "../assets/healingVideos/h-sub-2-soc-8.png" }}
          />
        </TabMenuVideo>
      </div>
    </div>
  );
};

export default HealingVideos;
