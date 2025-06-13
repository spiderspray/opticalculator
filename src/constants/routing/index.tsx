import { createBrowserRouter } from 'react-router-dom';

import { CalculatorPage } from '@/src/pages/calculator';
import { ErrorPage } from '@/src/pages/error';
import { HomePage } from '@/src/pages/home';
import { WelcomePage } from '@/src/pages/welcome';

import { PagePath } from './paths';

export const ROUTS = createBrowserRouter([
  {
    path: PagePath.Home,
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: PagePath.Calculator,
        element: <CalculatorPage />,
      },
      {
        path: PagePath.Welcome,
        element: <WelcomePage />,
      },
    ],
  },
]);
