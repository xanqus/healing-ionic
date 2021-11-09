import "./SelfDiagnosisResult.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { withRouter } from "react-router";

const SelfDiagnosisResult: React.FC = ({ location, history }: any) => {
  const {
    state: { totalScore, testName },
  } = location;

  return (
    <div className="SelfDiagnosisResult-body__background">
      <Header />
      <div className="SelfDiagnosisResult-body__title">
        <img src="../assets/selfDiagnosis/h-sub-2-icon-1.png" alt="" />
        자가진단 결과
      </div>
      <div className="SelfDiagnosisResult-body__content">
        <div className="SelfDiagnosisResult-body__content--title">
          {testName} 자가진단 결과입니다.
        </div>
        <div className="SelfDiagnosisResult-body__content--content">
          {testName} 자가 진단 결과 당신의 외상후스트레스는 정도는 다음과
          같습니다.
          <br />
          <br />
          <br />
          경험하신 사건에 대한 충격 정도가 있는 것 같습니다. 전문상담가의 도움을
          받아 보시길 바랍니다.
        </div>
      </div>
      <div
        onClick={() => {
          history.push("/selfDiagnosis");
        }}
        className="SelfDiagnosisResult-body__content--confirmButton"
      >
        확인
      </div>
    </div>
  );
};

export default withRouter(SelfDiagnosisResult);
