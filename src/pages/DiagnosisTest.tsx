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
    score0: 0,
    score1: 0,
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
      <div className="DiagnosisTest-body__title">
        <img src="../assets/selfDiagnosis/h-sub-icon-05.png" alt="" />
        {testName} 자가진단
      </div>
      <div className="DiagnosisTest-body__content--background">
        {questions.map((ele: any, index: any) => {
          return (
            <QuestionBlock
              scoreId={index}
              key={index}
              question={questions[index]}
              score={score}
              setScore={setScore}
            />
          );
        })}
      </div>
      <div
        onClick={() => {
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
