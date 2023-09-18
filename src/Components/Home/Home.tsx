import { useContext, useEffect, useState } from "react";
import { getPhotoLibrary } from "../../Testing/TestingAPICall/getPhotoLibrary";
import { MyPictureContext } from "../Context/MyPicturesContext";
import { RenderPictures } from "../RenderPictures/RenderPictures";
import "./HomeS.scss";

export const Home = () => {
    const dummyLib = getPhotoLibrary();
    const { pictures, setPictures } = useContext(MyPictureContext);
    const [currentPictures, setCurrentPictures] = useState(pictures);

    if (pictures.length < 2) setPictures(dummyLib);

    useEffect(() => {
        setCurrentPictures(pictures);
    }, [pictures]);

    return (
        <div className="Home">
            <RenderPictures
                pictures={currentPictures}
                setPictures={setPictures}
            />
        </div>
    );
};
