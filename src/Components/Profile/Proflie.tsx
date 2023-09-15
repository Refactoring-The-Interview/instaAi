import { useContext } from "react";
import { getPhotoLibrary } from "../../Testing/TestingAPICall/getPhotoLibrary";
import { MyUserContext } from "../Context/MyUserContext";
import { RenderPictures } from "../RenderPictures/RenderPictures";
import { EditProfile } from "./EditProfile/EditProfile";
import "./ProfileS.scss";
import { UserDetails } from "./UserDetials/UserDetails";

export const Profile = () => {
    const dummyLib = getPhotoLibrary();
    const { user } = useContext(MyUserContext);

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
