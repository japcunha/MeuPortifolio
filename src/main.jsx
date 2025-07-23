import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.css';
import './style/projects.css';
import './style/contact.css';
import './style/skillBar.css';
import './style/aboutMe.css';
import Projects from './components/Projects.jsx';
import SkillBar from './components/SkillBar.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

