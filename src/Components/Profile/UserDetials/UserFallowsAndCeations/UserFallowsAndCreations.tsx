import "./UserFallowsAndCreationsS.scss";

interface Props {
    creations: number;
    fallows: number;
    favorites: number[] | undefined;
}

export const UserFallowsAndCreations = ({
    creations,
    fallows,
    favorites,
}: Props) => {
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

            <div className="stat">
                <div>{favorites?.length}</div>
                <div>favorites</div>
            </div>
        </div>
    );
};
