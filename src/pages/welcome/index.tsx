import type { FC } from 'react';

import { SimpleLink } from '@/src/components/SimpleLink';

import styles from './styles.module.css';

export const WelcomePage: FC = () => (
  <section>
    <div className={styles.header}>
      <h1 className={styles.mainTitle}>Добро пожаловать!</h1>
      <h2 className={styles.additionalTitle}>
        Команда разработки "Spider Spray" рада представить Вам свой продукт.
      </h2>
    </div>
    <div className={styles.content}>
      <p className={styles.contentItem}>
        <SimpleLink href={import.meta.env.VITE_SERVICE_DOMAIN}>
          Ссылка на рабочий сайт в сети Интернет.
        </SimpleLink>
      </p>
      <p className={styles.contentItem}>
        Приложение не собирает и не анализирует ваши данные!
      </p>
    </div>
    <details className={styles.contentItem}>
      <summary>Контакты для связи в Jabber (ОТР)</summary>
      <SimpleLink href={`mailto:${import.meta.env.VITE_OWNER_EMAIL}`}>
        {import.meta.env.VITE_OWNER_EMAIL}
      </SimpleLink>
    </details>
  </section>
);
