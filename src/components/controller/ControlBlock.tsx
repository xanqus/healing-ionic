import "./ControlBlock.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";

const ControlBlock: any = ({
  datas,
  name,
  command,
  socket,
  index,
  setData,
  tabIndex,
  setIsPlaying,
  setCurrentPlaying,
}: any) => {
  const { imgUrl, id } = datas[index];
  console.log("id", id);
  console.log("imgUrl", imgUrl);
  const executeCommand = (name: any, command: any) => {
    socket.emit("executeCommand", { name, command }, (data: any) => {
      console.log(data);
    });
  };
  if (imgUrl === null) {
    return null;
  }

  return (
    <div className="ControlBlock-body__background">
      <div className="ControlBlock-body__wrapper">
        <img
          onClick={(event) => {
            console.log(id);
            event.preventDefault();
            executeCommand(name, command);
            setCurrentPlaying(datas[index].title);
            setData(
              datas.map((data: any) => {
                setIsPlaying(true);

                return data.id === index + tabIndex * 12
                  ? {
                      ...data,
                      imgUrl: `../assets/controller/thumnail-${
                        data.id + 1
                      }-on.png`,
                    }
                  : imgUrl === null
                  ? { ...data, imgUrl: null }
                  : {
                      ...data,
                      imgUrl: `../assets/controller/thumnail-${
                        data.id + 1
                      }-off.png`,
                    };
              })
            );
          }}
          className="ControlBlock-body__img"
          src={imgUrl}
          alt=""
        />
      </div>
    </div>
  );
};

export default ControlBlock;
