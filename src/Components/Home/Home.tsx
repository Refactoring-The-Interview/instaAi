import { useContext, useState } from "react";
import { MyPictureContext } from "../Context/MyPicturesContext";
import { RenderPictures } from "../RenderPictures/RenderPictures";
import "./HomeS.scss";

export const Home = () => {
    const { pictures, setPictures } = useContext(MyPictureContext);
    const [currentPictures, setCurrentPictures] = useState(pictures);

    return (
        <div className="Home">
            <RenderPictures
                pictures={currentPictures}
                setPictures={setPictures}
            />
        </div>
    );
};
