import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router/Router.jsx';
import './style.scss'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router/>
);
// transform: convertRoutesToDataRoutes(deg)