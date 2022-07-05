import { atom } from "recoil";

export const navState = atom({
    key: "navState",
    default: false
});

export const designState = atom({
    key: "designState",
    default: "motion"
});