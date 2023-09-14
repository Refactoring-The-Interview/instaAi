import { Image } from "react-bootstrap";
import { PictureProps } from "../Context/types";
import "./RenderPicturesS.scss";

interface Props {
    pictures: PictureProps[];
}

export const RenderPictures = ({ pictures }: Props) => {
    return (
        <div className="RenderPictures">
            {pictures.map((item) => {
                const { picture, name, upVotes, downVotes, id, isFavorite } =
                    item;
                return (
                    <div key={id} className="picture">
                        <Image src={picture} alt={name} className="image" />
                        <div className="votes">
                            <div className="vote">⬆︎{upVotes}</div>
                            <div className="vote">⬇︎{downVotes}</div>
                            <h5 className="heart">
                                {isFavorite ? "♥︎" : "♡"}
                            </h5>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
