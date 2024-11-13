import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// eslint-disable-next-line no-unused-vars
import Card from "./card.jsx"
import Header from "./header.jsx";
import GetUser from "./form.jsx";
import Ex from "./propsExercise";
import AgeChecker from "./ternary";
import Arrays from "./arrays";
import IsGasPlanet from "./planets";
import Counting from "./states";
import ChangeOnInput from "./anotherStateWithInput";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header/>
      <GetUser/>
      <Suspense/>
    <App />
    <Card/>
      <AgeChecker/>
      <Ex/>
      <Arrays/>
      <IsGasPlanet/>
      <Counting/>
      <ChangeOnInput/>
  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
