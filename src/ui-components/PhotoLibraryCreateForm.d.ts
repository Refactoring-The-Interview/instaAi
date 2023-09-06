/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PhotoLibraryCreateFormInputValues = {};
export declare type PhotoLibraryCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PhotoLibraryCreateFormOverridesProps = {
    PhotoLibraryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type PhotoLibraryCreateFormProps = React.PropsWithChildren<{
    overrides?: PhotoLibraryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PhotoLibraryCreateFormInputValues) => PhotoLibraryCreateFormInputValues;
    onSuccess?: (fields: PhotoLibraryCreateFormInputValues) => void;
    onError?: (fields: PhotoLibraryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PhotoLibraryCreateFormInputValues) => PhotoLibraryCreateFormInputValues;
    onValidate?: PhotoLibraryCreateFormValidationValues;
} & React.CSSProperties>;
export default function PhotoLibraryCreateForm(props: PhotoLibraryCreateFormProps): React.ReactElement;
