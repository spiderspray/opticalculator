import type { useFormik } from 'formik';

export type Formik<T extends object> = ReturnType<typeof useFormik<T>>;
