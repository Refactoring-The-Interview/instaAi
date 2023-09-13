import { useContext } from "react";
import { MyUserContext } from "../Context/MyUserContext";
import { EditProfile } from "./EditProfile/EditProfile";
import "./ProfileS.scss";
import { UserDetails } from "./UserDetials/UserDetails";

export const Profile = () => {
    const { user, setUser } = useContext(MyUserContext);

    return (
        <div className="Profile">
            <UserDetails user={user} />
            <EditProfile />
        </div>
    );
};
