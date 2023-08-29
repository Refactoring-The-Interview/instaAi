import Spinner from "react-bootstrap/Spinner";
import { AnimationSpinners, SpinnerColors, SpinnerSize } from "./types";

interface Props {
    animation: AnimationSpinners;
    variant: SpinnerColors;
    size?: SpinnerSize;
}

export const LoadingSpinner = ({ animation, variant, size }: Props) => {
    return (
        <Spinner
            animation={animation}
            role="status"
            variant={variant}
            size={size ? "sm" : undefined}
        >
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
};
