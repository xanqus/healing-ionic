import "./SelfDiagnosis.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const SelfDiagnosis: React.FC = () => {
  return (
    <div className="SelfDiagnosis-body__background">
      <Header />
      <div className="SelfDiagnosis-body">
        <div className="SelfDiagnosis-body__diagnosis--graph">
          <div className="SelfDiagnosis-body__diagnosis--graph-title">
            <div>
              <img src="../assets/selfDiagnosis/h-sub-icon-04.png" alt="" />
              진단그래프
            </div>
            <div></div>
          </div>
          <div className="SelfDiagnosis-body__diagnosis--graph-img"></div>
        </div>
        <div className="SelfDiagnosis-body__diagnosis--diagnosisItems"></div>
      </div>
    </div>
  );
};

export default SelfDiagnosis;
