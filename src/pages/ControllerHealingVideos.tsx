import './ControllerHealingVideos.css';
import {useState, useEffect} from 'react';
import {setCallback, executeCommand} from '../socket/socket';
import {withRouter} from 'react-router';
import {RouteComponentProps} from 'react-router-dom';
import {History} from 'history';
import TabMenuVideo from '../components/TabMenuVideo';
import Carousel from 'react-elastic-carousel';
import Tab1 from '../components/controller/Tab1';
import ControllerTabMenu from '../components/controller/ControllerTabMenu';
import ControllerVideoBlock from '../components/controller/ControllerVideoBlock';
import GoBackFirstButton from '../components/controller/GoBackFirstButton';

const ControllerHealingVideos: any = ({history, location}: any) => {
  const contentArr: any = {
    animal1: '부엉이',
    animal2: '휴식중인 고양이',
    animal3: '휴식중인 고양이',
    animal4: '웰시코기',
    animal5: '아쿠아리움',
    animal6: '아쿠아리움',
    animal7: '해파리',
    animal8: '양떼',
    animal9: '펭귄',
    animal10: '독수리',
    lifestyle1: '페인팅',
    lifestyle2: '페인팅',
    lifestyle3: '도자기 물레',
    lifestyle4: '도자기 만들기',
    lifestyle5: '손글씨',
    lifestyle6: '맥주 공정',
    lifestyle7: '와펜 자수 공장',
    lifestyle8: '에스프레소',
    lifestyle9: '에스프레소',
    lifestyle10: '도시의러너',
    food1: '그릴구이',
    food2: '피자만들기',
    food3: '과일자르기',
    food4: '딸기',
    food5: '키위',
    nature1: '황혼의 산 중턱',
    nature2: '안개 낀 숲속',
    nature3: '한적한 해변',
    nature4: '숲속의 폭포',
    nature5: '해변',
    nature6: '해변',
    nature7: '계곡',
    nature8: '강과 호수',
    nature9: '노을이 지는 물가',
    nature10: '흔들리는 풀과 갈대',
    nature11: '폭포',
    nature12: '폭포',
    particle1: '메탈 원통',
    particle2: '메탈 원통',
    particle3: '굴러가는 공',
    particle4: '움직이는 쇠구슬',
    particle5: '움직이는 색입자',
    particle6: '파티클 해파리',
    particle7: '섞이는 물감',
    particle8: '푸른 불빛의 호수',
    particle9: '캠프파이어',
    particle10: '고래와 나비의 밤',
  };

  const menuArr = [
    {name: '동물', content: 'Tab menu ONE'},
    {name: '일상', content: 'Tab menu TWO'},
    {name: '음식', content: 'Tab menu THREE'},
    {name: '자연', content: 'Tab menu FOUR'},
    {name: '파티클', content: 'Tab menu FOUR'},
  ];
  const menuCategory = ['동물', '일상', '음식', '자연', '파티클'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTab, setCurrentTab] = useState(0);
  const selectMenuHandler = (index: any) => {
    setCurrentTab(index);
  };

  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = (event: any) => {
    //event.preventDefault();
    setModalState(false);
  };
  useEffect(() => {
    console.log(location.pathname);
    setCallback(data => {
      if (data.command[0].includes('animal')) {
        history.push({
          pathname: '/controller/ControllerHealingVideoDetail',
          state: {
            imgURL: `../assets/controller/thumbnail/${data.command[0]}.png`,
            content: contentArr[data.command[0]],
            menuCategory: '동물',
          },
        });
      } else if (data.command[0].includes('lifestyle')) {
        history.push({
          pathname: '/controller/ControllerHealingVideoDetail',
          state: {
            imgURL: `../assets/controller/thumbnail/${data.command[0]}.png`,
            content: contentArr[data.command[0]],
            menuCategory: '일상',
          },
        });
      } else if (data.command[0].includes('food')) {
        history.push({
          pathname: '/controller/ControllerHealingVideoDetail',
          state: {
            imgURL: `../assets/controller/thumbnail/${data.command[0]}.png`,
            content: contentArr[data.command[0]],
            menuCategory: '음식',
          },
        });
      } else if (data.command[0].includes('nature')) {
        history.push({
          pathname: '/controller/ControllerHealingVideoDetail',
          state: {
            imgURL: `../assets/controller/thumbnail/${data.command[0]}.png`,
            content: contentArr[data.command[0]],
            menuCategory: '자연',
          },
        });
      } else if (data.command[0].includes('particle')) {
        history.push({
          pathname: '/controller/ControllerHealingVideoDetail',
          state: {
            imgURL: `../assets/controller/thumbnail/${data.command[0]}.png`,
            content: contentArr[data.command[0]],
            menuCategory: '파티클',
          },
        });
      } else if (data.command[0] === 'FIRST_POPUP') {
        openModal();
      } else if (data.command[0] === 'FIRST_POPUP_YES') {
        history.push('/controller/select');
      } else if (data.command[0] === 'FIRST_POPUP_NO') {
        setModalState(false);
      } else if (data.command[0] === 'PLUS') {
        console.log('currentIndex', currentIndex);
        console.log('currentTab', currentTab);
        setCurrentIndex(2);
        setCurrentTab(2);
      }

      console.log('dataFromPC(Contorller/HealingVideos) :', data);
    });

    /*const listener: LocationListener = (location, action) => {
      if (location.pathname !== "/controller") {
        socket.close();
        alert("close");
      }
    };
    history.listen(listener);*/

    history.listen((location: any, action: any) => {
      if (location.pathname !== '/signalMeasurement') {
        //alert('close');
      }
    });
  }, [location.pathname, history]);
  return (
    <div className="ControllerHealingVideos-body__background">
      <div className="ControllerHealingVideos-body__sub1">
        <GoBackFirstButton
          modalState={modalState}
          setModalState={setModalState}
          openModal={openModal}
          closeModal={closeModal}
        />
      </div>
      <div className="ControllerHealingVideos-body__sub2">
        <div>
          <div>
            <img src="../assets/controller/hrc-gif.gif" alt="" />
          </div>
          <div>힐링콘텐츠를 추천드립니다.</div>
        </div>
      </div>
      <div className="ControllerHealingVideos-body__sub3">
        <div className="HealingVideos-body__tabMenu">
          <ControllerTabMenu
            currentIndex={currentIndex}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            selectMenuHandler={selectMenuHandler}
            setCurrentIndex={setCurrentIndex}
          >
            <ControllerVideoBlock
              category={menuCategory}
              currentIndex={currentIndex}
              content={['부엉이', '페인팅', '그릴구이', '황혼의 산 중턱', '메탈 원통']}
              imgURL={[
                '../assets/controller/thumbnail/animal1.png',
                '../assets/controller/thumbnail/lifestyle1.png',
                '../assets/controller/thumbnail/food1.png',
                '../assets/controller/thumbnail/nature1.png',
                '../assets/controller/thumbnail/particle1.png',
              ]}
              socketCommand={['animal1', 'lifestyle1', 'food1', 'nature1', 'particle1']}
              index={0}
            />
            <ControllerVideoBlock
              category={menuCategory}
              currentIndex={currentIndex}
              content={['휴식중인 고양이', '페인팅', '피자만들기', '안개 낀 숲속', '메탈 원통']}
              imgURL={[
                '../assets/controller/thumbnail/animal2.png',
                '../assets/controller/thumbnail/lifestyle2.png',
                '../assets/controller/thumbnail/food2.png',
                '../assets/controller/thumbnail/nature2.png',
                '../assets/controller/thumbnail/particle2.png',
              ]}
              socketCommand={['animal2', 'lifestyle2', 'food2', 'nature2', 'particle2']}
              index={1}
            />
            <ControllerVideoBlock
              category={menuCategory}
              currentIndex={currentIndex}
              content={['휴식중인 고양이', '도자기 물레', '과일자르기', '한적한 해변', '굴러가는 공']}
              imgURL={[
                '../assets/controller/thumbnail/animal3.png',
                '../assets/controller/thumbnail/lifestyle3.png',
                '../assets/controller/thumbnail/food3.png',
                '../assets/controller/thumbnail/nature3.png',
                '../assets/controller/thumbnail/particle3.png',
              ]}
              socketCommand={['animal3', 'lifestyle3', 'food3', 'nature3', 'particle3']}
              index={2}
            />
            <ControllerVideoBlock
              category={menuCategory}
              currentIndex={currentIndex}
              content={['웰시코기', '도자기 만들기', '딸기', '숲 속의 폭포', '움직이는 쇠구슬']}
              imgURL={[
                '../assets/controller/thumbnail/animal4.png',
                '../assets/controller/thumbnail/lifestyle4.png',
                '../assets/controller/thumbnail/food4.png',
                '../assets/controller/thumbnail/nature4.png',
                '../assets/controller/thumbnail/particle4.png',
              ]}
              socketCommand={['animal4', 'lifestyle4', 'food4', 'nature4', 'particle4']}
              index={3}
            />
            <ControllerVideoBlock
              category={menuCategory}
              currentIndex={currentIndex}
              content={['아쿠아리움', '손글씨', '키위', '해변', '움직이는 색입자']}
              imgURL={[
                '../assets/controller/thumbnail/animal5.png',
                '../assets/controller/thumbnail/lifestyle5.png',
                '../assets/controller/thumbnail/food5.png',
                '../assets/controller/thumbnail/nature5.png',
                '../assets/controller/thumbnail/particle5.png',
              ]}
              socketCommand={['animal5', 'lifestyle5', 'food5', 'nature5', 'particle5']}
              index={4}
            />
            <ControllerVideoBlock
              category={menuCategory}
              currentIndex={currentIndex}
              content={['아쿠아리움', '맥주 공정', null, '해변', ' 파티클 해파리']}
              imgURL={[
                '../assets/controller/thumbnail/animal6.png',
                '../assets/controller/thumbnail/lifestyle6.png',
                null,
                '../assets/controller/thumbnail/nature6.png',
                '../assets/controller/thumbnail/particle6.png',
              ]}
              socketCommand={['animal6', null, 'food6', 'nature6', 'particle6']}
              index={5}
            />
            <ControllerVideoBlock
              category={menuCategory}
              currentIndex={currentIndex}
              content={['해파리', '와펜 자수 공장', null, '강과 호수', '푸른 불빛의 호수']}
              imgURL={[
                '../assets/controller/thumbnail/animal7.png',
                '../assets/controller/thumbnail/lifestyle7.png',
                null,
                '../assets/controller/thumbnail/nature7.png',
                '../assets/controller/thumbnail/particle7.png',
              ]}
              socketCommand={['animal7', null, 'food7', 'nature7', 'particle7']}
              index={6}
            />
            <ControllerVideoBlock
              category={menuCategory}
              currentIndex={currentIndex}
              content={['양떼', '에스프레소', null, '강과 호수', '푸른 불빛의 호수']}
              imgURL={[
                '../assets/controller/thumbnail/animal8.png',
                '../assets/controller/thumbnail/lifestyle8.png',
                null,
                '../assets/controller/thumbnail/nature8.png',
                '../assets/controller/thumbnail/particle8.png',
              ]}
              socketCommand={['animal8', null, 'food8', 'nature8', 'particle8']}
              index={7}
            />
            <ControllerVideoBlock
              category={menuCategory}
              currentIndex={currentIndex}
              content={['펭귄', '에스프레소', null, '노을이 지는 물가', '캠프파이어']}
              imgURL={[
                '../assets/controller/thumbnail/animal9.png',
                '../assets/controller/thumbnail/lifestyle9.png',
                null,
                '../assets/controller/thumbnail/nature9.png',
                '../assets/controller/thumbnail/particle9.png',
              ]}
              socketCommand={['animal9', null, 'food9', 'nature9', 'particle9']}
              index={8}
            />
            <ControllerVideoBlock
              category={menuCategory}
              currentIndex={currentIndex}
              content={['독수리', '도시의러너', null, '흔들리는 풀과 갈대', '고래와 나비의 밤']}
              imgURL={[
                '../assets/controller/thumbnail/animal10.png',
                '../assets/controller/thumbnail/lifestyle10.png',
                null,
                '../assets/controller/thumbnail/nature10.png',
                '../assets/controller/thumbnail/particle10.png',
              ]}
              socketCommand={['animal10', null, 'food10', 'nature10', 'particle10']}
              index={9}
            />
            <ControllerVideoBlock
              category={menuCategory}
              currentIndex={currentIndex}
              content={[null, null, null, '폭포', null]}
              imgURL={[null, null, null, '../assets/controller/thumbnail/nature11.png', null]}
              socketCommand={[null, null, null, 'nature11', null]}
              index={10}
            />
            <ControllerVideoBlock
              category={menuCategory}
              currentIndex={currentIndex}
              content={[null, null, null, '폭포', null]}
              imgURL={[null, null, null, '../assets/controller/thumbnail/nature12.png', null]}
              socketCommand={[null, null, null, 'nature12', null]}
              index={11}
            />
          </ControllerTabMenu>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ControllerHealingVideos);
