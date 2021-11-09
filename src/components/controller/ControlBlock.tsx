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
}: any) => {
  const { imgUrl, id } = datas[index];

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
            setData(
              datas.map((data: any) => {
                console.log("did", data.id);
                console.log(
                  `../assets/controller/thumnail-${data.id + 1}-on.png`
                );
                return data.id === index + tabIndex * 12
                  ? {
                      ...data,
                      imgUrl: `../assets/controller/thumnail-${
                        data.id + 1
                      }-on.png`,
                    }
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
