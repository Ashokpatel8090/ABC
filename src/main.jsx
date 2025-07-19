// src/main.jsx
import React from 'react';
import '@fontsource/inter';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Changed from HashRouter
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ This is now correct */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
