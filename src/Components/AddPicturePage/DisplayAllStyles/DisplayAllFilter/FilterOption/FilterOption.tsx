import { useContext } from "react";
import { ToggleButton } from "react-bootstrap";
import { MyPictureContext } from "../../../../Context/MyPicturesContext";
import { styleTags } from "../../../../Context/artStyleCatalog";
import "./FilterOptionS.scss";

interface Props {
    tag: string;
}

export const FilterOption = ({ tag }: Props) => {
    const { setCatalogFilterTag, catalogFilterTag } =
        useContext(MyPictureContext);

    return (
        <ToggleButton
            className="option"
            variant="outline-primary"
            type="checkbox"
            checked={catalogFilterTag === tag ? true : false}
            onClick={() => {
                setCatalogFilterTag(tag as styleTags);
            }}
            value={catalogFilterTag}
        >
            {tag}
        </ToggleButton>
    );
};
