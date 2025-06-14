import {
  Content,
  DEFAULT_FORM_UNKNOWN_VALUE,
  DEFAULT_RESULT_COST_OF_TRANSPORTATION,
  DEFAULT_RESULT_PLEDGE,
  DEFAULT_RESULT_WEEK_BONUS,
  NUMBER_OF_TREASURES_TO_RECEIVE_A_BONUS,
  PackingAmount,
  PackingName,
  TypeAmount,
  TypeName,
  Weight,
} from '../../constants';
import type { FormValues, Result } from '../../types';
import { NUMBER_OF_WEEKS_PER_MONTH } from './constants';

class CalculateResult {
  private getCocaineAmount = (weight: FormValues['weight']): number => {
    switch (weight) {
      case Weight.First:
        return 1500;
      case Weight.Second:
        return 2000;
      case Weight.Third:
        return 2500;
      default: {
        throw new Error('Inaccessible amount of weight');
      }
    }
  };

  private getMushroomsAmount = (weight: FormValues['weight']): number => {
    switch (weight) {
      case Weight.First:
        throw new Error('Inaccessible amount of weight');
      case Weight.Second:
        return 600;
      case Weight.Third:
        return 700;
      case Weight.Fourth:
        return 900;
      case Weight.Fifth:
        return 1200;
      case Weight.Tenth:
        return 1500;
      default: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const rest: typeof DEFAULT_FORM_UNKNOWN_VALUE = weight;
        throw new Error('Unknown value of weight');
      }
    }
  };

  private getMephedronAmount = (weight: FormValues['weight']): number => {
    switch (weight) {
      case Weight.First:
        return 700;
      case Weight.Second:
        return 1000;
      case Weight.Third:
        return 1100;
      case Weight.Fourth:
        return 1200;
      case Weight.Fifth:
        return 1800;
      case Weight.Tenth:
        return 2500;
      default: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const rest: typeof DEFAULT_FORM_UNKNOWN_VALUE = weight;
        throw new Error('Unknown value of weight');
      }
    }
  };

  private getHashishAmount = (weight: FormValues['weight']): number => {
    switch (weight) {
      case Weight.First:
        return 700;
      case Weight.Second:
        return 900;
      case Weight.Third:
        return 1000;
      case Weight.Fourth:
        return 1100;
      case Weight.Fifth:
        return 1500;
      case Weight.Tenth:
        return 2000;
      default: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const rest: typeof DEFAULT_FORM_UNKNOWN_VALUE = weight;
        throw new Error('Unknown value of weight');
      }
    }
  };

  private getContentAmount = (values: FormValues): number => {
    switch (values.content) {
      case Content.Hashish:
        return this.getHashishAmount(values.weight);
      case Content.Mephedron:
        return this.getMephedronAmount(values.weight);
      case Content.Mushrooms:
        return this.getMushroomsAmount(values.weight);
      case Content.Cocaine:
        return this.getCocaineAmount(values.weight);
      default: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const rest: typeof DEFAULT_FORM_UNKNOWN_VALUE = values.content;
        throw new Error('Unknown value of content');
      }
    }
  };

  private getTypeAmount(type: FormValues['type']): TypeAmount {
    switch (type) {
      case TypeName.Magnet:
        return TypeAmount.Magnet;
      case TypeName.Stone:
        return TypeAmount.Stone;
      case TypeName.Pit:
        return TypeAmount.Pit;
      default: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const rest: typeof DEFAULT_FORM_UNKNOWN_VALUE = type;
        throw new Error('Unknown value of type');
      }
    }
  }

  private getPackingAmount(packing: FormValues['packing']): PackingAmount {
    switch (packing) {
      case PackingName.Independent:
        return PackingAmount.Independent;
      case PackingName.Ready:
        return PackingAmount.Ready;
      case PackingName.Trip:
        return PackingAmount.Trip;
      default: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const rest: typeof DEFAULT_FORM_UNKNOWN_VALUE = packing;
        throw new Error('Unknown value of packing');
      }
    }
  }

  private getWeekBonus = (sumOfTreasures: Result['sumOfTreasures']) => {
    const isBonus = sumOfTreasures >= NUMBER_OF_TREASURES_TO_RECEIVE_A_BONUS;
    const result = isBonus ? sumOfTreasures * 100 : DEFAULT_RESULT_WEEK_BONUS;

    return result;
  };

  public calculate = (values: FormValues): Result => {
    const contentAmount = this.getContentAmount(values);
    const typeAmount = this.getTypeAmount(values.type);
    const packingAmount = this.getPackingAmount(values.packing);

    const compatiblePackedBoxes = Number(values.packedBoxes);
    const compatibleWorkingDays = Number(values.workingDays);
    const compatibleWeight = Number(values.weight);

    const costOfOneTreasureAmount = typeAmount + contentAmount + packingAmount;
    const sumOfTreasures = compatiblePackedBoxes * compatibleWorkingDays;
    const weekAmount =
      costOfOneTreasureAmount * compatiblePackedBoxes * compatibleWorkingDays;
    const monthAmount = weekAmount * NUMBER_OF_WEEKS_PER_MONTH;
    const weekBonus = this.getWeekBonus(sumOfTreasures);
    const monthBonus = weekBonus * NUMBER_OF_WEEKS_PER_MONTH;
    const pledge = values.isPledge
      ? Number(values.pledge)
      : DEFAULT_RESULT_PLEDGE;
    const costOfTransportation =
      packingAmount === PackingAmount.Trip
        ? compatibleWeight * compatiblePackedBoxes * compatibleWorkingDays * 100
        : DEFAULT_RESULT_COST_OF_TRANSPORTATION;
    const finalMonthSum = monthAmount + monthBonus + costOfTransportation;

    return {
      costOfOneTreasureAmount,
      weekAmount,
      monthAmount,
      weekBonus,
      monthBonus,
      pledge,
      sumOfTreasures,
      costOfTransportation,
      finalMonthSum,
    };
  };
}

export const calculateResult = new CalculateResult();
