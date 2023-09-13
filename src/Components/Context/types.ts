export interface PictureProps {
    picture: any;
    upVotes: number;
    downVotes: number;
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
