import "./Tab2.css";
import { Link } from "react-router-dom";

const Tab2: React.FC = () => {
  return (
    <div className="Tab2-body__background">
      <div className="Tab2-body__title">노출경험용콘텐츠</div>
      <div className="Tab2-body__img">
        <img src="../assets/controller/img-middle.png" alt="" />
      </div>
      <div className="Tab2-body__button">
        <img src="../assets/controller/button-exit-on.png" alt="" />
      </div>
    </div>
  );
};

export default Tab2;
