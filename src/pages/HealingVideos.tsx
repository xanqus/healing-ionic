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
            content="낮잠자는 고양이"
            imgURL={{
              0: "../assets/healingVideos/thumb-1.png",
              1: "../assets/healingVideos/thumb-1.png",
              2: "../assets/healingVideos/thumb-1.png",
              3: "../assets/healingVideos/thumb-1.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/aa.mp4",
            }}
            index={0}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="앉아있는 개"
            imgURL={{
              0: "../assets/healingVideos/thumb-2.png",
              1: "../assets/healingVideos/thumb-2.png",
              2: "../assets/healingVideos/thumb-2.png",
              3: "../assets/healingVideos/thumb-2.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/bb.mp4",
            }}
            index={1}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="늑대"
            imgURL={{
              0: "../assets/healingVideos/thumb-3.png",
              1: "../assets/healingVideos/thumb-3.png",
              2: "../assets/healingVideos/thumb-3.png",
              3: "../assets/healingVideos/thumb-3.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={2}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="청둥오리"
            imgURL={{
              0: "../assets/healingVideos/thumb-4.png",
              1: "../assets/healingVideos/thumb-4.png",
              2: "../assets/healingVideos/thumb-4.png",
              3: "../assets/healingVideos/thumb-4.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={3}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="물가의 새"
            imgURL={{
              0: "../assets/healingVideos/thumb-5.png",
              1: "../assets/healingVideos/thumb-5.png",
              2: "../assets/healingVideos/thumb-5.png",
              3: "../assets/healingVideos/thumb-5.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={4}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="바다거북이"
            imgURL={{
              0: "../assets/healingVideos/thumb-6.png",
              1: "../assets/healingVideos/thumb-6.png",
              2: "../assets/healingVideos/thumb-6.png",
              3: "../assets/healingVideos/thumb-6.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={5}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="아쿠아리움"
            imgURL={{
              0: "../assets/healingVideos/thumb-7.png",
              1: "../assets/healingVideos/thumb-7.png",
              2: "../assets/healingVideos/thumb-7.png",
              3: "../assets/healingVideos/thumb-7.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={6}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="갯벌의 게"
            imgURL={{
              0: "../assets/healingVideos/thumb-8.png",
              1: "../assets/healingVideos/thumb-8.png",
              2: "../assets/healingVideos/thumb-8.png",
              3: "../assets/healingVideos/thumb-8.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={7}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="쥐가오리"
            imgURL={{
              0: "../assets/healingVideos/thumb-9.png",
              1: "../assets/healingVideos/thumb-9.png",
              2: "../assets/healingVideos/thumb-9.png",
              3: "../assets/healingVideos/thumb-9.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={8}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="강에 사는 물고기"
            imgURL={{
              0: "../assets/healingVideos/thumb-10.png",
              1: "../assets/healingVideos/thumb-10.png",
              2: "../assets/healingVideos/thumb-10.png",
              3: "../assets/healingVideos/thumb-10.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={9}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="맥주공장"
            imgURL={{
              0: "../assets/healingVideos/thumb-11.png",
              1: "../assets/healingVideos/thumb-11.png",
              2: "../assets/healingVideos/thumb-11.png",
              3: "../assets/healingVideos/thumb-11.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={10}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="비가 오는 도시"
            imgURL={{
              0: "../assets/healingVideos/thumb-12.png",
              1: "../assets/healingVideos/thumb-12.png",
              2: "../assets/healingVideos/thumb-12.png",
              3: "../assets/healingVideos/thumb-12.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={11}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="스테이크"
            imgURL={{
              0: "../assets/healingVideos/thumb-13.png",
              1: "../assets/healingVideos/thumb-13.png",
              2: "../assets/healingVideos/thumb-13.png",
              3: "../assets/healingVideos/thumb-13.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={12}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="팬 스테이크"
            imgURL={{
              0: "../assets/healingVideos/thumb-14.png",
              1: "../assets/healingVideos/thumb-14.png",
              2: "../assets/healingVideos/thumb-14.png",
              3: "../assets/healingVideos/thumb-14.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={13}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="햄버거 패티"
            imgURL={{
              0: "../assets/healingVideos/thumb-15.png",
              1: "../assets/healingVideos/thumb-15.png",
              2: "../assets/healingVideos/thumb-15.png",
              3: "../assets/healingVideos/thumb-15.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={14}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="감자튀김"
            imgURL={{
              0: "../assets/healingVideos/thumb-16.png",
              1: "../assets/healingVideos/thumb-16.png",
              2: "../assets/healingVideos/thumb-16.png",
              3: "../assets/healingVideos/thumb-16.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={15}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="피자 만들기"
            imgURL={{
              0: "../assets/healingVideos/thumb-17.png",
              1: "../assets/healingVideos/thumb-17.png",
              2: "../assets/healingVideos/thumb-17.png",
              3: "../assets/healingVideos/thumb-17.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={16}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="원두 로스팅"
            imgURL={{
              0: "../assets/healingVideos/thumb-18.png",
              1: "../assets/healingVideos/thumb-18.png",
              2: "../assets/healingVideos/thumb-18.png",
              3: "../assets/healingVideos/thumb-18.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={17}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="커피 추출"
            imgURL={{
              0: "../assets/healingVideos/thumb-19.png",
              1: "../assets/healingVideos/thumb-19.png",
              2: "../assets/healingVideos/thumb-19.png",
              3: "../assets/healingVideos/thumb-19.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={18}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="원두 커피"
            imgURL={{
              0: "../assets/healingVideos/thumb-20.png",
              1: "../assets/healingVideos/thumb-20.png",
              2: "../assets/healingVideos/thumb-20.png",
              3: "../assets/healingVideos/thumb-20.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={19}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="라떼 아트"
            imgURL={{
              0: "../assets/healingVideos/thumb-21.png",
              1: "../assets/healingVideos/thumb-21.png",
              2: "../assets/healingVideos/thumb-21.png",
              3: "../assets/healingVideos/thumb-21.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={20}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="티타임"
            imgURL={{
              0: "../assets/healingVideos/thumb-22.png",
              1: "../assets/healingVideos/thumb-22.png",
              2: "../assets/healingVideos/thumb-22.png",
              3: "../assets/healingVideos/thumb-22.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={21}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="황혼의 산 중턱"
            imgURL={{
              0: "../assets/healingVideos/thumb-23.png",
              1: "../assets/healingVideos/thumb-23.png",
              2: "../assets/healingVideos/thumb-23.png",
              3: "../assets/healingVideos/thumb-23.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={22}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="안개 낀 숲속"
            imgURL={{
              0: "../assets/healingVideos/thumb-24.png",
              1: "../assets/healingVideos/thumb-24.png",
              2: "../assets/healingVideos/thumb-24.png",
              3: "../assets/healingVideos/thumb-24.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={23}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="한적한 해변"
            imgURL={{
              0: "../assets/healingVideos/thumb-25.png",
              1: "../assets/healingVideos/thumb-25.png",
              2: "../assets/healingVideos/thumb-25.png",
              3: "../assets/healingVideos/thumb-25.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={24}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="숲속의 폭포"
            imgURL={{
              0: "../assets/healingVideos/thumb-26.png",
              1: "../assets/healingVideos/thumb-26.png",
              2: "../assets/healingVideos/thumb-26.png",
              3: "../assets/healingVideos/thumb-26.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={25}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="초봄의 냇가"
            imgURL={{
              0: "../assets/healingVideos/thumb-27.png",
              1: "../assets/healingVideos/thumb-27.png",
              2: "../assets/healingVideos/thumb-27.png",
              3: "../assets/healingVideos/thumb-27.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={26}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="보라색 꽃"
            imgURL={{
              0: "../assets/healingVideos/thumb-28.png",
              1: "../assets/healingVideos/thumb-28.png",
              2: "../assets/healingVideos/thumb-28.png",
              3: "../assets/healingVideos/thumb-28.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={27}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="분홍색 꽃"
            imgURL={{
              0: "../assets/healingVideos/thumb-29.png",
              1: "../assets/healingVideos/thumb-29.png",
              2: "../assets/healingVideos/thumb-29.png",
              3: "../assets/healingVideos/thumb-29.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={28}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="참나리"
            imgURL={{
              0: "../assets/healingVideos/thumb-30.png",
              1: "../assets/healingVideos/thumb-30.png",
              2: "../assets/healingVideos/thumb-30.png",
              3: "../assets/healingVideos/thumb-30.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={29}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="섞이는 물감"
            imgURL={{
              0: "../assets/healingVideos/thumb-31.png",
              1: "../assets/healingVideos/thumb-31.png",
              2: "../assets/healingVideos/thumb-31.png",
              3: "../assets/healingVideos/thumb-31.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={30}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="푸른 불빛의 호수"
            imgURL={{
              0: "../assets/healingVideos/thumb-32.png",
              1: "../assets/healingVideos/thumb-32.png",
              2: "../assets/healingVideos/thumb-32.png",
              3: "../assets/healingVideos/thumb-32.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={31}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="캠프파이어"
            imgURL={{
              0: "../assets/healingVideos/thumb-33.png",
              1: "../assets/healingVideos/thumb-33.png",
              2: "../assets/healingVideos/thumb-33.png",
              3: "../assets/healingVideos/thumb-33.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={32}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="깊은 바다의 고래"
            imgURL={{
              0: "../assets/healingVideos/thumb-34.png",
              1: "../assets/healingVideos/thumb-34.png",
              2: "../assets/healingVideos/thumb-34.png",
              3: "../assets/healingVideos/thumb-34.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={33}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content="달빛아래 춤추는 고래"
            imgURL={{
              0: "../assets/healingVideos/thumb-35.png",
              1: "../assets/healingVideos/thumb-35.png",
              2: "../assets/healingVideos/thumb-35.png",
              3: "../assets/healingVideos/thumb-35.png",
            }}
            videoLink={{
              0: "https://wetube-xanqus.s3-ap-northeast-1.amazonaws.com/video/cc.mp4",
            }}
            index={34}
          />
        </TabMenuVideo>
      </div>
    </div>
  );
};

export default HealingVideos;
