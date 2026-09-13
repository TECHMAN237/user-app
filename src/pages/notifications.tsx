import html from './notifications.html?raw';
import { HtmlPageView } from '../components/HtmlPageView';
import { notificationsNav } from '../utils/navigationResolvers';
import { useAppState } from '../core/AppStateContext';

export function Notifications() {
  const { markNotificationRead } = useAppState();
  const resolveNav = (el: HTMLElement, container: HTMLElement) => {
    const card = el.closest('.rounded-xl');
    if (card) {
      const idx = [...container.querySelectorAll('.rounded-xl')].indexOf(card);
      if (idx >= 0) markNotificationRead(String(idx + 1));
    }
    return notificationsNav(el, container);
  };
  return <HtmlPageView html={html} pageId="notifications" resolveNav={resolveNav} />;
}
