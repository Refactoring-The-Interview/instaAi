import "./UserFallowsAndCreationsS.scss";

interface Props {
    creations: number;
    fallows: number;
}

export const UserFallowsAndCreations = ({ creations, fallows }: Props) => {
    return (
        <div className="UserFallowsAndCreations">
            <div className="stat">
                <div>{creations}</div>
                <div>Creations</div>
            </div>

            <div className="stat">
                <div>{fallows}</div>
                <div>Fallows</div>
            </div>
        </div>
    );
};
