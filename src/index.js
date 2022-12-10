import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/*
Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
*/
import 'mdbootstrap/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



