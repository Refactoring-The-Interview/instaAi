import { ArtStyle } from "./ArtStyle/ArtStyle";
import "./ArtStylesS.scss";
import { artStyleCatalog } from "./artStyleCatalog";

//toDo add off canvas list of all styles
export const ArtStyles = () => {
    return (
        <div className="ArtStyles">
            {artStyleCatalog.slice(0, 8).map((style, index) => {
                const { name, styleID, picture } = style;
                return (
                    <ArtStyle
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
