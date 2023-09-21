import Card from "react-bootstrap/Card";
import { Comments } from "../../Comments/Comments";
import { PictureProps } from "../../Context/types";
import { VoteAndFav } from "../../RenderPictures/VoteAndFav/VoteAndFav";
import "./FeedCardS.scss";

interface Props {
    post: PictureProps;
}

export const FeedCard = ({ post }: Props) => {
    const { picture, name, downVotes, upVotes, isFavorite, comments } = post;
    return (
        <Card className="FeedCard">
            <Card.Img variant="top" src={picture} className="FeedImage" />
            <Card.Body>
                <Card.Text>
                    <VoteAndFav currentPic={post} setCurrentPic={() => {}} />
                    <Card.Text>
                        <Comments comments={comments} />
                    </Card.Text>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};
