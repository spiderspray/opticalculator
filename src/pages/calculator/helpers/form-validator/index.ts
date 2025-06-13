import type { FormikErrors } from 'formik';

import { FORM_IDS, FROM_UNKNOWN_VALUE } from '../../constants';
import type { FormValues, InputValues, SelectValues } from '../../types';

class FormValidator {
  private readonly messageNotEmpty = 'Значение не может быть пустым';
  private readonly messageShouldBeNumber = 'Значение может быть только числом';
  private readonly messageNotEqualZero = 'Значение не может быть равно нулю';

  private getPledgeErrorMessage(
    value: FormValues['pledge'],
    flag: FormValues['isPledge']
  ): string {
    let result = '';

    if (!flag) return result;

    const compatibleValue = Number(value);

    if (value.length === 0) {
      result = this.messageNotEmpty;
    } else if (isNaN(compatibleValue)) {
      result = this.messageShouldBeNumber;
    } else if (compatibleValue === 0) {
      result = this.messageNotEqualZero;
    }

    return result;
  }

  private getInputErrorMessage(value: InputValues): string {
    let result = '';

    const compatibleValue = Number(value);

    if (value.length === 0) {
      result = this.messageNotEmpty;
    } else if (isNaN(compatibleValue)) {
      result = this.messageShouldBeNumber;
    } else if (compatibleValue === 0) {
      result = this.messageNotEqualZero;
    }

    return result;
  }

  private getSelectErrorMessage(value: SelectValues): string {
    let result = '';

    if (value === FROM_UNKNOWN_VALUE) {
      result = 'Значение должно быть выбрано';
    }

    return result;
  }

  private setSelectErrors(
    values: FormValues,
    result: FormikErrors<FormValues>
  ): void {
    const exactValues = {
      [FORM_IDS.content]: values.content,
      [FORM_IDS.packing]: values.packing,
      [FORM_IDS.type]: values.type,
      [FORM_IDS.weight]: values.weight,
    };

    Object.entries(exactValues).forEach((item) => {
      const [key, value] = item;
      const refinedKey = key as keyof FormValues;

      const errorMessage = this.getSelectErrorMessage(value);

      if (errorMessage.length !== 0) {
        result[refinedKey] = errorMessage;
      }
    });
  }

  private setInputErrors(
    values: FormValues,
    result: FormikErrors<FormValues>
  ): void {
    const exactValues = {
      [FORM_IDS.workingDays]: values.workingDays,
      [FORM_IDS.packedBoxes]: values.packedBoxes,
    };

    Object.entries(exactValues).forEach((item) => {
      const [key, value] = item;
      const refinedKey = key as keyof FormValues;

      const errorMessage = this.getInputErrorMessage(value);

      if (errorMessage.length !== 0) {
        result[refinedKey] = errorMessage;
      }
    });
  }

  private setRestErrors(
    values: FormValues,
    result: FormikErrors<FormValues>
  ): void {
    const pledgeErrorMessage = this.getPledgeErrorMessage(
      values.pledge,
      values.isPledge
    );

    if (pledgeErrorMessage.length !== 0) {
      result.pledge = pledgeErrorMessage;
    }
  }

  public validate = (values: FormValues): FormikErrors<FormValues> => {
    const result: FormikErrors<FormValues> = {};

    this.setSelectErrors(values, result);
    this.setInputErrors(values, result);
    this.setRestErrors(values, result);

    return result;
  };
}

export const formValidator = new FormValidator();
