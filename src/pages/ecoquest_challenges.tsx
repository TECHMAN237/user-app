import html from './ecoquest_challenges.html?raw';
import { HtmlPageView } from '../components/HtmlPageView';
import { ecoquestNav } from '../utils/navigationResolvers';
import { useAppState } from '../core/AppStateContext';
import { ROUTES } from '../routing/routes';

export function EcoquestChallenges() {
  const { setSelected } = useAppState();
  const resolveNav = (el: HTMLElement, container: HTMLElement) => {
    const result = ecoquestNav(el, container);
    if (result === ROUTES.challengeDetail) {
      setSelected({ challengeId: 'challenge-1' });
    }
    return result;
  };
  return <HtmlPageView html={html} pageId="ecoquest_challenges" resolveNav={resolveNav} />;
}
