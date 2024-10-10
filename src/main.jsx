import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '/src/components/app/app.jsx';
import './main.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
