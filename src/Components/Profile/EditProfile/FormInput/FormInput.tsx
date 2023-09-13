import "./FormInputS.scss";

interface Props {
    value: any;
    setValue: any;
    label: string;
}

export const FormInput = ({ value, setValue, label }: Props) => {
    return (
        <label className="FormInput">
            <div className="label">{label}</div>
            <input
                className="input"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </label>
    );
};
