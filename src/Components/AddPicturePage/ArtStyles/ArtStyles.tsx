import { artStyleCatalog } from "../../../Apis/artStyleCatalog";
import { ArtStyle } from "./ArtStyle/ArtStyle";
import "./ArtStylesS.scss";

//toDo add off canvas list of all styles

interface Props {
    start: number;
    end?: number;
}

export const ArtStyles = ({ start, end = artStyleCatalog.length }: Props) => {
    return (
        <div className="ArtStyles">
            {artStyleCatalog.slice(start, end).map((style, index) => {
                const { name, styleID, picture } = style;
                return (
                    <ArtStyle
                        key={index}
                        name={name}
                        picture={picture}
                        styleID={styleID}
                        promptStrength={0}
                        isRandom={false}
                    />
                );
            })}
        </div>
    );
};
