import './RecentHistory.css';
import {withRouter} from 'react-router';
import {useState, useEffect} from 'react';
import {setCallback} from '../socket/socket';
import {RouteComponentProps} from 'react-router-dom';
import {History} from 'history';
import GoBackFirstButton from '../components/controller/GoBackFirstButton';
import {executeCommand} from '../socket/socket';

interface RecentHistoryProps extends RouteComponentProps {
  history: History;
}

const RecentHistory: React.FC<RecentHistoryProps> = ({history, location}) => {
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
      if (data.command[0] === 'INFO_DAUM') {
        history.push('/controller/healingVideos');
      } else if (data.command[0] === 'FIRST_POPUP') {
        openModal();
      } else if (data.command[0] === 'FIRST_POPUP_YES') {
        history.push('/controller/select');
      } else if (data.command[0] === 'FIRST_POPUP_NO') {
        setModalState(false);
      }
      console.log('dataFromPC(Contorlle/select) :', data);
    });
    history.listen((location: any, action: any) => {
      if (location.pathname !== '/controller/select') {
        //alert("close/select");
      } else {
      }
    });
  }, [location.pathname, history]);
  return (
    <div className="RecentHistory-body__background">
      <div className="RecentHistory-body__sub1">
        <GoBackFirstButton
          modalState={modalState}
          setModalState={setModalState}
          openModal={openModal}
          closeModal={closeModal}
        />
      </div>
      <div className="RecentHistory-body__sub2">
        <div>
          <div>
            <img src="../assets/controller/hrc-gif.gif" alt="" />
          </div>
          <div>최근 힐링룸 이력을 확인합니다.</div>
        </div>
      </div>
      <div className="RecentHistory-body__sub3">
        <div>
          <div>최근 이력 상세정보</div>
          <div>
            김치중님의 최근 종합 이력 그래프입니다. 신체활동이 다소 부족하여 올바른 운동을 하시는 것이 좋을 것 같습니다.
          </div>
          <div>
            스트레스가 다소 높으니 마음을 편안하게 힐링하시기를 추천드립니다. 누적 피로도도 높으니 힐링과 동시에 편안한
            휴식이 필요합니다.
          </div>
        </div>
      </div>
      <div className="RecentHistory-body__sub4">
        <div>
          <div>
            <svg
              className="circle-chart"
              viewBox="0 0 180 180"
              width="180"
              height="180"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="circle-chart__background"
                stroke="#dce2e9"
                strokeWidth="10"
                fill="none"
                cx="90"
                cy="90"
                r="85"
              />
              <circle
                className="circle-chart__circle"
                stroke="#3689ce"
                strokeWidth="10"
                strokeDasharray="100,534"
                strokeLinecap="round"
                fill="none"
                cx="90"
                cy="90"
                r="85"
              />
              <text x="55" y="80" className="HistoryManagement-body__message--subGraph-category">
                신체활력
              </text>
              <text
                style={{fill: '#3689ce'}}
                x="35"
                y="110"
                className="HistoryManagement-body__message--subGraph-degree"
              >
                다소 부족
              </text>
            </svg>
          </div>
          <div>
            <svg
              className="circle-chart"
              viewBox="0 0 180 180"
              width="180"
              height="180"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="circle-chart__background"
                stroke="#dce2e9"
                strokeWidth="10"
                fill="none"
                cx="90"
                cy="90"
                r="85"
              />
              <circle
                className="circle-chart__circle"
                stroke="#3689ce"
                strokeWidth="10"
                strokeDasharray="100,534"
                strokeLinecap="round"
                fill="none"
                cx="90"
                cy="90"
                r="85"
              />
              <text x="55" y="80" className="HistoryManagement-body__message--subGraph-category">
                신체활력
              </text>
              <text
                style={{fill: '#3689ce'}}
                x="35"
                y="110"
                className="HistoryManagement-body__message--subGraph-degree"
              >
                다소 부족
              </text>
            </svg>
          </div>
          <div>
            <svg
              className="circle-chart"
              viewBox="0 0 180 180"
              width="180"
              height="180"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="circle-chart__background"
                stroke="#dce2e9"
                strokeWidth="10"
                fill="none"
                cx="90"
                cy="90"
                r="85"
              />
              <circle
                className="circle-chart__circle"
                stroke="#3689ce"
                strokeWidth="10"
                strokeDasharray="100,534"
                strokeLinecap="round"
                fill="none"
                cx="90"
                cy="90"
                r="85"
              />
              <text x="55" y="80" className="HistoryManagement-body__message--subGraph-category">
                신체활력
              </text>
              <text
                style={{fill: '#3689ce'}}
                x="35"
                y="110"
                className="HistoryManagement-body__message--subGraph-degree"
              >
                다소 부족
              </text>
            </svg>
          </div>
          <div>
            <svg
              className="circle-chart"
              viewBox="0 0 180 180"
              width="180"
              height="180"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="circle-chart__background"
                stroke="#dce2e9"
                strokeWidth="10"
                fill="none"
                cx="90"
                cy="90"
                r="85"
              />
              <circle
                className="circle-chart__circle"
                stroke="#3689ce"
                strokeWidth="10"
                strokeDasharray="100,534"
                strokeLinecap="round"
                fill="none"
                cx="90"
                cy="90"
                r="85"
              />
              <text x="55" y="80" className="HistoryManagement-body__message--subGraph-category">
                신체활력
              </text>
              <text
                style={{fill: '#3689ce'}}
                x="35"
                y="110"
                className="HistoryManagement-body__message--subGraph-degree"
              >
                다소 부족
              </text>
            </svg>
          </div>
          <div>
            <svg
              className="circle-chart"
              viewBox="0 0 180 180"
              width="180"
              height="180"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="circle-chart__background"
                stroke="#dce2e9"
                strokeWidth="10"
                fill="none"
                cx="90"
                cy="90"
                r="85"
              />
              <circle
                className="circle-chart__circle"
                stroke="#3689ce"
                strokeWidth="10"
                strokeDasharray="100,534"
                strokeLinecap="round"
                fill="none"
                cx="90"
                cy="90"
                r="85"
              />
              <text x="55" y="80" className="HistoryManagement-body__message--subGraph-category">
                신체활력
              </text>
              <text
                style={{fill: '#3689ce'}}
                x="35"
                y="110"
                className="HistoryManagement-body__message--subGraph-degree"
              >
                다소 부족
              </text>
            </svg>
          </div>
          <div>
            <svg
              className="circle-chart"
              viewBox="0 0 180 180"
              width="180"
              height="180"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="circle-chart__background"
                stroke="#dce2e9"
                strokeWidth="10"
                fill="none"
                cx="90"
                cy="90"
                r="85"
              />
              <circle
                className="circle-chart__circle"
                stroke="#3689ce"
                strokeWidth="10"
                strokeDasharray="100,534"
                strokeLinecap="round"
                fill="none"
                cx="90"
                cy="90"
                r="85"
              />
              <text x="55" y="80" className="HistoryManagement-body__message--subGraph-category">
                신체활력
              </text>
              <text
                style={{fill: '#3689ce'}}
                x="35"
                y="110"
                className="HistoryManagement-body__message--subGraph-degree"
              >
                다소 부족
              </text>
            </svg>
          </div>
        </div>
      </div>
      <div className="RecentHistory-body__sub5">
        <div
          onClick={() => {
            executeCommand('BB', 'INFO_DAUM');
            history.push('/controller/healingVideos');
          }}
        >
          다음
        </div>
      </div>
    </div>
  );
};

export default withRouter(RecentHistory);
