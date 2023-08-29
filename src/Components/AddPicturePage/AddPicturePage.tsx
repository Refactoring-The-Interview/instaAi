import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./AddPicturePageS.scss";
import { ArtPublicStatus } from "./ArtPublicStatus/ArtPublicStatus";
import { ArtStyles } from "./ArtStyles/ArtStyles";
import { ArtTextPrompt } from "./ArtTextPropmt/ArtTextPrompt";
import { PhotoRenderArea } from "./PhotoRenderArea/PhotoRenderArea";

export const AddPicturePage = () => {
    const [pictureForm, setPictureForm] = useState({
        textPrompt: "",
    });
    const { textPrompt } = pictureForm;

    return (
        <div className="AddPicture">
            <PhotoRenderArea photo={undefined} />
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
