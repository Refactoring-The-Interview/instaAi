import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { PictureComments } from "../../Context/types";
import { AddComment } from "../AddComment/AddComment";
import { Comment } from "./Comment/Comment";
import "./ViewAllCommentsS.scss";

interface Props {
    comments: PictureComments[] | undefined;
}

export const ViewAllComments = ({ comments }: Props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="ViewAllComments">
            <Button
                variant="outline-primary"
                onClick={handleShow}
                className="me-2"
            >
                View All Comments
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement="bottom">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Viewing All Comments</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="viewAllCommentsBody">
                    <div className="comments">
                        {comments?.map((item, index) => {
                            return <Comment currentComment={item} />;
                        })}
                    </div>
                    <div className="addComment">
                        <AddComment />
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};
