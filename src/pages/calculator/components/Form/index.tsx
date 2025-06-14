import { type FC, Fragment } from 'react';
import classNames from 'classnames';

import type { Formik } from '@/src/types/libs/formik';

import {
  Content,
  DEFAULT_FORM_UNKNOWN_VALUE,
  FORM_IDS,
  PackingAmount,
  PackingName,
  TypeAmount,
  TypeName,
  Weight,
} from '../../constants';
import type { FormValues } from '../../types';
import { FORM_ID } from './constants';

import styles from './styles.module.css';

type Props = {
  formik: Formik<FormValues>;
};

export const Form: FC<Props> = ({ formik }) => {
  // CONSTANTS

  const isTypeError = Boolean(formik.touched.type && formik.errors.type);
  const isWeightError = Boolean(formik.touched.weight && formik.errors.weight);
  const isContentError = Boolean(
    formik.touched.content && formik.errors.content
  );
  const isPackingError = Boolean(
    formik.touched.packing && formik.errors.packing
  );
  const isWorkingDaysError = Boolean(
    formik.touched.workingDays && formik.errors.workingDays
  );
  const isPackedBoxesError = Boolean(
    formik.touched.packedBoxes && formik.errors.packedBoxes
  );
  const isPledgeError = Boolean(formik.touched.pledge && formik.errors.pledge);

  const buttonSubmitFormDisabled = !formik.isValid && formik.submitCount !== 0;

  const isMushrooms = formik.values.content === Content.Mushrooms;
  const isCocaine = formik.values.content === Content.Cocaine;

  return (
    <form
      id={FORM_ID}
      name={FORM_ID}
      noValidate={true}
      onSubmit={formik.handleSubmit}
    >
      <div className={styles.formList}>
        <p className={styles.formItem}>
          <label htmlFor={FORM_IDS.type} className={styles.label}>
            Тип клада
          </label>
          <select
            id={FORM_IDS.type}
            className={styles.select}
            {...formik.getFieldProps(FORM_IDS.type)}
          >
            <option disabled value={DEFAULT_FORM_UNKNOWN_VALUE}>
              Не выбрано
            </option>
            <option value={TypeName.Magnet}>
              Магнит (+{TypeAmount.Magnet})
            </option>
            <option value={TypeName.Stone}>
              Камень/бутафория (+{TypeAmount.Stone})
            </option>
            <option value={TypeName.Pit}>Прикоп</option>
          </select>
          {isTypeError && (
            <span className={styles.error}>{formik.errors.type}</span>
          )}
        </p>
        <p className={styles.formItem}>
          <label htmlFor={FORM_IDS.content} className={styles.label}>
            Стафф
          </label>
          <select
            id={FORM_IDS.content}
            className={styles.select}
            {...formik.getFieldProps(FORM_IDS.content)}
          >
            <option disabled value={DEFAULT_FORM_UNKNOWN_VALUE}>
              Не выбрано
            </option>
            <option value={Content.Hashish}>Шишки/Гашиш</option>
            <option value={Content.Mushrooms}>Экстази/Грибы</option>
            <option value={Content.Mephedron}>Мефедрон</option>
            <option value={Content.Cocaine}>Кокаин</option>
          </select>
          {isContentError && (
            <span className={styles.error}>{formik.errors.content}</span>
          )}
        </p>
        <p className={styles.formItem}>
          <label htmlFor={FORM_IDS.weight} className={styles.label}>
            Вес клада
          </label>
          <select
            id={FORM_IDS.weight}
            className={styles.select}
            {...formik.getFieldProps(FORM_IDS.weight)}
          >
            <option disabled value={DEFAULT_FORM_UNKNOWN_VALUE}>
              Не выбрано
            </option>
            {!isMushrooms && (
              <option value={Weight.First}>{Weight.First}</option>
            )}
            <option value={Weight.Second}>{Weight.Second}</option>
            <option value={Weight.Third}>{Weight.Third}</option>
            <option value={Weight.Fourth}>{Weight.Fourth}</option>
            <option value={Weight.Fourth}>{Weight.Fifth}</option>
            {!isCocaine && (
              <Fragment>
                <option value={Weight.Tenth}>{Weight.Tenth}</option>
              </Fragment>
            )}
          </select>
          {isWeightError && (
            <span className={styles.error}>{formik.errors.weight}</span>
          )}
        </p>
        <p className={styles.formItem}>
          <label htmlFor={FORM_IDS.packing} className={styles.label}>
            Фасовка самостоятельная?
          </label>
          <select
            id={FORM_IDS.packing}
            className={styles.select}
            {...formik.getFieldProps(FORM_IDS.packing)}
          >
            <option disabled value={DEFAULT_FORM_UNKNOWN_VALUE}>
              Не выбрано
            </option>
            <option value={PackingName.Independent}>
              Самостоятельная по прайсу
            </option>
            <option value={PackingName.Trip}>
              Командировка (+{PackingAmount.Trip})
            </option>
            <option value={PackingName.Ready}>
              Готовые клады ({PackingAmount.Ready})
            </option>
          </select>
          {isPackingError && (
            <span className={styles.error}>{formik.errors.packing}</span>
          )}
        </p>
        <p className={styles.formItem}>
          <label htmlFor={FORM_IDS.packedBoxes} className={styles.label}>
            Количество сделанных кладов в день
          </label>
          <input
            id={FORM_IDS.packedBoxes}
            className={styles.input}
            {...formik.getFieldProps(FORM_IDS.packedBoxes)}
          />
          {isPackedBoxesError && (
            <span className={styles.error}>{formik.errors.packedBoxes}</span>
          )}
        </p>
        <p className={styles.formItem}>
          <label htmlFor={FORM_IDS.workingDays} className={styles.label}>
            Количество рабочих дней в неделю
          </label>
          <input
            id={FORM_IDS.workingDays}
            className={styles.input}
            {...formik.getFieldProps(FORM_IDS.workingDays)}
          />
          {isWorkingDaysError && (
            <span className={styles.error}>{formik.errors.workingDays}</span>
          )}
        </p>
        <p className={classNames(styles.formItem, styles.formItem_flex)}>
          <input
            type='checkbox'
            className={styles.checkbox}
            id={FORM_IDS.isPledge}
            {...formik.getFieldProps(FORM_IDS.isPledge)}
          />
          <label htmlFor={FORM_IDS.isPledge}>Первоначальный залог</label>
        </p>
        {formik.values.isPledge && (
          <p className={styles.formItem}>
            <label htmlFor={FORM_IDS.pledge} className={styles.label}>
              Сумма залога
            </label>
            <input
              id={FORM_IDS.pledge}
              className={styles.input}
              {...formik.getFieldProps(FORM_IDS.pledge)}
            />
            {isPledgeError && (
              <span className={styles.error}>{formik.errors.pledge}</span>
            )}
          </p>
        )}
      </div>

      <button
        className={styles.button}
        type='submit'
        disabled={buttonSubmitFormDisabled}
      >
        Посчитать!
      </button>
    </form>
  );
};
