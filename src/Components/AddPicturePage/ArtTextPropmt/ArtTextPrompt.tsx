interface ArtTextPromptProps {
    value: string;
    setValue(description: string): void;
    label?: string;
    placeHolder?: string;
}

export const ArtTextPrompt = ({
    value,
    setValue,
    label,
    placeHolder,
}: ArtTextPromptProps) => {
    return (
        <label className="ArtTextPrompt">
            <div className="text-label">{label ? label : "Prompt"}</div>
            <input
                placeholder={
                    placeHolder ? placeHolder : "Ai Art Text Prompt Input"
                }
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </label>
    );
};
