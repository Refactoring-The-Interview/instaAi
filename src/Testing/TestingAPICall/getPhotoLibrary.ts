import { PictureProps } from "../../Components/Context/types";
import lion from "../TestingPhotoSet/Lion.png";
import lionF from "../TestingPhotoSet/LionFull.png";
import animeMan from "../TestingPhotoSet/animeMan.png";

// picture: string;
// upVotes: number;
// downVotes: number;
// id: number;
// name: string;
// isFavorite: boolean;

export const getPhotoLibrary = () => {
    const Library: PictureProps[] = [
        {
            picture: lion,
            upVotes: 12,
            downVotes: 1,
            id: 0,
            name: "Lion",
            isFavorite: false,
        },
        {
            picture: lionF,
            upVotes: 12,
            downVotes: 1,
            id: 1,
            name: "Lion Full",
            isFavorite: true,
        },
        {
            picture: animeMan,
            upVotes: 12,
            downVotes: 1,
            id: 2,
            name: "Veteran adventurer",
            isFavorite: false,
        },
    ];

    return Library;
};
