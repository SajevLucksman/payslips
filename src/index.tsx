import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';

const initI18n = async () => {
  await i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      debug: true,
      interpolation: {
        escapeValue: false,
      },
      backend: {
        loadPath: '/assets/i18n/{{lng}}.json',  // Adjust path as per your project structure
      },
    });
};

// Initialize i18next and then render the app
initI18n().then(() => {
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
});

// Report Web Vitals (if applicable)
reportWebVitals();
