import React from 'react';
import ReactDOM from 'react-dom'; // Change here: from 'react-dom/client' to 'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
