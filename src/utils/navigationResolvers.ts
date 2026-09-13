import type { NavResolver } from '../components/HtmlPageView';
import { hasIcon, textIncludes } from '../components/HtmlPageView';
import { ROUTES } from '../routing/routes';

export const homeDashboardNav: NavResolver = (el) => {
  if (hasIcon(el, 'notifications')) return ROUTES.notifications;
  if (el.closest('header')?.contains(el) && el.closest('.rounded-full')?.querySelector('img')) {
    return ROUTES.profile;
  }
  if (textIncludes(el, 'see all') && el.closest('section')?.querySelector('h2')?.textContent?.includes('Environmental Impact')) {
    return ROUTES.myImpact;
  }
  if (textIncludes(el, 'details') || textIncludes(el, 'continue')) return ROUTES.ecoquest;
  if (textIncludes(el, 'view calendar')) return ROUTES.explore;
  if (textIncludes(el, 'join workshop')) return ROUTES.opportunityDetail;
  if (el.closest('.bg-primary-container.rounded-2xl') || textIncludes(el, 'ecopoints')) return ROUTES.rewards;
  if (el.closest('section.relative.h-64')) return ROUTES.ecoquest;
  if (el.closest('.bg-white.rounded-3xl') && textIncludes(el, 'continue')) return ROUTES.ecoquest;
  return null;
};

export const exploreOpportunitiesNav: NavResolver = (el) => {
  if (hasIcon(el, 'notifications')) return ROUTES.notifications;
  if (hasIcon(el, 'search')) return ROUTES.searchResults;
  if (textIncludes(el, 'community')) return ROUTES.community;
  if (textIncludes(el, 'join campaign', 'join')) return ROUTES.opportunityDetail;
  if (el.closest('.flex.items-center.gap-4')?.querySelector('h4')) return ROUTES.opportunityDetail;
  if (textIncludes(el, 'see all')) return ROUTES.explore;
  if (el.closest('.aspect-\\[16\\/10\\]') || el.closest('[class*="aspect-"]')) return ROUTES.opportunityDetail;
  return null;
};

export const communityFeedNav: NavResolver = (el) => {
  if (hasIcon(el, 'notifications')) return ROUTES.notifications;
  if (hasIcon(el, 'search')) return ROUTES.searchResults;
  if (textIncludes(el, 'opportunities')) return ROUTES.explore;
  if (hasIcon(el, 'edit')) return ROUTES.createPost;
  if (hasIcon(el, 'share')) return 'share';
  if (hasIcon(el, 'favorite')) return 'like';
  if (hasIcon(el, 'chat_bubble')) return ROUTES.postDetail;
  if (hasIcon(el, 'bookmark')) return ROUTES.savedArticles;
  if (el.closest('article')) {
    if (hasIcon(el, 'favorite') || hasIcon(el, 'chat_bubble') || hasIcon(el, 'share') || hasIcon(el, 'bookmark')) {
      return null; // handled above
    }
    return ROUTES.postDetail;
  }
  if (el.closest('.w-10.h-10.rounded-full')) return ROUTES.publicProfile;
  return null;
};

export const postDetailNav: NavResolver = (el) => {
  if (hasIcon(el, 'arrow_back')) return 'back';
  if (hasIcon(el, 'share')) return 'share';
  if (textIncludes(el, 'follow')) return ROUTES.publicProfile;
  if (hasIcon(el, 'favorite')) return 'like';
  if (textIncludes(el, 'reply')) return ROUTES.commentThread;
  if (el.closest('.w-12.h-12.rounded-full')) return ROUTES.publicProfile;
  if (textIncludes(el, '#')) return ROUTES.community;
  return null;
};

export const ecoquestNav: NavResolver = (el) => {
  if (hasIcon(el, 'notifications')) return ROUTES.notifications;
  if (textIncludes(el, 'view all')) return ROUTES.ecoquest;
  if (textIncludes(el, 'continue', 'start')) return ROUTES.challengeDetail;
  if (el.closest('.group.bg-surface-container-lowest')) return ROUTES.challengeDetail;
  if (el.closest('.bg-gradient-to-r.from-primary')) return ROUTES.rewards;
  return null;
};

export const myImpactNav: NavResolver = (el) => {
  if (hasIcon(el, 'notifications')) return ROUTES.notifications;
  if (el.closest('.w-8.h-8.rounded-full.overflow-hidden')) return ROUTES.profile;
  if (textIncludes(el, 'view all')) return ROUTES.analytics;
  if (textIncludes(el, 'view rewards')) return ROUTES.rewards;
  if (el.closest('.aspect-square')) return ROUTES.badgeDetail;
  return null;
};

export const notificationsNav: NavResolver = (el) => {
  if (hasIcon(el, 'arrow_back')) return 'back';
  const card = el.closest('.rounded-xl');
  if (card) {
    const title = card.querySelector('h3')?.textContent?.toLowerCase() ?? '';
    if (title.includes('reward')) return ROUTES.rewards;
    if (title.includes('event') || title.includes('reminder')) return ROUTES.opportunityDetail;
    if (title.includes('certificate')) return ROUTES.certificate;
    if (title.includes('achievement')) return ROUTES.achievementDetail;
    if (title.includes('ngo')) return ROUTES.challengeDetail;
  }
  if (textIncludes(el, 'unread', 'all', 'mentions', 'activity')) return null;
  return null;
};

export const profileNav: NavResolver = (el) => {
  if (hasIcon(el, 'notifications')) return ROUTES.notifications;
  if (el.closest('.w-8.h-8.rounded-full')) return ROUTES.editProfile;
  if (textIncludes(el, 'edit profile')) return ROUTES.editProfile;
  if (textIncludes(el, 'account settings')) return ROUTES.preferences;
  if (textIncludes(el, 'privacy')) return ROUTES.privacySettings;
  if (textIncludes(el, 'notification settings')) return ROUTES.notificationSettings;
  if (textIncludes(el, 'help')) return ROUTES.helpCentre;
  if (textIncludes(el, 'view all') && el.closest('section')?.querySelector('h3')?.textContent?.includes('Badges')) {
    return ROUTES.badgeDetail;
  }
  if (textIncludes(el, 'view all') && el.closest('section')?.querySelector('h3')?.textContent?.includes('Certificates')) {
    return ROUTES.certificate;
  }
  if (textIncludes(el, 'logout')) return ROUTES.auth;
  if (el.closest('.flex-shrink-0.w-48')) return ROUTES.certificate;
  return null;
};
