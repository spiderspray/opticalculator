import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { ROUTS } from './constants/routing';

import './styles/index.css';

const container = document.getElementById('app')!;

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <RouterProvider router={ROUTS} />
  </React.StrictMode>
);
