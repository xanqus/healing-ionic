import "./Tab1.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ControlBlock from "./ControlBlock";
import Carousel from "react-elastic-carousel";
import io from "socket.io-client";

import { defaultDataSet1, defaultDataSet2, defaultDataSet3 } from "./dataset";

const Tab1: React.FC = () => {
  const defaultData1 = defaultDataSet1;
  const [data1, setData1] = useState(defaultDataSet1);
  const defaultData2 = defaultDataSet2;
  const [data2, setData2] = useState(defaultDataSet2);
  const defaultData3 = defaultDataSet3;
  const [data3, setData3] = useState(defaultDataSet3);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlaying, setCurrentPlaying] = useState(-1);
  const socket = io("ws://15.165.121.230:7770", {
    transports: ["websocket"],
  });

  const executeCommand = (name: any, command: any) => {
    socket.emit("executeCommand", { name, command }, (data: any) => {
      console.log(data);
    });
  };

  useEffect(() => {
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
        <div className="Tab1-body__content--background">
          {data1.map((ele, index) => {
            console.log(ele);
            return (
              <ControlBlock
                key={index}
                socket={socket}
                name="page8"
                command={`play${ele.id + 1}`}
                datas={data1}
                setData={setData1}
                index={index}
                tabIndex={0}
              />
            );
          })}
        </div>
        <div className="Tab1-body__content--background">
          {data2.map((ele, index) => {
            return (
              <ControlBlock
                key={index}
                socket={socket}
                name="page8"
                command={`play${ele.id + 1}`}
                datas={data2}
                setData={setData2}
                index={index}
                tabIndex={1}
              />
            );
          })}
        </div>
        <div className="Tab1-body__content--background">
          {data3.map((ele, index) => {
            return (
              <ControlBlock
                key={index}
                socket={socket}
                name="page8"
                command={`play${ele.id + 1}`}
                datas={data3}
                setData={setData3}
                index={index}
                tabIndex={2}
              />
            );
          })}
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
            executeCommand("page8", "before");
            setData1(
              data1.map((data: any): any => {
                return {
                  ...defaultData1[data.id],
                };
              })
            );
            setData2(
              data1.map((data: any): any => {
                return {
                  ...defaultData2[data.id],
                };
              })
            );
            setData3(
              data1.map((data: any): any => {
                return {
                  ...defaultData3[data.id],
                };
              })
            );
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
