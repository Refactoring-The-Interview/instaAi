import { ReactNode, createContext, useState } from "react";
import { PictureProps } from "./types";

interface MyPictureContextProperties {
    pictures: PictureProps[];
    setPictures(pictures: PictureProps[]): void;
}

export const MyPictureContext = createContext<MyPictureContextProperties>({
    pictures: [],
    setPictures: () => {},
});

interface Props {
    children: ReactNode;
}

export const MyPicturesContextProvider = ({ children }: Props) => {
    const [pictures, setPictures] = useState<PictureProps[]>([
        {
            upVotes: 0,
            downVotes: 0,
        },
    ]);

    return (
        <MyPictureContext.Provider value={{ pictures, setPictures }}>
            {children}
        </MyPictureContext.Provider>
    );
};
