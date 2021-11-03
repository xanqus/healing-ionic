import "./ControlBlock.css";
import { Link } from "react-router-dom";

const ControlBlock: any = ({ imgURL }: any) => {
  return (
    <div className="ControlBlock-body__background">
      <div className="ControlBlock-body__wrapper">
        <img className="ControlBlock-body__img" src={imgURL} alt="" />
      </div>
    </div>
  );
};

export default ControlBlock;
