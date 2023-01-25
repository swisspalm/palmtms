/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ItemCardProps } from "./ItemCard";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InstitutionCollectionOverridesProps = {
    InstitutionCollection?: PrimitiveOverrideProps<CollectionProps>;
    ItemCard?: ItemCardProps;
} & EscapeHatchProps;
export declare type InstitutionCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ItemCardProps;
} & {
    overrides?: InstitutionCollectionOverridesProps | undefined | null;
}>;
export default function InstitutionCollection(props: InstitutionCollectionProps): React.ReactElement;
