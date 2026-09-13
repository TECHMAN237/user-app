import { BrowserRouter } from 'react-router-dom';
import { AppStateProvider } from './AppStateContext';
import { AppRouter } from '../routing/AppRouter';

/**
 * EcoLink Cameroon Core — application entry point.
 * Centralizes authentication, theme, global providers, and navigation.
 */
export function EcoLinkCameroonCore() {
  return (
    <AppStateProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-background text-on-background max-w-2xl mx-auto relative">
          <AppRouter />
        </div>
      </BrowserRouter>
    </AppStateProvider>
  );
}

export default EcoLinkCameroonCore;
