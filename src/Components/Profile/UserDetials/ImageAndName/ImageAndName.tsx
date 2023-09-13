import { Image } from "react-bootstrap";
import "./ImageAndNameS.scss";

interface Props {
    name: string;
    image: string;
}

export const ImageAndName = ({ name, image }: Props) => {
    return (
        <div className="ImageAndName">
            <Image src={image} className="image" />
            <div className="name">{name}</div>
        </div>
    );
};
