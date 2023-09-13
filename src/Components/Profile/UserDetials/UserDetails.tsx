import { UserProps } from "../../Context/types";
import { Bio } from "./Bio/Bio";
import { ImageAndName } from "./ImageAndName/ImageAndName";
import "./UserDetailsS.scss";
import { UserFallowsAndCreations } from "./UserFallowsAndCeations/UserFallowsAndCreations";

interface UserDetailsProps {
    user: UserProps;
}

export const UserDetails = ({ user }: UserDetailsProps) => {
    const { name, bio, fallows, creations, image, favorites } = user;
    return (
        <div className="UserDetails">
            <div className="header">
                <ImageAndName name={name} image={image} />
                <UserFallowsAndCreations
                    favorites={favorites}
                    creations={creations}
                    fallows={fallows}
                />
            </div>
            <div className="bio">
                <Bio bio={bio} />
            </div>
        </div>
    );
};
