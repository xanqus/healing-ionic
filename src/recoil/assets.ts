import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const screenWidthState = atom({
  key: "screenWidth",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const screenHeightState = atom({
  key: "screenHeight",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
