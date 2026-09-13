import html from './explore_opportunities.html?raw';
import { HtmlPageView } from '../components/HtmlPageView';
import { exploreOpportunitiesNav } from '../utils/navigationResolvers';
import { useAppState } from '../core/AppStateContext';
import { ROUTES } from '../routing/routes';

export function ExploreOpportunities() {
  const { setSelected } = useAppState();
  const resolveNav = (el: HTMLElement, container: HTMLElement) => {
    const result = exploreOpportunitiesNav(el, container);
    if (result === ROUTES.opportunityDetail) {
      setSelected({ opportunityId: 'opp-1' });
    }
    return result;
  };
  return <HtmlPageView html={html} pageId="explore_opportunities" resolveNav={resolveNav} />;
}
