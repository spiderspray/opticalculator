import {
  Content,
  DEFAULT_RESULT_COST_OF_TRANSPORTATION,
  DEFAULT_RESULT_PLEDGE,
  PackingAmount,
  PackingName,
  TypeAmount,
  TypeName,
  Weight,
} from '../../constants';
import type { FormValues, Result } from '../../types';

class CalculateResult {
  private getCocaineAmount = (values: FormValues): number => {
    switch (values.weight) {
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

  private getMushroomsAmount = (values: FormValues): number => {
    switch (values.weight) {
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
      default: {
        return 1500;
      }
    }
  };

  private getMephedronAmount = (values: FormValues): number => {
    switch (values.weight) {
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
      default: {
        return 2500;
      }
    }
  };

  private getHashishAmount = (values: FormValues): number => {
    switch (values.weight) {
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
      default: {
        return 2000;
      }
    }
  };

  private getContentAmount = (values: FormValues): number => {
    switch (values.content) {
      case Content.Hashish:
        return this.getHashishAmount(values);
      case Content.Mephedron:
        return this.getMephedronAmount(values);
      case Content.Mushrooms:
        return this.getMushroomsAmount(values);
      case Content.Cocaine:
        return this.getCocaineAmount(values);
      default: {
        throw new Error('Unknown value of content');
      }
    }
  };

  private getTypeAmount(values: FormValues): TypeAmount {
    switch (values.type) {
      case TypeName.Magnet:
        return TypeAmount.Magnet;
      case TypeName.Stone:
        return TypeAmount.Stone;
      case TypeName.Pit:
        return TypeAmount.Pit;
      default: {
        throw new Error('Unknown value of type');
      }
    }
  }

  private getPackingAmount(values: FormValues): PackingAmount {
    switch (values.packing) {
      case PackingName.Independent:
        return PackingAmount.Independent;
      case PackingName.Ready:
        return PackingAmount.Ready;
      case PackingName.Trip:
        return PackingAmount.Trip;
      default: {
        throw new Error('Unknown value of packing');
      }
    }
  }

  public calculate = (values: FormValues): Result => {
    const contentAmount = this.getContentAmount(values);
    const typeAmount = this.getTypeAmount(values);
    const packingAmount = this.getPackingAmount(values);

    const compatiblePackedBoxes = Number(values.packedBoxes);
    const compatibleWorkingDays = Number(values.workingDays);
    const compatibleWeight = Number(values.weight);

    const costOfOneTreasureAmount = typeAmount + contentAmount + packingAmount;
    const sumOfTreasures = compatiblePackedBoxes * compatibleWorkingDays;
    const weekAmount =
      costOfOneTreasureAmount * compatiblePackedBoxes * compatibleWorkingDays;
    const pledge = values.isPledge
      ? Number(values.pledge)
      : DEFAULT_RESULT_PLEDGE;
    const costOfTransportation =
      packingAmount === PackingAmount.Trip
        ? compatibleWeight * compatiblePackedBoxes * compatibleWorkingDays * 100
        : DEFAULT_RESULT_COST_OF_TRANSPORTATION;

    return {
      costOfOneTreasureAmount,
      weekAmount,
      pledge,
      sumOfTreasures,
      costOfTransportation,
    };
  };
}

export const calculateResult = new CalculateResult();
