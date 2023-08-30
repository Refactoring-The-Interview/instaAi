import { useContext } from "react";
import { ToggleButton } from "react-bootstrap";
import { MyPictureContext } from "../../../../Context/MyPicturesContext";
import { styleTags } from "../../../../Context/artStyleCatalog";

interface Props {
    tag: string;
}

export const FilterOption = ({ tag }: Props) => {
    const { setCatalogFilterTag, catalogFilterTag } =
        useContext(MyPictureContext);

    return (
        <ToggleButton
            variant="outline-primary"
            id="toggle-check"
            type="checkbox"
            checked={catalogFilterTag === tag ? true : false}
            onClick={() => {
                setCatalogFilterTag(tag as styleTags);
            }}
            value={""}
        >
            {tag}
        </ToggleButton>
    );
};
