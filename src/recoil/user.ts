import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userLoginState = atom({
  key: "loginInfo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
