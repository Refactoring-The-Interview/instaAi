import { Image } from "react-bootstrap";
import { UserProps } from "../../Context/types";
import "./UserDetailsS.scss";
import { UserFallowsAndCreations } from "./UserFallowsAndCeations/UserFallowsAndCreations";

interface UserDetailsProps {
    user: UserProps;
}

export const UserDetails = ({ user }: UserDetailsProps) => {
    const { name, bio, fallows, creations, favorites, image } = user;
    return (
        <div className="UserDetails">
            <div className="imageAndName">
                <Image src={image} className="image" />
                <div className="name">{name}</div>
            </div>
            <UserFallowsAndCreations creations={creations} fallows={fallows} />
        </div>
    );
};
