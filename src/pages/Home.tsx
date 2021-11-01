import "./Home.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="home-body__background">
      <div className="home-body__header">
        <img
          style={{ width: "50%" }}
          src="../assets/home/h-intro-img-01.png"
          alt=""
        ></img>
      </div>

      <div className="home-body__wrapper">
        <Link className="home-body__main--login" to="/login">
          로그인
        </Link>

        <Link className="home-body__main--join" to="/">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default Home;
