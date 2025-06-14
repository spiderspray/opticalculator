import type { FormIds, FormValues } from '../types';

export enum TypeName {
  Magnet = 'MAGNET',
  Stone = 'STONE',
  Pit = 'PIT',
}
export enum TypeAmount {
  Magnet = 200,
  Stone = 50,
  Pit = 0,
}

export enum Weight {
  First = '0.5',
  Second = '1',
  Third = '2',
  Fourth = '3',
  Fifth = '5',
  Tenth = '10',
}

export enum Content {
  Hashish = 'HASHISH',
  Mephedron = 'MEPHEDRON',
  Mushrooms = 'MUSHROOMS',
  Cocaine = 'COCAINE',
}

export enum PackingName {
  Independent = 'INDEPENDENT',
  Ready = 'READY',
  Trip = 'TRIP',
}
export enum PackingAmount {
  Independent = 0,
  Ready = -100,
  Trip = 50,
}

export const DEFAULT_FORM_UNKNOWN_VALUE = 'UNKNOWN';
export const DEFAULT_FORM_VALUES: FormValues = {
  type: DEFAULT_FORM_UNKNOWN_VALUE,
  weight: DEFAULT_FORM_UNKNOWN_VALUE,
  content: DEFAULT_FORM_UNKNOWN_VALUE,
  packing: DEFAULT_FORM_UNKNOWN_VALUE,
  workingDays: '',
  packedBoxes: '',
  isPledge: false,
  pledge: '',
};
export const FORM_IDS: FormIds = {
  content: 'content',
  packedBoxes: 'packedBoxes',
  packing: 'packing',
  type: 'type',
  weight: 'weight',
  workingDays: 'workingDays',
  isPledge: 'isPledge',
  pledge: 'pledge',
};

export const DEFAULT_RESULT_PLEDGE = 0;
export const DEFAULT_RESULT_COST_OF_TRANSPORTATION = 0;
