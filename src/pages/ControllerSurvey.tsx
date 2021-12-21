import './ControllerSurvey.css';
import {useState, useEffect} from 'react';
import {setCallback, executeCommand} from '../socket/socket';
import {withRouter} from 'react-router';
import Modal from '../components/controller/Modal';
import {RouteComponentProps} from 'react-router-dom';

const ControllerSurvey: React.FC = ({location, history}: any) => {
  const [currentTab, setCurrentTab] = useState(-1);
  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = (event: any) => {
    event.preventDefault();
    setModalState(false);
  };

  useEffect(() => {
    console.log(location.pathname);
    setCallback(data => {
      if (data.command[0] === 'RESEARCH1') {
        setCurrentTab(1);
      } else if (data.command[0] === 'RESEARCH2') {
        setCurrentTab(2);
      } else if (data.command[0] === 'RESEARCH3') {
        setCurrentTab(3);
      } else if (data.command[0] === 'RESEARCH4') {
        setCurrentTab(4);
      } else if (data.command[0] === 'RESEARCH5') {
        setCurrentTab(5);
      } else if (data.command[0] === 'RESEARCH_DAUM') {
        history.push('/controller/healingVideos');
      } else if (data.command[0] === 'FIRST_POPUP') {
        openModal();
      } else if (data.command[0] === 'FIRST_POPUP_YES') {
        history.push('/controller/select');
      } else if (data.command[0] === 'FIRST_POPUP_NO') {
        setModalState(false);
      }
      console.log('dataFromPC(Contorller) :', data);
    });
  }, [history, location.pathname]);

  return (
    <div className="ControllerSurvey-body__background">
      <div className="ControllerSurvey-body__sub1">
        <div className="BeforeButton-body">
          <div
            className="BeforeButton-body--text"
            onClick={() => {
              executeCommand('BB', 'FIRST_POPUP');
              openModal();
            }}
          >
            처음으로
          </div>
          <Modal
            toGo={'first'}
            state={modalState}
            setModalState={setModalState}
            closeModal={closeModal}
            openModal={openModal}
          />
        </div>
      </div>
      <div className="ControllerSurvey-body__sub2">
        <div>
          <div>
            <img src="../assets/controller/hrc-gif.gif" alt="" />
          </div>
          <div>힐링 콘텐츠를 시청해주셔서 감사드립니다.</div>
        </div>
      </div>
      <div className="ControllerSurvey-body__sub3">
        <div>
          <div>콘텐츠 선호도조사</div>
          <div>
            &nbsp;시청하신 콘텐츠의 선호도 조사를 해보겠습니다. 매우 만족 5점부터 매우 불만족 1점까지의{' '}
            <span>점수</span>를 선택해주세요.
          </div>
          <div>
            <div>
              <div
                className={
                  currentTab === 5 ? 'ControllerSurveyBorder ControllerSurveyBorder-focused' : 'ControllerSurveyBorder'
                }
                onClick={() => {
                  setCurrentTab(5);
                  executeCommand('BB', 'RESEARCH5');
                }}
              >
                <div>5점(매우 만족)</div>
                <div>
                  <div>
                    <img src="../assets/controller/hrc-icon-00.png" alt="" />
                  </div>
                </div>
                <div>
                  <div className={currentTab === 5 ? 'ControllerSurvey ControllerSurvey-focused' : 'ControllerSurvey'}>
                    5
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className={
                  currentTab === 4 ? 'ControllerSurveyBorder ControllerSurveyBorder-focused' : 'ControllerSurveyBorder'
                }
                onClick={() => {
                  setCurrentTab(4);
                  executeCommand('BB', 'RESEARCH4');
                }}
              >
                <div>4점(만족)</div>
                <div>
                  <div>
                    <img src="../assets/controller/hrc-icon-01.png" alt="" />
                  </div>
                </div>
                <div>
                  <div className={currentTab === 4 ? 'ControllerSurvey ControllerSurvey-focused' : 'ControllerSurvey'}>
                    4
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className={
                  currentTab === 3 ? 'ControllerSurveyBorder ControllerSurveyBorder-focused' : 'ControllerSurveyBorder'
                }
                onClick={() => {
                  setCurrentTab(3);
                  executeCommand('BB', 'RESEARCH3');
                }}
              >
                <div>3점(보통)</div>
                <div>
                  <div>
                    <img src="../assets/controller/hrc-icon-02.png" alt="" />
                  </div>
                </div>
                <div>
                  <div className={currentTab === 3 ? 'ControllerSurvey ControllerSurvey-focused' : 'ControllerSurvey'}>
                    3
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div
                className={
                  currentTab === 2 ? 'ControllerSurveyBorder ControllerSurveyBorder-focused' : 'ControllerSurveyBorder'
                }
                onClick={() => {
                  setCurrentTab(2);
                  executeCommand('BB', 'RESEARCH2');
                }}
              >
                <div>2점(불만족)</div>
                <div>
                  <div>
                    <img src="../assets/controller/hrc-icon-03.png" alt="" />
                  </div>
                </div>
                <div>
                  <div className={currentTab === 2 ? 'ControllerSurvey ControllerSurvey-focused' : 'ControllerSurvey'}>
                    2
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className={
                  currentTab === 1 ? 'ControllerSurveyBorder ControllerSurveyBorder-focused' : 'ControllerSurveyBorder'
                }
                onClick={() => {
                  setCurrentTab(1);
                  executeCommand('BB', 'RESEARCH1');
                }}
              >
                <div>1점(매우불만족)</div>
                <div>
                  <div>
                    <img src="../assets/controller/hrc-icon-04.png" alt="" />
                  </div>
                </div>
                <div>
                  <div className={currentTab === 1 ? 'ControllerSurvey ControllerSurvey-focused' : 'ControllerSurvey'}>
                    1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ControllerSurvey-body__sub4">
        <div
          onClick={() => {
            executeCommand('BB', 'RESEARCH_DAUM');
            history.push('/controller/healingVideos');
          }}
        >
          다음
        </div>
      </div>
    </div>
  );
};

export default withRouter(ControllerSurvey);
