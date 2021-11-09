import "./HistoryManagement.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Bar, Radar } from "react-chartjs-2";

const HistoryManagement: React.FC = () => {
  const barData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "이용 전",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(191,199,213,1)",
          "rgba(191,199,213,1)",
          "rgba(191,199,213,1)",
          "rgba(191,199,213,1)",
          "rgba(191,199,213,1)",
          "rgba(191,199,213,1)",
        ],
        borderColor: [
          "rgba(191,199,213,1)",
          "rgba(191,199,213,1)",
          "rgba(191,199,213,1)",
          "rgba(191,199,213,1)",
          "rgba(191,199,213,1)",
          "rgba(191,199,213,1)",
        ],
        borderWidth: 1,
      },
      {
        label: "이용 후",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(35,133,255,1)",
          "rgba(35,133,255,1)",
          "rgba(35,133,255,1)",
          "rgba(35,133,255,1)",
          "rgba(35,133,255,1)",
          "rgba(35,133,255,1)",
        ],
        borderColor: [
          "rgba(35,133,255,1)",
          "rgba(35,133,255,1)",
          "rgba(35,133,255,1)",
          "rgba(35,133,255,1)",
          "rgba(35,133,255,1)",
          "rgba(35,133,255,1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const data = {
    labels: [
      "자율신경 균형도",
      "신체활력",
      "누적피로도",
      "자율신경 건강도",
      "심장건강도",
      "스트레스",
    ],
    datasets: [
      {
        backgroundColor: "rgba(55,169,242,0.75)",
        borderColor: "rgba(35,118,255,1)",
        borderWidth: 2,
        pointRadius: 0,
        data: [65, 59, 80, 81, 56, 55],
      },
    ],
  };
  return (
    <div className="HistoryManagement-body__background">
      <div className="HistoryMangement-header__background">
        <Header />
        <div>
          <img src="../assets/historyManagement/h-sub-img-12.png" alt="" />{" "}
          오늘의 My 힐링
        </div>
      </div>
      {/*carousel 수정해야함*/}
      <div className="HistoryManagement-body__carousel">
        <div>
          <div>
            <img src="../assets/healingSounds/h-sub-soc-1.png" alt="" />
          </div>
          <div>조용한 시계소리</div>
          <div>3회 감상</div>
        </div>
        <div>
          <div>
            <img src="../assets/healingSounds/h-sub-soc-2.png" alt="" />
          </div>
          <div>연인과 걷는 푸른 추억</div>
          <div>1회 감상</div>
        </div>
        <div>
          <div>
            <img src="../assets/healingSounds/h-sub-soc-3.png" alt="" />
          </div>
          <div>비내리는 밤</div>
          <div>1회 감상</div>
        </div>
      </div>
      <div className="HistoryManagement-body__message">
        <div className="HistoryManagement-body__message--title">
          <img src="../assets/historyManagement/h-sub-img-15.png" alt="" />{" "}
          김치중 님에게 전하는 힐링 카운슬링
        </div>
        <div className="HistoryManagement-body__message--content">
          스트레스가 다소 높으니 마음을 편안하게 힐링하시는 것이 어떨까요?
          <br />
          신체 활동이 다소 부족하여 꾸준히 운동을 해보시는 것이 좋을 것
          같습니다. 가끔은 맑은 <br /> 공기를 마시며 편안한 휴식을 취해 보세요.
          <br />
          추천 힐링 콘텐츠로 마음의 휴식을 취해보는 것도 좋을 것 같아요.
        </div>
        <div className="HistoryManagement-body__message--recommend">
          <div>
            <img src="../assets/historyManagement/h-sub-img-16.png" alt="" />
            녹음이 어린 폭포
          </div>
          <div>
            <img src="../assets/historyManagement/h-sub-img-16.png" alt="" />
            별빛이 내리는 밤
          </div>
          <div>
            <img src="../assets/historyManagement/h-sub-img-16.png" alt="" />
            조용한 시계소리
          </div>
        </div>
      </div>
      <div className="HistoryManagement-body__message--mainGraph">
        <Radar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false,
            layout: { padding: { top: 20, bottom: 20 } },
            scales: {
              r: {
                angleLines: { color: "#d9dfea" },
                grid: { color: "#d9dfea" },
                suggestedMin: 10,
                suggestedMax: 100,
                pointLabels: {
                  color: "#2385ff",
                  font: { size: 10 },
                },

                ticks: {
                  callback: function (value, index, values) {
                    return "";
                  },
                },
              },
            },
            plugins: {
              legend: { display: false },
            },
          }}
        />
      </div>
      <div className="HistoryManagement-body__message--subGraph">
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
                stroke="#9ca4e5"
                strokeWidth="10"
                strokeDasharray="400,534"
                strokeLinecap="round"
                fill="none"
                cx="90"
                cy="90"
                r="85"
              />
              <text
                x="55"
                y="80"
                className="HistoryManagement-body__message--subGraph-category"
              >
                스트레스
              </text>
              <text
                style={{ fill: "#7f89dd" }}
                x="35"
                y="110"
                className="HistoryManagement-body__message--subGraph-degree"
              >
                다소 높음
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
                stroke="#3caeab"
                strokeWidth="10"
                strokeDasharray="250,534"
                strokeLinecap="round"
                fill="none"
                cx="90"
                cy="90"
                r="85"
              />
              <text
                x="55"
                y="80"
                className="HistoryManagement-body__message--subGraph-category"
              >
                심장건강도
              </text>
              <text
                style={{ fill: "#3caeab" }}
                x="62.5"
                y="115"
                className="HistoryManagement-body__message--subGraph-degree"
              >
                보통
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
                stroke="#cd7950"
                strokeWidth="10"
                strokeDasharray="80,534"
                strokeLinecap="round"
                fill="none"
                cx="90"
                cy="90"
                r="85"
              />
              <text
                x="35"
                y="80"
                className="HistoryManagement-body__message--subGraph-category"
              >
                자율신경 건강도
              </text>
              <text
                style={{ fill: "#cd7950" }}
                x="65"
                y="110"
                className="HistoryManagement-body__message--subGraph-degree"
              >
                부족
              </text>
            </svg>
          </div>
        </div>
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
                stroke="#e03232"
                strokeWidth="10"
                strokeDasharray="480,534"
                strokeLinecap="round"
                fill="none"
                cx="90"
                cy="90"
                r="85"
              />
              <text
                x="55"
                y="80"
                className="HistoryManagement-body__message--subGraph-category"
              >
                누적피로도
              </text>
              <text
                style={{ fill: "#e03232" }}
                x="65"
                y="110"
                className="HistoryManagement-body__message--subGraph-degree"
              >
                높음
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
              <text
                x="55"
                y="80"
                className="HistoryManagement-body__message--subGraph-category"
              >
                신체활력
              </text>
              <text
                style={{ fill: "#3689ce" }}
                x="35"
                y="110"
                className="HistoryManagement-body__message--subGraph-degree"
              >
                다소 부족
              </text>
            </svg>
          </div>
          <div className="test">
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
                stroke="#3caeab"
                strokeWidth="10"
                strokeDasharray="280,534"
                strokeLinecap="round"
                fill="none"
                cx="90"
                cy="90"
                r="85"
              />
            </svg>
            <div>자율신경 균형도</div>
            <div>정상</div>
          </div>
        </div>
      </div>
      <div className="HistoryManagement-body__message--changeGraph-cover">
        <div className="HistoryManagement-body__message--changeGraph">
          <div>
            <img src="../assets/historyManagement/h-sub-img-19.png" alt="" />
            힐링룸 이용 후 변화 수치
          </div>
          <div>
            <Bar
              data={barData}
              width={100}
              height={50}
              options={{
                maintainAspectRatio: false, // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
              }}
            />
          </div>
        </div>
      </div>
      <div className="HistoryManagement-body__message--recommendMusic-cover">
        <div>
          <div>
            <img src="../assets/historyManagement/h-sub-img-22.png" alt="" />
            추천 힐링 음원
          </div>
          <div>
            <div>
              <img src="../assets/historyManagement/h-sub-img-24.png" alt="" />
            </div>
            <div>
              <img src="../assets/historyManagement/h-sub-img-25.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="HistoryManagement-body__message--recommendVideo-cover">
        <div>
          <div>
            <img src="../assets/historyManagement/h-sub-img-23.png" alt="" />
            추천 힐링 영상
          </div>
          <div>
            <div>
              <img src="../assets/historyManagement/h-sub-img-24.png" alt="" />
            </div>
            <div>
              <img src="../assets/historyManagement/h-sub-img-26.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryManagement;
