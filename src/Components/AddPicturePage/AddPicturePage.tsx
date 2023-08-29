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

    return (
        <div className="AddPicture">
            <h1>Photo</h1>
            <Form className="add-picture-form">
                <ArtTextPrompt
                    value={textPrompt}
                    setValue={(textPrompt: string) => {
                        setPictureForm({ ...pictureForm, textPrompt });
                    }}
                />
                <ArtStyles />
                <ArtPublicStatus />
                <Button className="renderCall"> Render Photo </Button>
            </Form>
        </div>
    );
};
