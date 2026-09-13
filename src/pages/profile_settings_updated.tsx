import html from './profile_settings_updated.html?raw';
import { HtmlPageView } from '../components/HtmlPageView';
import { profileNav } from '../utils/navigationResolvers';
import { useAppState } from '../core/AppStateContext';
import { ROUTES } from '../routing/routes';

export function ProfileSettingsUpdated() {
  const { logout } = useAppState();
  const resolveNav = (el: HTMLElement, container: HTMLElement) => {
    const result = profileNav(el, container);
    if (result === ROUTES.auth) {
      logout();
    }
    return result;
  };
  return <HtmlPageView html={html} pageId="profile_settings_updated" resolveNav={resolveNav} />;
}
