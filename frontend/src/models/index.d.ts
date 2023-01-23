import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerInstitution = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Institution, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly updated_at?: string | null;
  readonly number_accounts?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInstitution = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Institution, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly updated_at?: string | null;
  readonly number_accounts?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Institution = LazyLoading extends LazyLoadingDisabled ? EagerInstitution : LazyInstitution

export declare const Institution: (new (init: ModelInit<Institution>) => Institution) & {
  copyOf(source: Institution, mutator: (draft: MutableModel<Institution>) => MutableModel<Institution> | void): Institution;
}