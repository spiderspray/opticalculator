import type {
  Content,
  DEFAULT_FORM_UNKNOWN_VALUE,
  PackingName,
  TypeName,
  Weight,
} from '../constants';

export type FormValues = {
  type: TypeName | typeof DEFAULT_FORM_UNKNOWN_VALUE;
  weight: Weight | typeof DEFAULT_FORM_UNKNOWN_VALUE;
  content: Content | typeof DEFAULT_FORM_UNKNOWN_VALUE;
  packing: PackingName | typeof DEFAULT_FORM_UNKNOWN_VALUE;
  workingDays: string;
  packedBoxes: string;
  isPledge: false;
  pledge: string;
};
export type FormIds = {
  [P in keyof FormValues]: P;
};

export type InputValues = FormValues['workingDays'] | FormValues['packedBoxes'];
export type SelectValues =
  | FormValues['packing']
  | FormValues['content']
  | FormValues['type']
  | FormValues['weight'];

export type Result = {
  costOfOneTreasureAmount: number;
  sumOfTreasures: number;
  weekAmount: number;
  monthAmount: number;
  pledge: number;
  costOfTransportation: number;
  finalMonthSum: number;
  weekBonus: number;
  monthBonus: number;
};
