import { useContext, useState } from "react";
import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { MyPictureContext } from "../../Context/MyPicturesContext";
import { styleTags } from "../../Context/artStyleCatalog";
import { ArtStyles } from "../ArtStyles/ArtStyles";
import { DisplayAllFilter } from "./DisplayAllFilter/DisplayAllFilter";
import "./DisplayAllStylesS.scss";

export const DisplayAllStyles = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { setCatalogFilterTag } = useContext(MyPictureContext);

    return (
        <div className="DisplayAllStyles">
            <div className="displayAll">
                <Button variant="outline-secondary" onClick={handleShow}>
                    ... More
                </Button>
            </div>
            <Offcanvas
                show={show}
                onHide={() => {
                    setCatalogFilterTag(styleTags.all);
                    handleClose();
                }}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <Badge bg="primary" className="title">
                            All art Styles
                        </Badge>
                        <DisplayAllFilter />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ArtStyles start={0} displayName={true} />
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};
