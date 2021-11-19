import "./QuestionBlock.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import ScoreBlock from "./ScoreBlock";

const QuestionBlock: any = ({ question, score, setScore, scoreId }: any) => {
  const scoreName = [
    "score0",
    "score1",
    "score2",
    "score3",
    "score4",
    "score5",
    "score6",
    "score7",
    "score8",
    "score9",
    "score10",
    "score11",
    "score12",
    "score13",
    "score14",
    "score15",
    "score16",
    "score17",
    "score18",
    "score19",
    "score20",
    "score21",
    "score22",
    "score23",
  ];
  const [currentCheck, setCurrentCheck] = useState(-1);
  const contentData = [
    "전혀 없다",
    "약간 있다",
    "상당히 있다",
    "많이 있다",
    "극심하게 있다",
  ];

  const checkVal = (e: any) => {
    const { name, id } = e.target;
    console.log(name, id);
    setScore({
      ...score,
      [name]: parseInt(id) + 1,
    });
  };

  const selectMenuHandler = (index: any): any => {
    setCurrentCheck(index);
  };

  return (
    <div className="QuestionBlock-body__background">
      <div className="QuestionBlock-body__question">
        <div>
          <img src="../assets/selfDiagnosis/h-sub-point.png" alt="" />
        </div>
        <div>{question}</div>
      </div>

      <div className="QuestionBlock-body__scoreBlock--cover">
        {contentData.map((ele, index) => {
          return (
            <ScoreBlock
              key={index}
              id={index}
              content={ele}
              score={score}
              setScore={setScore}
              checkVal={checkVal}
              className={
                currentCheck === index
                  ? "ScoreBlock-body__background selfTest-submenu selfTest-focused"
                  : "ScoreBlock-body__background selfTest-submenu"
              }
              name={scoreName[scoreId]}
              selectMenuHandler={selectMenuHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default QuestionBlock;
