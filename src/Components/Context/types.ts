export interface PictureProps {
    picture: string;
    upVotes: number;
    downVotes: number;
    id: number;
    name: string;
    isFavorite: boolean;
    comments?: PictureComments[];
}

export interface PictureComments {
    name: string;
    id: number;
    comment: string;
    liked: number;
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
