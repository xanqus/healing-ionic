import "./QR.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { withRouter } from "react-router";

const QR: React.FC = ({ history }: any) => {
  return (
    <div className="QR-body__background">
      <Header />
      <div style={{ width: "90%", height: "400px" }}>
        <img
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          src="../assets/QR/QR.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default withRouter(QR);
