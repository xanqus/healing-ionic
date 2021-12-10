import { io } from "socket.io-client";

export const socket = io("ws://15.165.121.230:7770", {
  transports: ["websocket"],
  upgrade: false,
});
socket.connect();
export const receiveCommand = () => {
  console.log("controllerSocket", socket);
};

interface Data {
  name: string;
  command: string[];
}

type SetCallback = (cb: (data: Data) => void) => void;

export const setCallback: SetCallback = (cb) => {
  console.log("callback changed");
  socket.off("setCommand");
  socket.on("setCommand", cb);
};
