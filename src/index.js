import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.Fragment>
    <h3>Hello World ...</h3>

    <h1>My Data</h1>

    <table border="1">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Contact</th>        
      </tr>

      <tr>
        <td>Yousuf Islam Rathore</td>
        <td>rathoreislam@gmail.com</td>
        <td>03082028980</td>
      </tr>
    </table>

    <h2>My Skills</h2>
    <ul>
      <li>HTML 5</li>
      <li>CSS 3</li>
      <li>BootStrap</li>
      <li>Javascript</li>
      <li>ECMA Script 6</li>
      <li>React JS</li>
    </ul>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
