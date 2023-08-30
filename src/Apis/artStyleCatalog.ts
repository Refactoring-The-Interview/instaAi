import gen1 from "../Assets/Styles/3d_general_2.webp";
import animation1 from "../Assets/Styles/animation_1.webp";
import animation2 from "../Assets/Styles/animation_2.webp";
import charcoal from "../Assets/Styles/charcoal_1.jpg";
import concept from "../Assets/Styles/concept_art_2.webp";
import concept6 from "../Assets/Styles/concept_art_6.jpg";
import {
    default as hotpot8,
    default as hotpot9,
} from "../Assets/Styles/hotpot_art_9.webp";
import logoClean from "../Assets/Styles/logo_clean_1.webp";
import photoGen1 from "../Assets/Styles/photo_general_1.webp";
import photoPort1 from "../Assets/Styles/photo_portrait_1.jpg";
import animePort1 from "../Assets/Styles/portrait_anime_1.webp";
import animePort2 from "../Assets/Styles/portrait_anime_2.webp";
import game7 from "../Assets/Styles/portrait_game_7.webp";
import scifi from "../Assets/Styles/scifi_1.webp";
import steampunk from "../Assets/Styles/steampunk.jpg";

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
        picture: gen1,
        name: "3D General 2",
        styleID: 43,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: photoGen1,
        name: "Photo General 1",
        styleID: 49,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: photoPort1,
        name: "Photo Portrait 1",
        styleID: 50,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: charcoal,
        name: "Charcoal 1",
        styleID: 54,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: steampunk,
        name: "Steampunk",
        styleID: 57,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: animation1,
        name: "Animation 1",
        styleID: 60,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: animation2,
        name: "Animation 2",
        styleID: 61,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: scifi,
        name: "Sci-fi 1",
        styleID: 64,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: logoClean,
        name: "Logo Clean 1",
        styleID: 67,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: concept,
        name: "Concept Art 2",
        styleID: 71,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: animePort1,
        name: "Portrait Anime 1",
        styleID: 107,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: animePort2,
        name: "Portrait Anime 2",
        styleID: 108,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: concept6,
        name: "Concept Art 6",
        styleID: 126,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: hotpot8,
        name: "Hotpot Art 8",
        styleID: 139,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: hotpot9,
        name: "Hotpot Art 9",
        styleID: 140,
        promptStrength: 0,
        isRandom: false,
    },
    {
        picture: game7,
        name: "Portrait Game 7",
        styleID: 143,
        promptStrength: 0,
        isRandom: false,
    },
];
