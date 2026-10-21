import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import i18n from './translation.tsx';

import './assets/css/animation.css';
import './assets/css/font.css';

const root = createRoot(document.getElementById('root')!);
let rendered = false;

const render = () => {
  if (rendered) return;
  rendered = true;
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
};

if (i18n.isInitialized) {
  render();
} else {
  i18n.on('initialized', render);
}