/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

// import { useTranslation } from 'react-i18next';

import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';

import { MainLayout } from './components/layout/MainLayout';
import { GlobalStyle } from 'styles/global-styles';

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <MainLayout />
    </BrowserRouter>
  );
}
