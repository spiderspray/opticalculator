import { NUMBER_OF_WEEKS_PER_MONTH } from '../../../helpers/calculate-result/constants';
import type { Result } from '../../../types';
import {
  DEFAULT_RESULT_VALUE,
  MONTH_NAME,
  NUMBER_OF_TREASURES_TO_RECEIVE_A_BONUS,
  WEEK_NAME,
} from '../constants';

export const getWeekBonus = (
  sumOfTreasures: Result['sumOfTreasures'] | undefined
) => {
  if (sumOfTreasures) {
    const isBonus = sumOfTreasures > NUMBER_OF_TREASURES_TO_RECEIVE_A_BONUS;
    const result = isBonus
      ? `${WEEK_NAME}: ${sumOfTreasures * 100}`
      : `До премии не хватает ${NUMBER_OF_TREASURES_TO_RECEIVE_A_BONUS - sumOfTreasures} кладов`;

    return result;
  } else {
    return `${WEEK_NAME}: ${DEFAULT_RESULT_VALUE}`;
  }
};

export const getMonthBonus = (
  sumOfTreasures: Result['sumOfTreasures'] | undefined
) => {
  if (sumOfTreasures) {
    const isBonus = sumOfTreasures > NUMBER_OF_TREASURES_TO_RECEIVE_A_BONUS;
    const result = isBonus
      ? `${MONTH_NAME}: ${sumOfTreasures * 100 * NUMBER_OF_WEEKS_PER_MONTH}`
      : `До премии не хватает ${NUMBER_OF_TREASURES_TO_RECEIVE_A_BONUS - sumOfTreasures} кладов`;

    return result;
  } else {
    return `${MONTH_NAME}: ${DEFAULT_RESULT_VALUE}`;
  }
};
