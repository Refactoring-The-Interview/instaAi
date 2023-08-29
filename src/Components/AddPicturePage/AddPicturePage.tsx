import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./AddPicturePageS.scss";
import { ArtPublicStatus } from "./ArtPublicStatus/ArtPublicStatus";
import { ArtStyles } from "./ArtStyles/ArtStyles";
import { ArtTextPrompt } from "./ArtTextPropmt/ArtTextPrompt";

export const AddPicturePage = () => {
    const [pictureForm, setPictureForm] = useState({
        textPrompt: "",
    });
    const { textPrompt } = pictureForm;
    console.log(pictureForm);
    return (
        <div className="AddPicture">
            <Form>
                <ArtTextPrompt
                    value={textPrompt}
                    setValue={(textPrompt: string) => {
                        setPictureForm({ ...pictureForm, textPrompt });
                    }}
                />
                <ArtStyles />
                <ArtPublicStatus />
                <Button>Render Photo</Button>
            </Form>
        </div>
    );
};
