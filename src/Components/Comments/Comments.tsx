import { PictureComments } from "../Context/types";
import "./CommentsS.scss";
import { ViewAllComments } from "./ViewAllComments/ViewAllComments";

interface Props {
    comments: PictureComments[] | undefined;
}

export const Comments = ({ comments }: Props) => {
    return (
        <div className="Comments">
            {comments?.length && (
                <div className="displayComment">
                    <div className="name">{comments[0].name}</div>
                    <div className="comment">{comments[0].comment}</div>
                </div>
            )}

            <ViewAllComments comments={comments} />
        </div>
    );
};
