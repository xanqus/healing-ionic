import "./SelfDiagnosis.css";
import { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import Header from "../components/Header";
import { Radar } from "react-chartjs-2";
import { diagnosisTestData } from "./../assets/dataset/SelfDiagnosisData";

const SelfDiagnosis: React.FC = ({ history }: any) => {
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
    <div className="SelfDiagnosis-body__background">
      <Header goHome={true} />
      <div className="SelfDiagnosis-body">
        <div className="SelfDiagnosis-body__diagnosis--graph">
          <div className="SelfDiagnosis-body__diagnosis--graph-title">
            <div>
              <img src="../assets/selfDiagnosis/h-sub-icon-04.png" alt="" />
              진단그래프
            </div>
            <div>2020.01.01</div>
          </div>
          <div className="SelfDiagnosis-body__diagnosis--graph-img">
            <div>
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
            <div>
              <div>
                <div>
                  <img
                    src="../assets/selfDiagnosis/h-main-icon-05.png"
                    alt=""
                  />
                </div>
                <div>스트레스</div>
                <div>다소 높음</div>
              </div>
              <div>
                <div>
                  <img
                    src="../assets/selfDiagnosis/h-main-icon-01.png"
                    alt=""
                  />
                </div>
                <div>신체활력</div>
                <div>다소 부족</div>
              </div>
              <div>
                <div>
                  <img
                    src="../assets/selfDiagnosis/h-main-icon-02.png"
                    alt=""
                  />
                </div>
                <div>누적피로도</div>
                <div>높음</div>
              </div>
              <div>
                <div>
                  <img
                    src="../assets/selfDiagnosis/h-main-icon-03.png"
                    alt=""
                  />
                </div>
                <div>자율신경 건강도</div>
                <div>부족</div>
              </div>
            </div>
          </div>
        </div>
        <div className="SelfDiagnosis-body__diagnosis--diagnosisItems">
          <div>
            <img src="../assets/selfDiagnosis/h-sub-icon-05.png" alt="" />
            <div>자가진단</div>
          </div>
          <div>
            <div>
              <div
                className="SelfDiagnosis-body__dianosisTestBtn1"
                onClick={(e) => {
                  history.push("/DiagnosisTest", {
                    test: { ttest: "ttest", test2: "test2" },
                    truestory: "hi",
                    diagnosisTestData: diagnosisTestData[0],
                  });
                }}
              >
                PTSD
              </div>
              <div
                className="SelfDiagnosis-body__dianosisTestBtn2"
                onClick={(e) => {
                  history.push("/DiagnosisTest", {
                    diagnosisTestData: diagnosisTestData[1],
                  });
                }}
              >
                우울증
              </div>
              <div
                className="SelfDiagnosis-body__dianosisTestBtn3"
                onClick={(e) => {
                  history.push("/DiagnosisTest", {
                    diagnosisTestData: diagnosisTestData[2],
                  });
                }}
              >
                수면장애
              </div>
              <div
                className="SelfDiagnosis-body__dianosisTestBtn4"
                onClick={(e) => {
                  history.push("/DiagnosisTest", {
                    diagnosisTestData: diagnosisTestData[3],
                  });
                }}
              >
                자살
              </div>
            </div>
            <div>
              <div
                className="SelfDiagnosis-body__dianosisTestBtn5"
                onClick={(e) => {
                  history.push("/DiagnosisTest", {
                    diagnosisTestData: diagnosisTestData[4],
                  });
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  물질 남용 및 중독
                </div>
              </div>
              <div
                className="SelfDiagnosis-body__dianosisTestBtn6"
                onClick={(e) => {
                  history.push("/DiagnosisTest", {
                    diagnosisTestData: diagnosisTestData[5],
                  });
                }}
              >
                불안
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SelfDiagnosis);
