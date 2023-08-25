import Robot from "../../../Assets/RoboProfilePic.jpeg";

//! important
export interface ArtCatalogProps {
    picture: any;
    name: string;
    styleID: number; // !*Do NOT change id*!, The ID representing the style of the created image
    promptStrength: number; // How much to modify seedImage. Higher values show less resemblance
    isRandom: boolean; // Whether to create different images for the same prompt, false default
}

export const artStyleCatalog: ArtCatalogProps[] = [
    {
        picture: Robot,
        name: "3D General 2",
        styleID: 43,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: Robot,
        name: "Photo General 1",
        styleID: 49,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: Robot,
        name: "Photo Portrait 1",
        styleID: 50,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: Robot,
        name: "Charcoal 1",
        styleID: 54,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: Robot,
        name: "Steampunk",
        styleID: 57,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: Robot,
        name: "Animation",
        styleID: 60,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: Robot,
        name: "Animation 2",
        styleID: 61,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: Robot,
        name: "Sci-fi 1",
        styleID: 64,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: Robot,
        name: "Logo Clean 1",
        styleID: 67,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: Robot,
        name: "Concept Art 2",
        styleID: 71,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: Robot,
        name: "Portrait Anime 1",
        styleID: 107,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: Robot,
        name: "Portrait Anime 2",
        styleID: 108,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: Robot,
        name: "Concept Art 6",
        styleID: 126,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: Robot,
        name: "Concept Art 6",
        styleID: 126,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: Robot,
        name: "Hotpot Art 8",
        styleID: 139,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: Robot,
        name: "Hotpot Art 9",
        styleID: 140,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: Robot,
        name: "Portrait Game 7",
        styleID: 143,
        promptStrength: 0,
        isRandom: false,
    },
];
