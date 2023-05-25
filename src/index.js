import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom/dist/umd/react-router-dom.development';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
            <Route path= "/" component={App} />
        </Routes>
        
    
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

