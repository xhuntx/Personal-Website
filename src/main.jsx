import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

// Create root with performance optimizations
const root = ReactDOM.createRoot(document.getElementById('root'), {
  identifierPrefix: 'hunter-portfolio-',
});

// Render with error boundary for better error handling
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
