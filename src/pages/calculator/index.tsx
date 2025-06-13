import { useState } from 'react';
import { useFormik } from 'formik';
import classNames from 'classnames';

import { Form } from './components/Form';
import { Result } from './components/Result';
import { calculateResult } from './helpers/calculate-week-sum';
import { formValidator } from './helpers/form-validator';
import { DEFAULT_FORM_VALUES } from './constants';
import type { FormValues, Result as TResult } from './types';

import styles from './styles.module.css';

export const CalculatorPage = () => {
  const [result, setResult] = useState<TResult | null>(null);

  const formikOnSubmit = (values: FormValues): void => {
    const newValue = calculateResult.calculate(values);

    setResult(newValue);
  };

  const formik = useFormik({
    initialValues: DEFAULT_FORM_VALUES,
    validate: formValidator.validate,
    onSubmit: formikOnSubmit,
  });

  return (
    <div>
      <h1 className={styles.title}>
        Сколько заработаешь в Магазине Оптимиста?
      </h1>
      <div className={styles.grid}>
        <div className={classNames(styles.gridItem, styles.gridItem_left)}>
          <Form formik={formik} />
        </div>
        <div className={classNames(styles.gridItem, styles.gridItem_right)}>
          <Result result={result} />
        </div>
      </div>
    </div>
  );
};
