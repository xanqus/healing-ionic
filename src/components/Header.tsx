import "./Header.css";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const Header: React.FC = ({ history }: any) => {
  return (
    <div className="Header-body__background">
      <div className="Header-body__homeButton">
        <img
          className="Header-body__homeButton--img"
          src="../assets/header/h-main-home.png"
          alt=""
          onClick={() => {
            history.push("/main");
          }}
        />
      </div>
      <div className="Header-body__logo">
        <img
          className="Header-body__logo--img"
          src="../assets/header/h-main-title.png"
          alt=""
        />
      </div>
      <div className="Header-body__menuWrapper">
        <div className="Header-body__QRButton">
          <img
            className="Header-body__QRButton--img"
            src="../assets/header/h-main-img-01.png"
            alt=""
            onClick={() => {
              history.push("/QR");
            }}
          />
        </div>
        <div className="Header-body__menuButton">
          <img
            className="Header-body__menuButton--img"
            src="../assets/header/h-main-img-00.png"
            alt=""
            onClick={() => {
              alert("menu");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
