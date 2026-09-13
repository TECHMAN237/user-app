import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { EcoLinkCameroonCore } from './core/ecolink_cameroon_core';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EcoLinkCameroonCore />
  </StrictMode>,
);
