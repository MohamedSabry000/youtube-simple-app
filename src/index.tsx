import React from 'react';
import ReactDOM from 'react-dom/client';
import YoutubeProvider from './context/YoutubeContext'

import './index.css';
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <YoutubeProvider>
    <App />
  </YoutubeProvider>
);
