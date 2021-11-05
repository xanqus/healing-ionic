import "./Tab2.css";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import { Link } from "react-router-dom";

const Tab2: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const socket = io("ws://15.165.121.230:7770", {
    transports: ["websocket"],
  });

  useEffect(() => {
    socket.on("connect", function () {
      console.log("Connected");
    });

    socket.on("sessionStart", function (data) {
      console.log(data);
    });
  });
  const executeCommand = (name: any, command: any) => {
    socket.emit("executeCommand", { name, command }, (data: any) => {
      console.log(data);
    });
  };

  return (
    <div className="Tab2-body__background">
      <div className="Tab2-body__title">노출경험용콘텐츠</div>
      <div className="Tab2-body__img">
        <img src="../assets/controller/img-middle.png" alt="" />
      </div>
      <div className="Tab2-body__button">
        <img
          src={
            isPlaying
              ? "../assets/controller/button-exit-on.png"
              : "../assets/controller/button-start-on.png"
          }
          alt=""
          onClick={() => {
            setIsPlaying(!isPlaying);
            isPlaying
              ? executeCommand("page3", "first")
              : executeCommand("page2", "start");
          }}
        />
      </div>
    </div>
  );
};

export default Tab2;
