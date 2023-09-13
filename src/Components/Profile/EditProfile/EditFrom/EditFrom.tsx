import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { UserProps } from "../../../Context/types";
import "./EditFromS.scss";
import { FormBody } from "./FormBody/FormBody";

interface Props {
    user: UserProps;
    setUser(user: UserProps): void;
}

export const EditFrom = ({ user, setUser }: Props) => {
    const [newUser, setNewUser] = useState(user);
    const { name, image, bio } = newUser;

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
            >
                Done
            </Button>
        </Form>
    );
};
