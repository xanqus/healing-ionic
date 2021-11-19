import "./DiagnosisTest.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import QuestionBlock from "./../components/QuestionBlock";
import { useState, useEffect } from "react";
import { withRouter } from "react-router";

const DiagnosisTest: React.FC = ({ location, history }: any) => {
  //구조분해할당 예시
  const {
    state: {
      /*test: { test2, ttest },
      truestory,*/
      diagnosisTestData: { testName, questions },
    },
  } = location;

  const [score, setScore] = useState<any>({
    score0: -1,
    score1: -1,
    score2: -1,
    score3: -1,
    score4: -1,
    score5: -1,
    score6: -1,
    score7: -1,
    score8: -1,
    score9: -1,
    score10: -1,
    score11: -1,
    score12: -1,
    score13: -1,
    score14: -1,
    score15: -1,
    score16: -1,
    score17: -1,
    score18: -1,
    score19: -1,
    score20: -1,
    score21: -1,
    score22: -1,
    score23: -1,
  });

  const getTotalScore = () => {
    let totalScore = 0;
    for (let i = 0; i < Object.keys(score).length; i++) {
      totalScore = totalScore + score[`score${i}`];
    }
    return totalScore;
  };

  return (
    <div className="DiagnosisTest-body__background">
      <Header />
      {/*getTotalScore()*/}
      <div className="DiagnosisTest-body__title">
        <img src="../assets/selfDiagnosis/h-sub-icon-05.png" alt="" />
        {testName} 자가진단
      </div>
      <div className="DiagnosisTest-body__content--background">
        {questions.map((ele: any, index: any) => {
          if (ele === null) {
            return <div key={index}>hi</div>;
          } else {
            return (
              <QuestionBlock
                scoreId={index}
                key={index}
                question={questions[index]}
                score={score}
                setScore={setScore}
              />
            );
          }
        })}
      </div>
      <div
        onClick={() => {
          for (let i = 0; i < questions.length; i++) {
            if (score[`score${i}`] === -1) {
              alert("빈칸을 다 채워주세요.");
              return false;
            }
          }
          ////////////////////////////////////////////////
          history.push("/selfDiagnosisResult", {
            totalScore: getTotalScore(),
            testName,
          });
        }}
        className="DiagnosisTest-body__test--submit"
      >
        제출하기
      </div>
    </div>
  );
};

export default withRouter(DiagnosisTest);
