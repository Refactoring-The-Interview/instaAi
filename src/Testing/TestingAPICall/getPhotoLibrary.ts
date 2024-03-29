import { PictureProps } from "../../Components/Context/types";
import lion from "../TestingPhotoSet/Lion.png";
import lionF from "../TestingPhotoSet/LionFull.png";
import animeMan from "../TestingPhotoSet/animeMan.png";
import girl from "../TestingPhotoSet/girl.png";
import girl2 from "../TestingPhotoSet/girl2.png";
import knight from "../TestingPhotoSet/knightLogo.png";
import car from "../TestingPhotoSet/mustang.png";
import superman2 from "../TestingPhotoSet/smanfull.png";
import superman1 from "../TestingPhotoSet/supermanPort.png";
import logo from "../TestingPhotoSet/swordLogo.png";
import town from "../TestingPhotoSet/town.png";
import tree from "../TestingPhotoSet/tree.png";

// picture: string;
// upVotes: number;
// downVotes: number;
// id: number;
// name: string;
// isFavorite: boolean;
const comments = [
    {
        name: "user123",
        comment:
            "Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.",
        id: 0,
        liked: 12,
    },
    {
        name: "user123",
        comment:
            "Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.",
        id: 0,
        liked: 12,
    },
    {
        name: "user123",
        comment:
            "Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.",
        id: 0,
        liked: 12,
    },
    {
        name: "user123",
        comment:
            "Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.",
        id: 0,
        liked: 12,
    },
    {
        name: "user123",
        comment:
            "Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.",
        id: 0,
        liked: 12,
    },
    {
        name: "user123",
        comment:
            "Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.",
        id: 0,
        liked: 12,
    },
    {
        name: "user123",
        comment:
            "Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.",
        id: 0,
        liked: 12,
    },
    {
        name: "user123",
        comment:
            "Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.",
        id: 0,
        liked: 12,
    },
    {
        name: "user123",
        comment:
            "Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.",
        id: 0,
        liked: 12,
    },
    {
        name: "user123",
        comment:
            "Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.",
        id: 0,
        liked: 12,
    },
    {
        name: "user123",
        comment:
            "Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.",
        id: 0,
        liked: 12,
    },
    {
        name: "user123",
        comment:
            "Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.",
        id: 0,
        liked: 12,
    },
    {
        name: "user123",
        comment:
            "Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.",
        id: 0,
        liked: 12,
    },
    {
        name: "user123",
        comment:
            "Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.",
        id: 0,
        liked: 12,
    },
    {
        name: "user123",
        comment:
            "Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.",
        id: 0,
        liked: 12,
    },
    {
        name: "user123",
        comment:
            "Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.",
        id: 0,
        liked: 12,
    },
    {
        name: "user123",
        comment:
            "Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.",
        id: 0,
        liked: 12,
    },
    {
        name: "user123",
        comment:
            "Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.",
        id: 0,
        liked: 12,
    },
    {
        name: "user123",
        comment:
            "Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.",
        id: 0,
        liked: 12,
    },
    {
        name: "user123",
        comment:
            "Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.",
        id: 0,
        liked: 12,
    },
];

export const getPhotoLibrary = () => {
    const Library: PictureProps[] = [
        {
            picture: lion,
            upVotes: 12,
            downVotes: 1,
            id: 0,
            name: "Lion",
            isFavorite: false,
            comments: comments,
        },
        {
            picture: lionF,
            upVotes: 12,
            downVotes: 1,
            id: 1,
            name: "Lion Full",
            isFavorite: true,
            comments: comments,
        },
        {
            picture: animeMan,
            upVotes: 12,
            downVotes: 1,
            id: 2,
            name: "Veteran adventurer",
            isFavorite: false,
            comments: comments,
        },
        {
            picture: girl,
            upVotes: 12,
            downVotes: 1,
            id: 3,
            name: "Anime Girl",
            isFavorite: true,
            comments: comments,
        },
        {
            picture: girl2,
            upVotes: 12,
            downVotes: 1,
            id: 4,
            name: "Anime Girl blond",
            isFavorite: true,
            comments: comments,
        },
        {
            picture: superman1,
            upVotes: 12,
            downVotes: 1,
            id: 5,
            name: "Super Man",
            isFavorite: false,
            comments: comments,
        },
        {
            picture: superman2,
            upVotes: 12,
            downVotes: 1,
            id: 6,
            name: "Super Man portrait",
            isFavorite: false,
            comments: comments,
        },
        {
            picture: car,
            upVotes: 12,
            downVotes: 1,
            id: 7,
            name: "car",
            isFavorite: false,
            comments: comments,
        },
        {
            picture: tree,
            upVotes: 12,
            downVotes: 1,
            id: 8,
            name: "tree",
            isFavorite: true,
            comments: comments,
        },
        {
            picture: town,
            upVotes: 12,
            downVotes: 1,
            id: 9,
            name: "town",
            isFavorite: false,
            comments: comments,
        },
        {
            picture: knight,
            upVotes: 12,
            downVotes: 1,
            id: 10,
            name: "Knight Logo",
            isFavorite: false,
            comments: comments,
        },
        {
            picture: logo,
            upVotes: 12,
            downVotes: 1,
            id: 11,
            name: "Logo",
            isFavorite: false,
            comments: comments,
        },
    ];

    return Library;
};
