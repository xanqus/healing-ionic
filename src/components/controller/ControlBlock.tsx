import "./ControlBlock.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";

const ControlBlock: any = ({
  imgURLPlaying,
  imgURL,
  name,
  command,
  socket,
  blockIndex,
  setBlockIndex,
  index,
  imgURLList,
  setImgURLList,
  onImgURLList,
  defaultImgURLList,
}: any) => {
  const [test, setTest] = useState(imgURL);

  const [isPlaying, setIsPlaying] = useState(false);
  const [count, setCount] = useState(0);
  const executeCommand = (name: any, command: any) => {
    socket.emit("executeCommand", { name, command }, (data: any) => {
      console.log(data);
    });
  };

  useEffect(() => {
    console.log("isPlaying", isPlaying);
  }, [count, isPlaying]);

  console.log(blockIndex);

  return (
    <div className="ControlBlock-body__background">
      <div className="ControlBlock-body__wrapper">
        <img
          onClick={(event) => {
            executeCommand(name, command);
            console.log(event);
            setIsPlaying(!isPlaying);

            setCount(count + 1);
            isPlaying ? setTest(imgURL) : setTest(imgURLPlaying);
          }}
          className="ControlBlock-body__img"
          src={test}
          alt=""
        />
      </div>
    </div>
  );
};

export default ControlBlock;
