import { UserProps } from "../../Context/types";
import { ImageAndName } from "./ImageAndName/ImageAndName";
import "./UserDetailsS.scss";
import { UserFallowsAndCreations } from "./UserFallowsAndCeations/UserFallowsAndCreations";

interface UserDetailsProps {
    user: UserProps;
}

export const UserDetails = ({ user }: UserDetailsProps) => {
    const { name, bio, fallows, creations, favorites, image } = user;
    return (
        <div className="UserDetails">
            <ImageAndName name={name} image={image} />
            <UserFallowsAndCreations creations={creations} fallows={fallows} />
        </div>
    );
};
