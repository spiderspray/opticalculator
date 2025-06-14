import { NUMBER_OF_TREASURES_TO_RECEIVE_A_BONUS } from '../../../constants';
import type { Result } from '../../../types';
import { DEFAULT_RESULT_VALUE, MONTH_NAME, WEEK_NAME } from '../constants';

export const getWeekBonusText = (resultInfo: Result | null) => {
  if (resultInfo) {
    const isBonus =
      resultInfo.sumOfTreasures >= NUMBER_OF_TREASURES_TO_RECEIVE_A_BONUS;
    const result = isBonus
      ? `${WEEK_NAME}: ${resultInfo.weekBonus}`
      : `До премии не хватает ${NUMBER_OF_TREASURES_TO_RECEIVE_A_BONUS - resultInfo.sumOfTreasures} кладов`;

    return result;
  } else {
    return `${WEEK_NAME}: ${DEFAULT_RESULT_VALUE}`;
  }
};

export const getMonthBonusText = (resultInfo: Result | null) => {
  if (resultInfo) {
    const isBonus =
      resultInfo.sumOfTreasures >= NUMBER_OF_TREASURES_TO_RECEIVE_A_BONUS;
    const result = isBonus
      ? `${MONTH_NAME}: ${resultInfo.monthBonus}`
      : `До премии не хватает ${NUMBER_OF_TREASURES_TO_RECEIVE_A_BONUS - resultInfo.sumOfTreasures} кладов`;

    return result;
  } else {
    return `${MONTH_NAME}: ${DEFAULT_RESULT_VALUE}`;
  }
};
