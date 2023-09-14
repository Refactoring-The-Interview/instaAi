import { getPhotoLibrary } from "../../Testing/TestingAPICall/getPhotoLibrary";
import { RenderPictures } from "../RenderPictures/RenderPictures";
import "./HomeS.scss";

export const Home = () => {
    const dummyLib = getPhotoLibrary();

    return (
        <div className="Home">
            <RenderPictures pictures={dummyLib} />
        </div>
    );
};
