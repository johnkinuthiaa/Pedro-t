import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {User} from "./card";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
      <User name={"john"} age={19} status={"single fullstack dev"}/>
  </React.StrictMode>
);

