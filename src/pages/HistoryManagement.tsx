import "./HistoryManagement.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const HistoryManagement: React.FC = () => {
  return (
    <div className="HistoryManagement-body__background">
      <Header />
      이력 관리
    </div>
  );
};

export default HistoryManagement;
