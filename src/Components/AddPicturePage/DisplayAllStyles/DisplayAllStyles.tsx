import { useState } from "react";
import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ArtStyles } from "../ArtStyles/ArtStyles";
import { DisplayAllFilter } from "./DisplayAllFilter/DisplayAllFilter";
import "./DisplayAllStylesS.scss";

export const DisplayAllStyles = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Explore more Styles
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <Badge bg="primary">All art Styles</Badge>
                        <DisplayAllFilter />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ArtStyles start={0} displayName={true} />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};
