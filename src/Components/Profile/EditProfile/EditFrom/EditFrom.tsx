import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { UserProps } from "../../../Context/types";
import "./EditFromS.scss";
import { FormBody } from "./FormBody/FormBody";

interface Props {
    user: UserProps;
    setUser(user: UserProps): void;
    handleClose(): void;
}

export const EditFrom = ({ user, setUser, handleClose }: Props) => {
    const [newUser, setNewUser] = useState(user);

    return (
        <Form
            className="EditForm"
            onSubmit={(e) => {
                e.preventDefault();
                setUser(newUser);
            }}
        >
            <FormBody value={newUser} setValue={setNewUser} />
            <Button
                type="submit"
                variant="outline-primary"
                className="formSubmit"
                onClick={() => {
                    handleClose();
                }}
            >
                Done
            </Button>
        </Form>
    );
};
