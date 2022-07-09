import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Page from './components/page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Page />
);



reportWebVitals()
