import { atom } from "recoil";

export const taskListState = atom({
  key: 'taskList',
  default: []
})