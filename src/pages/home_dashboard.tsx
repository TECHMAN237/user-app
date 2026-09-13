import html from './home_dashboard.html?raw';
import { HtmlPageView } from '../components/HtmlPageView';
import { homeDashboardNav } from '../utils/navigationResolvers';

export function HomeDashboard() {
  return <HtmlPageView html={html} pageId="home_dashboard" resolveNav={homeDashboardNav} />;
}
