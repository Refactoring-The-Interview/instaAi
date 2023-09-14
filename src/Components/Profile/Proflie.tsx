import { useContext } from "react";
import { getPhotoLibrary } from "../../Testing/TestingAPICall/getPhotoLibrary";
import { MyPictureContext } from "../Context/MyPicturesContext";
import { MyUserContext } from "../Context/MyUserContext";
import { RenderPictures } from "../RenderPictures/RenderPictures";
import { EditProfile } from "./EditProfile/EditProfile";
import "./ProfileS.scss";
import { UserDetails } from "./UserDetials/UserDetails";

export const Profile = () => {
    const dummyLib = getPhotoLibrary();
    const { user, setUser } = useContext(MyUserContext);
    const { pictures, setPictures } = useContext(MyPictureContext);

    return (
        <div className="Profile">
            <UserDetails user={user} />
            <EditProfile />
            <div className="pictureProfile">
                <RenderPictures pictures={dummyLib} />
            </div>
        </div>
    );
};
