import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CounterApp from "./Counter";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <CounterApp/>
  </React.StrictMode>
);

