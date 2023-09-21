import { PictureProps } from "../../Context/types";
import "./VoteAndFavS.scss";

interface Props {
    currentPic: PictureProps;
    setCurrentPic(currentPic: PictureProps): void;
}

//Todo: add context update on picture change
export const VoteAndFav = ({ currentPic, setCurrentPic }: Props) => {
    let { downVotes, upVotes, isFavorite } = currentPic;

    return (
        <>
            <div className="Votes">
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
        </>
    );
};
