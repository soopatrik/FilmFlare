import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './App'; // Import Main from App.tsx
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Main /> {/* Render Main instead of App */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();