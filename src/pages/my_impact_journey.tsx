import html from './my_impact_journey.html?raw';
import { HtmlPageView } from '../components/HtmlPageView';
import { myImpactNav } from '../utils/navigationResolvers';

export function MyImpactJourney() {
  return <HtmlPageView html={html} pageId="my_impact_journey" resolveNav={myImpactNav} />;
}
