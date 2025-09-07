import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'), {
  identifierPrefix: 'hunter-portfolio-',
});
root.render(
  <React.StrictMode>
    <ErrorBoundary>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
