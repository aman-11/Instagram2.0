import { atom } from "recoil";

export const modalState = atom({
  key: "modalState", //unique id for modal state
  default: false, //intial state
});
