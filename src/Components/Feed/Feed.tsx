import { useContext } from "react";
import { MyPictureContext } from "../Context/MyPicturesContext";
import { FeedCard } from "./FeedCard/FeedCard";
import "./FeedS.scss";

export const Feed = () => {
    const { pictures } = useContext(MyPictureContext);
    return (
        <div className="Feed">
            {pictures.map((post) => {
                return <FeedCard post={post} />;
            })}
        </div>
    );
};
