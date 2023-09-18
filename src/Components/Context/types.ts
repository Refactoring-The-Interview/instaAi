export interface PictureProps {
    picture: string;
    upVotes: number;
    downVotes: number;
    id: number;
    name: string;
    isFavorite: boolean;
    comments?: string[];
}

export interface UserProps {
    userId: number;
    name: string;
    image: string;
    bio?: string;
    fallows: number;
    creations: number;
    favorites?: number[];
}
