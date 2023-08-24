import { createContext } from "react";
import { PictureProps } from "./types";

interface MyPictureContextProperties {
    pictures: PictureProps[];
    setPictures(pictures: PictureProps[]): void;
}

export const MyPictureContext = createContext<MyPictureContextProperties>({
    pictures: [],
    setPictures: () => {},
});

export const MyPicturesContextProvider = () => {};
