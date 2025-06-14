import type { FC } from 'react';

import {
  DEFAULT_RESULT_COST_OF_TRANSPORTATION,
  DEFAULT_RESULT_PLEDGE,
} from '../../constants';
import type { Result as TResult } from '../../types';
import { DEFAULT_RESULT_VALUE } from './constants';
import { getMonthBonus, getWeekBonus } from './helpers';

import styles from './styles.module.css';

type Props = {
  result: TResult | null;
};

export const Result: FC<Props> = ({ result }) => {
  const weekBonus = getWeekBonus(result?.sumOfTreasures);
  const monthBonus = getMonthBonus(result?.sumOfTreasures);

  const isRenderPledge = Boolean(
    result?.pledge && result.pledge !== DEFAULT_RESULT_PLEDGE
  );
  const isRenderCostOfTransportation = Boolean(
    result?.costOfTransportation &&
      result.costOfTransportation !== DEFAULT_RESULT_COST_OF_TRANSPORTATION
  );

  return (
    <div>
      <h2 className={styles.title}>Результаты</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          Сумма за один клад:{' '}
          {result?.costOfOneTreasureAmount ?? DEFAULT_RESULT_VALUE}
        </li>
        <li className={styles.listItem}>
          Заработаешь за неделю: {result?.weekAmount ?? DEFAULT_RESULT_VALUE}
        </li>
        <li className={styles.listItem}>
          Заработаешь за месяц:{' '}
          {result?.monthAmount ? result.monthAmount : DEFAULT_RESULT_VALUE}
        </li>
        <li className={styles.listItem}>{weekBonus}</li>
        <li className={styles.listItem}>{monthBonus}</li>
        <li className={styles.listItem}>
          Заработаешь за перевозку:{' '}
          {isRenderCostOfTransportation
            ? result!.costOfTransportation
            : DEFAULT_RESULT_VALUE}
        </li>
        <li className={styles.listItem}>
          Ваш залог <strong>БУДЕТ УДВОЕН</strong> и составит:{' '}
          {isRenderPledge ? result!.pledge * 2 : DEFAULT_RESULT_VALUE}
        </li>
        <li className={styles.listItem}>
          Финальная сумма за месяц с учётом премии:{' '}
          {result?.finalMonthSum ? result.finalMonthSum : DEFAULT_RESULT_VALUE}
        </li>
      </ul>
    </div>
  );
};
