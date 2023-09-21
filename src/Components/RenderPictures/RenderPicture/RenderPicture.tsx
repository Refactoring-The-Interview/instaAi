import { useState } from "react";
import { Image } from "react-bootstrap";
import { PictureProps } from "../../Context/types";
import { VoteAndFav } from "../VoteAndFav/VoteAndFav";

interface Props {
    pic: PictureProps;
}

export const RenderPicture = ({ pic }: Props) => {
    const [currentPic, setCurrentPic] = useState(pic);
    let { picture, name } = currentPic;

    return (
        <div className="picture">
            <Image src={picture} alt={name} className="image" />
            <VoteAndFav currentPic={currentPic} setCurrentPic={setCurrentPic} />
        </div>
    );
};
