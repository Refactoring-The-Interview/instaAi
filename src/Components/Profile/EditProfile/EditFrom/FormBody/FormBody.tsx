import { FormInput } from "../../FormInput/FormInput";

interface Props {
    value: any;
    setValue(value: any): void;
}

export const FormBody = ({ value, setValue }: Props) => {
    const { name, bio } = value;
    return (
        <>
            <FormInput
                value={name}
                setValue={(name: string) => {
                    setValue({
                        ...value,
                        name,
                    });
                }}
                label={"Name"}
            />
            <FormInput
                value={bio}
                setValue={(bio: string) => {
                    setValue({
                        ...value,
                        bio,
                    });
                }}
                label={"Bio"}
            />
        </>
    );
};
