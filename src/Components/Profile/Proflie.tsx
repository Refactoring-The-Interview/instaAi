import { useContext } from "react";
import { MyUserContext } from "../Context/MyUserContext";
import "./ProfileS.scss";
import { UserDetails } from "./UserDetials/UserDetails";

export const Profile = () => {
    const { user, setUser } = useContext(MyUserContext);

    return (
        <div className="Profile">
            <UserDetails user={user} />
        </div>
    );
};
