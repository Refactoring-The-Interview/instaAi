import "./BioS.scss";

interface Props {
    bio: string | undefined;
}

export const Bio = ({ bio }: Props) => {
    return <div className="Bio">{bio}</div>;
};
