import "./Tab1.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ControlBlock from "./ControlBlock";
import Carousel from "react-elastic-carousel";
import io from "socket.io-client";

const Tab1: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [blockIndex, setBlockIndex] = useState(0);
  const [test, setTest] = useState("");

  const defaultImgURLList = [
    "../assets/controller/thumnail-01-cat-off.png",
    "../assets/controller/thumnail-02-dog-off.png",
    "../assets/controller/thumnail-03-wild-off.png",
    "../assets/controller/thumnail-04-bird-off.png",
  ];

  const onImgURLList = [
    "../assets/controller/thumnail-01-cat-on.png",
    "../assets/controller/thumnail-02-dog-on.png",
    "../assets/controller/thumnail-03-wild-on.png",
    "../assets/controller/thumnail-04-bird-on.png",
    "../assets/controller/thumnail-05-bird-on.png",
    "../assets/controller/thumnail-06-sea-on.png",
    "../assets/controller/thumnail-07-sea-on.png",
    "../assets/controller/thumnail-08-sea-on.png",
    "../assets/controller/thumnail-09-sea-on.png",
    "../assets/controller/thumnail-10-sea-on.png",
    "../assets/controller/thumnail-01-lifestyle-on.png",
    "../assets/controller/thumnail-07-lifestyle-on.png",
    "../assets/controller/thumnail-01-food-on.png",
    "../assets/controller/thumnail-02-food-on.png",
    "../assets/controller/thumnail-03-food-on.png",
    "../assets/controller/thumnail-04-food-on.png",
    "../assets/controller/thumnail-05-food-on.png",
    "../assets/controller/thumnail-06-food-on.png",
    "../assets/controller/thumnail-07-food-on.png",
    "../assets/controller/thumnail-08-food-on.png",
    "../assets/controller/thumnail-09-food-on.png",
    "../assets/controller/thumnail-10-food-on.png",
    "../assets/controller/thumnail-01-nature-on.png",
    "../assets/controller/thumnail-02-nature-on.png",
    "../assets/controller/thumnail-03-nature-on.png",
    "../assets/controller/thumnail-04-nature-on.png",
    "../assets/controller/thumnail-05-nature-on.png",
    "../assets/controller/thumnail-06-nature-on.png",
    "../assets/controller/thumnail-07-nature-on.png",
    "../assets/controller/thumnail-08-nature-on.png",
    "../assets/controller/thumnail-01-particle-on.png",
    "../assets/controller/thumnail-02-particle-on.png",
    "../assets/controller/thumnail-03-particle-on.png",
    "../assets/controller/thumnail-04-particle-on.png",
    "../assets/controller/thumnail-05-particle-on.png",
  ];

  const [imgURLList, setImgURLList] = useState([
    "../assets/controller/thumnail-01-cat-off.png",
    "../assets/controller/thumnail-02-dog-off.png",
    "../assets/controller/thumnail-03-wild-off.png",
    "../assets/controller/thumnail-04-bird-off.png",
  ]);

  const socket = io("ws://15.165.121.230:7770", {
    transports: ["websocket"],
  });

  const executeCommand = (name: any, command: any) => {
    socket.emit("executeCommand", { name, command }, (data: any) => {
      console.log(data);
    });
  };

  useEffect(() => {
    console.log(onImgURLList[3]);
    socket.on("connect", function () {
      console.log("Connected");
    });

    socket.on("sessionStart", function (data) {
      console.log(data);
    });
  });
  return (
    <div className="Tab1-body__background">
      <Carousel isRTL={false} itemsToShow={1}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="Tab1-body__blockWrapper">
            {imgURLList.map((ele, index) => {
              return (
                <ControlBlock
                  key={index}
                  name="page8"
                  command="play1"
                  index={index}
                  imgURL={imgURLList[index]}
                  socket={socket}
                />
              );
            })}
            {/*
            <ControlBlock
              socket={socket}
              name="page8"
              command="play1"
              imgURL="../assets/controller/thumnail-01-cat-off.png"
              imgURLPlaying="../assets/controller/thumnail-01-cat-on.png"
              blockIndex={blockIndex}
              setBlockIndex={setBlockIndex}
              index={0}
              imgURLList={imgURLList}
              setImgURLList={setImgURLList}
              defaultImgURLList={defaultImgURLList}
              onImgURLList={onImgURLList}
              test={test}
              setTest={setTest}
            />
            <ControlBlock
              socket={socket}
              name="page8"
              command="play2"
              imgURL="../assets/controller/thumnail-02-dog-off.png"
              imgURLPlaying="../assets/controller/thumnail-02-dog-on.png"
              setBlockIndex={setBlockIndex}
              index={1}
              imgURLList={imgURLList}
              setImgURLList={setImgURLList}
              defaultImgURLList={defaultImgURLList}
              onImgURLList={onImgURLList}
              test={test}
              setTest={setTest}
            />
            
            <ControlBlock
              socket={socket}
              name="page8"
              command="play3"
              imgURL="../assets/controller/thumnail-03-wild-off.png"
              index={2}
              imgURLPlaying={onImgURLList[2]}
              imgURLList={imgURLList}
            />
          </div>
          <div className="Tab1-body__blockWrapper">
            <ControlBlock
              socket={socket}
              name="page8"
              command="play4"
              imgURL="../assets/controller/thumnail-04-bird-off.png"
              index={3}
              imgURLPlaying={onImgURLList[3]}
              imgURLList={imgURLList}
            />
            <ControlBlock
              socket={socket}
              name="page8"
              command="play5"
              imgURL="../assets/controller/thumnail-05-bird-off.png"
              index={4}
              imgURLPlaying={onImgURLList[4]}
              imgURLList={imgURLList}
            />
            <ControlBlock
              socket={socket}
              name="page8"
              command="play6"
              imgURL="../assets/controller/thumnail-06-sea-off.png"
              index={5}
              imgURLPlaying={onImgURLList[5]}
              imgURLList={imgURLList}
            />
          </div>
          <div className="Tab1-body__blockWrapper">
            <ControlBlock
              socket={socket}
              name="page8"
              command="play7"
              imgURL="../assets/controller/thumnail-07-sea-off.png"
              index={6}
              imgURLPlaying={onImgURLList[6]}
              imgURLList={imgURLList}
            />
            <ControlBlock
              socket={socket}
              name="page8"
              command="play8"
              imgURL="../assets/controller/thumnail-08-sea-off.png"
              index={7}
              imgURLPlaying={onImgURLList[7]}
              imgURLList={imgURLList}
            />
            <ControlBlock
              socket={socket}
              name="page8"
              command="play9"
              imgURL="../assets/controller/thumnail-09-sea-off.png"
              index={8}
              imgURLPlaying={onImgURLList[8]}
              imgURLList={imgURLList}
            />
          </div>
          <div className="Tab1-body__blockWrapper">
            <ControlBlock
              socket={socket}
              name="page8"
              command="play10"
              imgURL="../assets/controller/thumnail-10-sea-off.png"
              index={9}
              imgURLPlaying={onImgURLList[9]}
              imgURLList={imgURLList}
            />
            <ControlBlock
              name="page8"
              command="play11"
              imgURL="../assets/controller/thumnail-01-lifestyle-off.png"
              index={10}
              imgURLPlaying={onImgURLList[10]}
              imgURLList={imgURLList}
            />
            <ControlBlock
              name="page8"
              command="play12"
              imgURL="../assets/controller/thumnail-07-lifestyle-off.png"
              index={11}
              imgURLPlaying={onImgURLList[11]}
              imgURLList={imgURLList}
            />
            */}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="Tab1-body__blockWrapper">
            {/*
            <ControlBlock
              socket={socket}
              name="page8"
              command="play13"
              imgURL="../assets/controller/thumnail-01-food-off.png"
              index={12}
              imgURLPlaying={onImgURLList[12]}
              imgURLList={imgURLList}
            />
            <ControlBlock
              socket={socket}
              name="page8"
              command="play14"
              imgURL="../assets/controller/thumnail-02-food-off.png"
              index={13}
              imgURLPlaying={onImgURLList[13]}
              imgURLList={imgURLList}
            />
            <ControlBlock
              socket={socket}
              name="page8"
              command="play15"
              imgURL="../assets/controller/thumnail-03-food-off.png"
              index={14}
              imgURLPlaying={onImgURLList[14]}
              imgURLList={imgURLList}
            />
          </div>
          <div className="Tab1-body__blockWrapper">
            <ControlBlock
              socket={socket}
              name="page8"
              command="play16"
              imgURL="../assets/controller/thumnail-04-food-off.png"
              index={15}
              imgURLPlaying={onImgURLList[15]}
              imgURLList={imgURLList}
            />
            <ControlBlock
              socket={socket}
              name="page8"
              command="play17"
              imgURL="../assets/controller/thumnail-05-food-off.png"
              index={16}
              imgURLPlaying={onImgURLList[16]}
              imgURLList={imgURLList}
            />
            <ControlBlock
              socket={socket}
              name="page8"
              command="play18"
              imgURL="../assets/controller/thumnail-06-food-off.png"
              index={17}
              imgURLPlaying={onImgURLList[17]}
              imgURLList={imgURLList}
            />
          </div>
          <div className="Tab1-body__blockWrapper">
            <ControlBlock
              socket={socket}
              name="page8"
              command="play19"
              imgURL="../assets/controller/thumnail-07-food-off.png"
              index={18}
              imgURLPlaying={onImgURLList[18]}
              imgURLList={imgURLList}
            />
            <ControlBlock
              socket={socket}
              name="page8"
              command="play20"
              imgURL="../assets/controller/thumnail-08-food-off.png"
              index={19}
              imgURLPlaying={onImgURLList[19]}
              imgURLList={imgURLList}
            />
            <ControlBlock
              socket={socket}
              name="page8"
              command="play21"
              imgURL="../assets/controller/thumnail-09-food-off.png"
              index={20}
              imgURLPlaying={onImgURLList[20]}
              imgURLList={imgURLList}
            />
          </div>
          <div className="Tab1-body__blockWrapper">
            <ControlBlock
              socket={socket}
              name="page8"
              command="play22"
              imgURL="../assets/controller/thumnail-10-food-off.png"
              index={21}
              imgURLPlaying={onImgURLList[21]}
              imgURLList={imgURLList}
            />
            <ControlBlock
              name="page8"
              command="play23"
              imgURL="../assets/controller/thumnail-01-nature-off.png"
              index={22}
              imgURLPlaying={onImgURLList[22]}
              imgURLList={imgURLList}
            />
            <ControlBlock
              name="page8"
              command="play24"
              imgURL="../assets/controller/thumnail-02-nature-off.png"
              index={23}
              imgURLPlaying={onImgURLList[23]}
              imgURLList={imgURLList}
            />
           */}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="Tab1-body__blockWrapper">
            {/*
            <ControlBlock
              socket={socket}
              name="page8"
              command="play25"
              imgURL="../assets/controller/thumnail-03-nature-off.png"
              index={24}
              imgURLPlaying={onImgURLList[24]}
              imgURLList={imgURLList}
            />
            <ControlBlock
              socket={socket}
              name="page8"
              command="play26"
              imgURL="../assets/controller/thumnail-04-nature-off.png"
              index={25}
              imgURLPlaying={onImgURLList[25]}
              imgURLList={imgURLList}
            />
            <ControlBlock
              socket={socket}
              name="page8"
              command="play27"
              imgURL="../assets/controller/thumnail-05-nature-off.png"
              index={26}
              imgURLPlaying={onImgURLList[26]}
              imgURLList={imgURLList}
            />
          </div>
          <div className="Tab1-body__blockWrapper">
            <ControlBlock
              socket={socket}
              name="page8"
              command="play28"
              imgURL="../assets/controller/thumnail-06-nature-off.png"
              index={27}
              imgURLPlaying={onImgURLList[27]}
              imgURLList={imgURLList}
            />
            <ControlBlock
              socket={socket}
              name="page8"
              command="play29"
              imgURL="../assets/controller/thumnail-07-nature-off.png"
              index={28}
              imgURLPlaying={onImgURLList[28]}
              imgURLList={imgURLList}
            />
            <ControlBlock
              socket={socket}
              name="page8"
              command="play30"
              imgURL="../assets/controller/thumnail-08-nature-off.png"
              index={29}
              imgURLPlaying={onImgURLList[29]}
              imgURLList={imgURLList}
            />
          </div>
          <div className="Tab1-body__blockWrapper">
            <ControlBlock
              socket={socket}
              name="page8"
              command="play31"
              imgURL="../assets/controller/thumnail-01-particle-off.png"
              index={30}
              imgURLPlaying={onImgURLList[30]}
              imgURLList={imgURLList}
            />
            <ControlBlock
              socket={socket}
              name="page8"
              command="play32"
              imgURL="../assets/controller/thumnail-02-particle-off.png"
              index={31}
              imgURLPlaying={onImgURLList[31]}
              imgURLList={imgURLList}
            />
            <ControlBlock
              socket={socket}
              name="page8"
              command="play33"
              imgURL="../assets/controller/thumnail-03-particle-off.png"
              index={32}
              imgURLPlaying={onImgURLList[32]}
              imgURLList={imgURLList}
            />
          </div>
          <div className="Tab1-body__blockWrapper">
            <ControlBlock
              socket={socket}
              name="page8"
              command="play34"
              imgURL="../assets/controller/thumnail-04-particle-off.png"
              index={33}
              imgURLPlaying={onImgURLList[33]}
              imgURLList={imgURLList}
            />
            <ControlBlock
              name="page8"
              command="play35"
              imgURL="../assets/controller/thumnail-05-particle-off.png"
              index={34}
              imgURLPlaying={onImgURLList[34]}
              imgURLList={imgURLList}
            />
            */}
          </div>
        </div>
      </Carousel>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "50px",
          backgroundColor: "blue",
          borderRadius: "30px",
          overflow: "hidden",
        }}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src="../assets/controller/button-back-on.png"
          alt=""
          onClick={() => {
            setImgURLList(defaultImgURLList);
            executeCommand("page8", "before");
            console.log(blockIndex);
          }}
        />
      </div>

      {/*<div className="Tab1-body__content--controller-wrapper">
        <div className="Tab1-body__content--controller">
          <div className="Tab1-body__content--controller-topWrapper">
            <div className="Tab1-body__content--controller-title">자연</div>
            <div className="Tab1-body__content--controller-buttons">
              <div className="Tab1-body__content--controller-buttons-heart">
                <img
                  src="../assets/controller/bar-button-heart-on.png"
                  alt=""
                />
              </div>
              <div className="Tab1-body__content--controller-buttons-prev">
                <img src="../assets/controller/bar-button-past-on.png" alt="" />
              </div>
              <div className="Tab1-body__content--controller-buttons-playPause">
                <img src="../assets/controller/bar-button-play-on.png" alt="" />
              </div>
              <div className="Tab1-body__content--controller-buttons-next">
                <img src="../assets/controller/bar-button-next-on.png" alt="" />
              </div>
            </div>
          </div>
          <div className="Tab1-body__content--controller-timeline">
            <input
              className="Tab1-body__content--controller-timeline-input"
              type="range"
              defaultValue={0}
            />
          </div>
          <div className="Tab1-body__content--controller-bottomWrapper">
            <div className="Tab1-body__content--controller-currentTime">
              0:00
            </div>
            <div className="Tab1-body__content--controller-maxTime">3:00</div>
          </div>
        </div>
  </div>*/}
    </div>
  );
};

export default Tab1;
