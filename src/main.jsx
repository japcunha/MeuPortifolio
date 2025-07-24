import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.css';
import './style/projects.css';
import './style/contact.css';
import './style/skillBar.css';
import './style/aboutMe.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

