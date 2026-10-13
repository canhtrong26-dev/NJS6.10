// app/page.tsx
'use client';

import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <LanguageSwitcher />
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}