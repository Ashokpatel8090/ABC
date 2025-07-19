// src/main.jsx
import React from 'react';
import '@fontsource/inter';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // ✅ Change here
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter> {/* ✅ Changed from BrowserRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
