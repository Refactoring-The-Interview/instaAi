import { useState } from "react";
import { Image } from "react-bootstrap";
import { PictureProps } from "../../Context/types";

interface Props {
    pic: PictureProps;
}

export const RenderPicture = ({ pic }: Props) => {
    const [currentPic, setCurrentPic] = useState(pic);
    let { picture, name, downVotes, upVotes, isFavorite } = currentPic;

    return (
        <div className="picture">
            <Image src={picture} alt={name} className="image" />
            <div className="votes">
                <div className="vote">⬆︎{upVotes}</div>
                <div className="vote">⬇︎{downVotes}</div>
                <h5
                    className="heart"
                    onClick={() => {
                        isFavorite = !isFavorite;
                        setCurrentPic({
                            ...currentPic,
                            isFavorite,
                        });
                    }}
                >
                    {isFavorite ? "♥︎" : "♡"}
                </h5>
            </div>
        </div>
    );
};
