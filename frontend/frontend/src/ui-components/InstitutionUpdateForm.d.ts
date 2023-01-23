/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Institution } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InstitutionUpdateFormInputValues = {
    name?: string;
    updated_at?: string;
    number_accounts?: string;
};
export declare type InstitutionUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    updated_at?: ValidationFunction<string>;
    number_accounts?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InstitutionUpdateFormOverridesProps = {
    InstitutionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    updated_at?: PrimitiveOverrideProps<TextFieldProps>;
    number_accounts?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InstitutionUpdateFormProps = React.PropsWithChildren<{
    overrides?: InstitutionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    institution?: Institution;
    onSubmit?: (fields: InstitutionUpdateFormInputValues) => InstitutionUpdateFormInputValues;
    onSuccess?: (fields: InstitutionUpdateFormInputValues) => void;
    onError?: (fields: InstitutionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InstitutionUpdateFormInputValues) => InstitutionUpdateFormInputValues;
    onValidate?: InstitutionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InstitutionUpdateForm(props: InstitutionUpdateFormProps): React.ReactElement;
