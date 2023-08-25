import { Image } from "react-bootstrap";
import { ArtCatalogProps } from "../artStyleCatalog";
import "./ArtStyleS.scss";

// toDo, on click update the api package to send
export const ArtStyle = ({ picture, name, styleID }: ArtCatalogProps) => {
    return (
        <div className="ArtStyle">
            <Image src={picture} className="style-photo" />
        </div>
    );
};
