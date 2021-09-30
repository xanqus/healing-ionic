import "./Home.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="body__background">
      <div className="body__header">
        <img
          style={{ width: "50%" }}
          src="../assets/home/h-intro-img-01.png"
          alt=""
        ></img>
      </div>
      <div className="body__wrapper">
        <Link className="body__main--login" to="/login">
          로그인
        </Link>
        <Link className="body__main--join" to="/">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default Home;
