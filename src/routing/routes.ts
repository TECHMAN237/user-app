export const ROUTES = {
  splash: '/',
  auth: '/auth',
  home: '/home',
  explore: '/explore',
  opportunityDetail: '/opportunity-detail',
  community: '/community',
  postDetail: '/post-detail',
  createPost: '/create-post',
  ecoquest: '/ecoquest',
  challengeDetail: '/challenge-detail',
  challengeRegistration: '/challenge-registration',
  rewards: '/rewards',
  leaderboard: '/leaderboard',
  myImpact: '/my-impact',
  analytics: '/analytics',
  notifications: '/notifications',
  profile: '/profile',
  editProfile: '/edit-profile',
  learn: '/learn',
  learnCategory: '/learn/category',
  learnArticle: '/learn/article',
  savedOpportunities: '/saved-opportunities',
  savedArticles: '/saved-articles',
  certificate: '/certificate',
  publicProfile: '/public-profile',
  registration: '/registration',
  organizationInfo: '/organization-info',
  mapView: '/map-view',
  imageViewer: '/image-viewer',
  commentThread: '/comment-thread',
  achievementDetail: '/achievement-detail',
  badgeDetail: '/badge-detail',
  systemDetails: '/system-details',
  preferences: '/preferences',
  notificationSettings: '/notification-settings',
  privacySettings: '/privacy-settings',
  helpCentre: '/help-centre',
  about: '/about',
  searchResults: '/search-results',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

export const TAB_ROUTES = [
  ROUTES.home,
  ROUTES.explore,
  ROUTES.ecoquest,
  ROUTES.learn,
  ROUTES.profile,
] as const;

export type TabRoute = (typeof TAB_ROUTES)[number];

export function isTabRoute(path: string): path is TabRoute {
  return (TAB_ROUTES as readonly string[]).includes(path);
}
