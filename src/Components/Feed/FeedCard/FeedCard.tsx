import Card from "react-bootstrap/Card";
import { PictureProps } from "../../Context/types";
import "./FeedCardS.scss";

interface Props {
    post: PictureProps;
}

export const FeedCard = ({ post }: Props) => {
    const { picture } = post;
    return (
        <Card className="FeedCard">
            <Card.Img variant="top" src={picture} className="FeedImage" />
            <Card.Body>
                <Card.Text>hello</Card.Text>
            </Card.Body>
        </Card>
    );
};
