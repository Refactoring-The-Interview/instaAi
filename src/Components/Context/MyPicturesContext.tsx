import { ReactNode, createContext, useState } from "react";
import { ArtCatalogProps, artStyleCatalog, styleTags } from "./artStyleCatalog";
import { PictureProps } from "./types";

interface MyPictureContextProperties {
    pictures: PictureProps[];
    styleCatalog: ArtCatalogProps[];
    catalogFilterTag: styleTags;
    setStyleCatalog(styleCatalog: ArtCatalogProps[]): void;
    setPictures(pictures: PictureProps[]): void;
    setCatalogFilterTag(tag: styleTags): void;
}

export const MyPictureContext = createContext<MyPictureContextProperties>({
    pictures: [],
    styleCatalog: [],
    catalogFilterTag: styleTags.all,
    setStyleCatalog: () => {},
    setPictures: () => {},
    setCatalogFilterTag: () => {},
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

    const [catalogFilterTag, setCatalogFilterTag] = useState<styleTags>(
        styleTags.all,
    );

    return (
        <MyPictureContext.Provider
            value={{
                pictures,
                setPictures,
                styleCatalog,
                setStyleCatalog,
                catalogFilterTag,
                setCatalogFilterTag,
            }}
        >
            {children}
        </MyPictureContext.Provider>
    );
};
