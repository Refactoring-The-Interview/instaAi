import { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import "./ArtPublicStatusS.scss";

export const ArtPublicStatus = () => {
    const [checkedPublic, setCheckedPublic] = useState(true);
    const [checkedPrivate, setCheckedPrivate] = useState(false);

    return (
        <div className="ArtPublicStatus">
            <ToggleButton
                className="mb-2 isPublic"
                id="toggle-check"
                type="checkbox"
                variant="outline-primary"
                checked={checkedPublic}
                value="1"
                onChange={(e) => {
                    setCheckedPrivate(!checkedPrivate);
                    setCheckedPublic(!checkedPublic);
                }}
            >
                {"Public"}
            </ToggleButton>
            <ToggleButton
                className="mb-2 isPublic"
                id="toggle-check"
                type="checkbox"
                variant="outline-primary"
                checked={checkedPrivate}
                value="2"
                onChange={(e) => {
                    setCheckedPrivate(!checkedPrivate);
                    setCheckedPublic(!checkedPublic);
                }}
            >
                {"Private"}
            </ToggleButton>
        </div>
    );
};
