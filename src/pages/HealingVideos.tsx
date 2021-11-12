import "./HealingVideos.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import TabMenuVideo from "../components/TabMenuVideo";
import VideoBlock from "../components/VideoBlock";

import {
  videoUrlList,
  videoContentList,
} from "./../assets/dataset/healingVideosData";

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
            imgURL={{
              0: "../assets/healingVideos/thumb-1.png",
              1: "../assets/healingVideos/h-sub-2-soc-0.png",
              2: "../assets/healingVideos/h-sub-2-soc-0.png",
              3: "../assets/healingVideos/h-sub-2-soc-0.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/aa.mp4",
            }}
            index={0}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="연인과 걷는 푸른 추억"
            imgURL={{
              0: "../assets/healingVideos/thumb-2.png",
              1: "../assets/healingVideos/h-sub-2-soc-1.png",
              2: "../assets/healingVideos/h-sub-2-soc-1.png",
              3: "../assets/healingVideos/h-sub-2-soc-1.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/bb.mp4",
            }}
            index={1}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="상쾌한 나들이"
            imgURL={{
              0: "../assets/healingVideos/h-sub-2-soc-3.png",
              1: "../assets/healingVideos/h-sub-2-soc-3.png",
              2: "../assets/healingVideos/h-sub-2-soc-3.png",
              3: "../assets/healingVideos/h-sub-2-soc-3.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={2}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="푸른 하늘 아래"
            imgURL={{
              0: "../assets/healingVideos/h-sub-2-soc-6.png",
              1: "../assets/healingVideos/h-sub-2-soc-6.png",
              2: "../assets/healingVideos/h-sub-2-soc-6.png",
              3: "../assets/healingVideos/h-sub-2-soc-6.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/ee.mp4",
            }}
            index={3}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="별빛이 내리는 밤"
            imgURL={{
              0: "../assets/healingVideos/h-sub-2-soc-7.png",
              1: "../assets/healingVideos/h-sub-2-soc-7.png",
              2: "../assets/healingVideos/h-sub-2-soc-7.png",
              3: "../assets/healingVideos/h-sub-2-soc-7.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/ff.mp4",
            }}
            index={4}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="붉게 물든 시간"
            imgURL={{
              0: "../assets/healingVideos/h-sub-2-soc-8.png",
              1: "../assets/healingVideos/h-sub-2-soc-8.png",
              2: "../assets/healingVideos/h-sub-2-soc-8.png",
              3: "../assets/healingVideos/h-sub-2-soc-8.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/aa.mp4",
            }}
            index={5}
          />
        </TabMenuVideo>
      </div>
    </div>
  );
};

export default HealingVideos;
