import React from 'react';
import ReactDOM from 'react-dom';
import '@pwabuilder/pwainstall'
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <pwa-install installbuttontext="Προσθήκη στην Αρχική Σελίδα"></pwa-install> */}
  </React.StrictMode>,
  document.getElementById('root')
);