// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Styletags = {
  "ALL": "ALL",
  "POPULAR": "POPULAR",
  "ANIMATION": "ANIMATION",
  "FANTASY": "FANTASY",
  "PORTRAIT": "PORTRAIT",
  "ILLUSTRATION": "ILLUSTRATION"
};

const { PhotoLibrary, Photo } = initSchema(schema);

export {
  PhotoLibrary,
  Photo,
  Styletags
};