import { PictureComments } from "../../../Context/types";

interface Props {
    currentComment: PictureComments;
}

export const Comment = ({ currentComment }: Props) => {
    const { name, id, comment, liked } = currentComment;
    return (
        <div className="currentComment" key={id}>
            <div className="name">{name}</div>
            <div>{comment}</div>
        </div>
    );
};
