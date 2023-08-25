import { useState } from "react";
import { Form } from "react-bootstrap";
import "./AddPicturePageS.scss";
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
            </Form>
        </div>
    );
};
