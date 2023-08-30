import { ReactNode, createContext, useState } from "react";
import { ArtCatalogProps, artStyleCatalog } from "./artStyleCatalog";
import { PictureProps } from "./types";

interface MyPictureContextProperties {
    pictures: PictureProps[];
    styleCatalog: ArtCatalogProps[];
    setStyleCatalog(styleCatalog: ArtCatalogProps[]): void;
    setPictures(pictures: PictureProps[]): void;
}

export const MyPictureContext = createContext<MyPictureContextProperties>({
    pictures: [],
    styleCatalog: [],
    setStyleCatalog: () => {},
    setPictures: () => {},
});

interface Props {
    children: ReactNode;
}

export const MyPicturesContextProvider = ({ children }: Props) => {
    const [pictures, setPictures] = useState<PictureProps[]>([
        {
            picture: "",
            upVotes: 0,
            downVotes: 0,
        },
    ]);
    const [styleCatalog, setStyleCatalog] =
        useState<ArtCatalogProps[]>(artStyleCatalog);

    return (
        <MyPictureContext.Provider
            value={{ pictures, setPictures, styleCatalog, setStyleCatalog }}
        >
            {children}
        </MyPictureContext.Provider>
    );
};
