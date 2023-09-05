import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum Styletags {
  ALL = "ALL",
  POPULAR = "POPULAR",
  ANIMATION = "ANIMATION",
  FANTASY = "FANTASY",
  PORTRAIT = "PORTRAIT",
  ILLUSTRATION = "ILLUSTRATION"
}



type EagerPhotoLibrary = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PhotoLibrary, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Photos?: (Photo | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPhotoLibrary = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PhotoLibrary, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Photos: AsyncCollection<Photo>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PhotoLibrary = LazyLoading extends LazyLoadingDisabled ? EagerPhotoLibrary : LazyPhotoLibrary

export declare const PhotoLibrary: (new (init: ModelInit<PhotoLibrary>) => PhotoLibrary) & {
  copyOf(source: PhotoLibrary, mutator: (draft: MutableModel<PhotoLibrary>) => MutableModel<PhotoLibrary> | void): PhotoLibrary;
}

type EagerPhoto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Photo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly styleID?: number | null;
  readonly isRandom?: boolean | null;
  readonly tags?: Styletags | keyof typeof Styletags | null;
  readonly photolibraryID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPhoto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Photo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly styleID?: number | null;
  readonly isRandom?: boolean | null;
  readonly tags?: Styletags | keyof typeof Styletags | null;
  readonly photolibraryID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Photo = LazyLoading extends LazyLoadingDisabled ? EagerPhoto : LazyPhoto

export declare const Photo: (new (init: ModelInit<Photo>) => Photo) & {
  copyOf(source: Photo, mutator: (draft: MutableModel<Photo>) => MutableModel<Photo> | void): Photo;
}