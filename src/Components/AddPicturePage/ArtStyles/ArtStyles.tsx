import { useContext } from "react";
import { MyPictureContext } from "../../Context/MyPicturesContext";
import { artStyleCatalog } from "../../Context/artStyleCatalog";
import { ArtStyle } from "./ArtStyle/ArtStyle";
import "./ArtStylesS.scss";

//toDo add off canvas list of all styles

interface Props {
    start: number;
    end?: number;
    displayName?: boolean;
}

export const ArtStyles = ({
    start,
    end = artStyleCatalog.length,
    displayName,
}: Props) => {
    const { styleCatalog } = useContext(MyPictureContext);

    return (
        <div className="ArtStyles">
            {styleCatalog.slice(start, end).map((style, index) => {
                const { name, styleID, picture } = style;
                return (
                    <div>
                        <ArtStyle
                            key={index}
                            name={name}
                            picture={picture}
                            styleID={styleID}
                            promptStrength={0}
                            isRandom={false}
                            tags={[]}
                        />

                        {displayName && (
                            <div className="style-name">{name}</div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
