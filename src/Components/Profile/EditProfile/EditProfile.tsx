import { useContext, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { MyUserContext } from "../../Context/MyUserContext";
import { EditFrom } from "./EditFrom/EditFrom";
import "./EditProfileS.scss";

export const EditProfile = () => {
    const { user, setUser } = useContext(MyUserContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="EditProfile">
            <Button
                variant="outline-primary"
                className="editButton"
                onClick={handleShow}
            >
                Edit Profile
            </Button>
            <Button variant="outline-primary" className="editButton">
                Share profile
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Edit Profile</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <EditFrom user={user} setUser={setUser} />
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};
