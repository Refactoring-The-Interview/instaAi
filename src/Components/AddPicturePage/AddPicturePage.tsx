import { DataStore } from "aws-amplify";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { PhotoLibrary } from "../../models";
import "./AddPicturePageS.scss";
import { ArtPublicStatus } from "./ArtPublicStatus/ArtPublicStatus";
import { ArtStyles } from "./ArtStyles/ArtStyles";
import { ArtTextPrompt } from "./ArtTextPropmt/ArtTextPrompt";
import { DisplayAllStyles } from "./DisplayAllStyles/DisplayAllStyles";
import { PhotoRenderArea } from "./PhotoRenderArea/PhotoRenderArea";

const useFetch = async () => {
    try {
        const posts = await DataStore.query(PhotoLibrary);
        console.log(
            "Posts retrieved successfully!",
            JSON.stringify(PhotoLibrary, null, 2),
        );
    } catch (error) {
        console.log("Error retrieving posts", error);
    }
};

export const AddPicturePage = () => {
    // const test = useFetch();

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
                <ArtStyles start={0} end={8} />
                <DisplayAllStyles />
                <ArtPublicStatus />
                <Button className="renderCall" onClick={() => {}}>
                    {" "}
                    Render Photo{" "}
                </Button>
            </Form>
        </div>
    );
};
