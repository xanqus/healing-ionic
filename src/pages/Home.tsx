import "./Home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SignInModal from "./../components/SIgnInModal";
import axios from "axios";

const Home: React.FC = () => {
  useEffect(() => {
    const createUser = async () => {
      /*const data = await axios.post("http://15.165.121.230:3000/api/users", {
        username: "testuser1234",
        password: "password",
        name: "name",
        gender: "male",
        age_range: "10",
        occupation: "aa",
        emp_period_range: "dd",
      });
      console.log(data);*/
    };

    const login = async () => {
      const data = await axios.post(
        "http://15.165.121.230:3000/api/users/login",
        {
          username: "testuser1234",
          password: "password",
        }
      );
      const {
        data: { user },
      } = data;
      console.log(user);
    };
    //createUser();
    //login();
  }, []);
  const [modalState, setModalState] = useState(false);
  const openModal = () => {
    setModalState(true);
  };

  const closeModal = (event: any) => {
    event.preventDefault();
    setModalState(false);
  };
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

        <Link
          onClick={() => {
            openModal();
          }}
          className="home-body__main--join"
          to="/"
        >
          회원가입
        </Link>
        <SignInModal state={modalState} closeModal={closeModal} />
      </div>
    </div>
  );
};

export default Home;
