import { Image } from "react-bootstrap";
import "./PhotoRenderAreaS.scss";

interface Props {
    photo: any;
}

export const PhotoRenderArea = ({ photo }: Props) => {
    if (!photo) return <></>;
    return (
        <div className="PhotoRenderArea">
            <Image src={photo} />
        </div>
    );
};
