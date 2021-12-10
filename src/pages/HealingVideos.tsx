import "./HealingVideos.css";
import { withRouter } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import TabMenuVideo from "../components/TabMenuVideo";
import VideoBlock from "../components/VideoBlock";
import {
  videoUrlList,
  videoContentList,
} from "./../assets/dataset/healingVideosData";

const HealingVideos: React.FC = ({ history }: any) => {
  console.log(history);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="HealingVideos-body__background">
      <Header />

      <div className="HealingVideos-body__tabMenu">
        <TabMenuVideo setCurrentIndex={setCurrentIndex}>
          <VideoBlock
            currentIndex={currentIndex}
            content={[
              "낮잠자는 고양이",
              "맥주공장",
              "스테이크",
              "황혼의 산 중턱",
              "섞이는 물감",
            ]}
            imgURL={[
              "../assets/healingVideos/thumb-1.png",
              "../assets/healingVideos/thumb-11.png",
              "../assets/healingVideos/thumb-16.png",
              "../assets/healingVideos/thumb-26.png",
              "../assets/healingVideos/thumb-36.png",
            ]}
            videoLink={[
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-1(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-11(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-16(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-26(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-36(2k).mp4",
            ]}
            index={0}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content={[
              "앉아있는 개",
              "비가오는 도시",
              "팬 스테이크",
              "안개 낀 숲속",
              "푸른 불빛의 호수",
            ]}
            imgURL={[
              "../assets/healingVideos/thumb-2.png",
              "../assets/healingVideos/thumb-12.png",
              "../assets/healingVideos/thumb-17.png",
              "../assets/healingVideos/thumb-27.png",
              "../assets/healingVideos/thumb-37.png",
            ]}
            videoLink={[
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-2(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-12(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-17(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-27(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-37(2k).mp4",
            ]}
            index={1}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content={[
              "늑대",
              "목재 조형",
              "햄버거 패티",
              "한적한 해변",
              "캠프 파이어",
            ]}
            imgURL={[
              "../assets/healingVideos/thumb-3.png",
              "../assets/healingVideos/thumb-13.png",
              "../assets/healingVideos/thumb-18.png",
              "../assets/healingVideos/thumb-28.png",
              "../assets/healingVideos/thumb-38.png",
            ]}
            videoLink={[
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-3(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-13(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-18(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-28(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-38(2k).mp4",
            ]}
            index={2}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content={[
              "청둥오리",
              "시계 태엽",
              "감자튀김",
              "숲 속의 폭포",
              "깊은 바다의 고래",
            ]}
            imgURL={[
              "../assets/healingVideos/thumb-4.png",
              "../assets/healingVideos/thumb-14.png",
              "../assets/healingVideos/thumb-19.png",
              "../assets/healingVideos/thumb-29.png",
              "../assets/healingVideos/thumb-39.png",
            ]}
            videoLink={[
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-4(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-14(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-19(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-29(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-39(2k).mp4",
            ]}
            index={3}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content={[
              "물가의 새",
              "가죽 공예",
              "피자 만들기",
              "초봄의 냇가",
              "달빛아래 춤추는 고래",
            ]}
            imgURL={[
              "../assets/healingVideos/thumb-5.png",
              "../assets/healingVideos/thumb-15.png",
              "../assets/healingVideos/thumb-20.png",
              "../assets/healingVideos/thumb-30.png",
              "../assets/healingVideos/thumb-40.png",
            ]}
            videoLink={[
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-5(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-15(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-20(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-30(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-40(2k).mp4",
            ]}
            index={4}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content={["바다거북이", null, "원두 로스팅", "보라색 꽃", null]}
            imgURL={[
              "../assets/healingVideos/thumb-6.png",
              null,
              "../assets/healingVideos/thumb-21.png",
              "../assets/healingVideos/thumb-31.png",
              null,
            ]}
            videoLink={[
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-6(2k).mp4",
              null,
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-21(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-31(2k).mp4",
              null,
            ]}
            index={5}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content={["아쿠아리움", null, "커피 추출", "분홍색 꽃", null]}
            imgURL={[
              "../assets/healingVideos/thumb-7.png",
              null,
              "../assets/healingVideos/thumb-22.png",
              "../assets/healingVideos/thumb-32.png",
              null,
            ]}
            videoLink={[
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-7(2k).mp4",
              null,
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-22(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-32(2k).mp4",
              null,
            ]}
            index={6}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content={["갯벌의 게", null, "원두 커피", "참나리", null]}
            imgURL={[
              "../assets/healingVideos/thumb-8.png",
              null,
              "../assets/healingVideos/thumb-23.png",
              "../assets/healingVideos/thumb-33.png",
              null,
            ]}
            videoLink={[
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-8(2k).mp4",
              null,
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-23(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-33(2k).mp4",
              null,
            ]}
            index={7}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content={["쥐가오리", null, "라떼 아트", "벼가 익는 밭", null]}
            imgURL={[
              "../assets/healingVideos/thumb-9.png",
              null,
              "../assets/healingVideos/thumb-24.png",
              "../assets/healingVideos/thumb-34.png",
              null,
            ]}
            videoLink={[
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-9(2k).mp4",
              null,
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-24(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-34(2k).mp4",
              null,
            ]}
            index={8}
          />
          <VideoBlock
            currentIndex={currentIndex}
            content={["강에 사는 물고기", null, "티타임", "강과 산", null]}
            imgURL={[
              "../assets/healingVideos/thumb-10.png",
              null,
              "../assets/healingVideos/thumb-25.png",
              "../assets/healingVideos/thumb-35.png",
              null,
            ]}
            videoLink={[
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-10(2k).mp4",
              null,
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-25(2k).mp4",
              "https://healing-bucket.s3.ap-northeast-2.amazonaws.com/healingVideos/video-35(2k).mp4",
              null,
            ]}
            index={9}
          />
        </TabMenuVideo>
      </div>
    </div>
  );
};

export default withRouter(HealingVideos);
