import { PictureProps } from "../Context/types";
import { RenderPicture } from "./RenderPicture/RenderPicture";
import "./RenderPicturesS.scss";

interface Props {
    pictures: PictureProps[];
    setPictures(pictures: PictureProps[]): void;
}

export const RenderPictures = ({ pictures, setPictures }: Props) => {
    return (
        <div className="RenderPictures">
            {pictures.map((item, index) => {
                return <RenderPicture pic={item} />;
            })}
        </div>
    );
};
