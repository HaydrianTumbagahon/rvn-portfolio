import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import initDevDeterrent from './utils/devDeterrent';

// Initialize client-side deterrent (bundled script; allowed by CSP 'self')
initDevDeterrent();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
